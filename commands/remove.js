const vscode = require("vscode");
const t = require("@babel/types");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const { isValidDocumentLanguage } = require("../utils.js");


module.exports = function () {
  const { activeTextEditor } = vscode.window;
  if (!activeTextEditor) {
    return;
  }
  // throw Error(JSON.stringify(activeTextEditor.document))
  if (!isValidDocumentLanguage(activeTextEditor.document)) {
    return;
  }

  const code = activeTextEditor.document.getText();

  const ast = parser.parse(code, {
    sourceType: "module",
    // parse in strict mode and allow module declarations
    plugins: [
    // enable jsx and flow syntax
    "jsx",
    "flow",
    "decorators-legacy",
    "decoratorsBeforeExport"] });



  let unusedVariablesFound = false;

  // 处理函数参数
  function getParamsList(path) {
    const { node } = path;
    const { params = [] } = node;
    let paramsList = [...params];
    for (let i = params.length - 1; i >= 0; i--) {
      let paramsId = params[i];
      if (paramsId && paramsId.type === 'ObjectPattern') {// 如果参数是以对象形式的解构 {}
        if (!paramsId.properties || !paramsId.properties.length) continue; // 如果对象中参数为空
        let propertiesList = [...paramsId.properties];

        paramsId.properties.forEach((k) => {
          const paramsBinding = path.scope.getBinding(k.key.name);
          if (!paramsBinding.referenced) {// 如果没被引用
            propertiesList = propertiesList.filter((w) => w.key.name !== k.key.name);
          }
        });
        if (!propertiesList.length) {// 如果对象中参数都没有引用 去除当前的解构对象
          paramsList.pop();
        }
        paramsId.properties = propertiesList;

      } else {
        const paramsBinding = path.scope.getBinding(paramsId.name);
        if (!paramsBinding.referenced) {
          paramsList.pop();
        } else {

          break;
        }
      }
    }
    return paramsList;
  }

  traverse(ast, {
    VariableDeclaration(path) {// 变量
      const { node } = path;
      const { declarations } = node;
      node.declarations = declarations.filter((declaration) => {
        const { id } = declaration;
        if (t.isObjectPattern(id)) {
          // path.scope.getBinding(name).referenced 判断变量是否被引用
          // 通过filter移除掉没有使用的变量
          id.properties = id.properties.filter((property) => {
            const binding = path.scope.getBinding(property.value.name || property.key.name);
            if (!binding) return undefined;
            // referenced 变量是否被引用
            // constantViolations 变量被重新定义的地方
            const { referenced, constantViolations } = binding;
            if (!referenced && constantViolations.length > 0) {
              constantViolations.map((violationPath) => {
                violationPath.remove();
              });
            }

            return referenced;
          });
          // 如果对象中所有变量都没有被应用，则该对象整个移除
          return id.properties.length > 0;
        } else if (t.isArrayPattern(id)) {// 如果是解构形式的数组定义  例如 react中 useState这样的定义
          const res = [];
          id.elements.forEach((v) => {
            const binding = path.scope.getBinding(v.name);
            const { referenced } = binding;
            // 数组的 constantViolations 都是为[] 空
            // 这里对没有应用的进行过滤 
            if (referenced) {
              res.push(v);
            }
          });
          id.elements = res; // 重新赋值新的数组
          return res.length;
        } else {
          const binding = path.scope.getBinding(id.name);
          if (!binding) return undefined;
          const { referenced, constantViolations } = binding;
          if (!referenced && constantViolations.length > 0) {
            constantViolations.map((violationPath) => {
              violationPath.remove();
            });
          }
          return referenced;
        }
      });


      if (node.declarations.length === 0) {
        path.remove();
        unusedVariablesFound = true;
      }
    },

    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers } = node;
      if (!specifiers.length) return;

      node.specifiers = specifiers.filter((specifier) => {
        const { local } = specifier;
        if (local.name === "React") return true;
        const binding = path.scope.getBinding(local.name);
        return !!binding.referenced;
      });
      if (node.specifiers.length === 0) {
        path.remove();
        unusedVariablesFound = true;
      }
    },
    FunctionDeclaration(path) {
      const { node } = path;
      const { id } = node; // 获取id和参数
      path.node.params = getParamsList(path) || [];

      const binding = path.scope.getBinding(id.name);
      if (!binding.referenced) {
        path.remove();
        unusedVariablesFound = true;
      }
    },
    // FunctionDeclaration(path) {
    //   const { node } = path;
    //   const { id } = node;
    //   const binding = path.scope.getBinding(id.name);
    //   // if(!binding) return undefined
    //   if (!binding.referenced) {
    //     path.remove();
    //   }
    // },
    // 箭头函数进行处理， 定义的变量赋值箭头时， 箭头函数和变量都会编译
    ArrowFunctionExpression(path) {//
      const { node } = path;
      node.params = getParamsList(path) || [];
    } });


  if (unusedVariablesFound) {
    activeTextEditor.edit((editBuilder) => {
      editBuilder.replace(
      new vscode.Range(
      new vscode.Position(0, 0),
      new vscode.Position(activeTextEditor.document.lineCount + 1, 0)),

      generate(ast, { retainLines: true, retainFunctionParens: true }).code);


    });
    vscode.window.showInformationMessage('Deleted unused variables!');
  } else {
    vscode.window.showInformationMessage("No unused variable found!");
  }
};
