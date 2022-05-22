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
      ],
  });

  traverse(ast, {
    VariableDeclaration(path) {
      const { node } = path;
      const { declarations } = node;
      // console.log('declarations', JSON.stringify(declarations))
  
      // fs.writeFile('./test_res.js',  generate(ast).code, ()=> {
      //   console.log('success')
      // })
  
  
      node.declarations = declarations.filter((declaration) => {
        const { id } = declaration;
  
        if (t.isObjectPattern(id)) {
          // path.scope.getBinding(name).referenced 判断变量是否被引用
          // 通过filter移除掉没有使用的变量
          id.properties = id.properties.filter((property) => {
            const binding = path.scope.getBinding(property.key.name);
            if (!binding) return undefined
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
        } else if (t.isArrayPattern(id)) { // 如果是解构形式的数组定义  react中 useState中的定义
          const res = []
          id.elements.forEach( v => {
           const binding = path.scope.getBinding(v.name);
            const { referenced } = binding;
            // 数组的 constantViolations 都是为[] 空
            // 这里对没有应用的进行过滤 
            if(referenced) {
              res.push(v)
            }
          })
          id.elements = res; // 重新赋值新的数组
          return res.length;
      } else {
          //  fs.writeFile('./declarations.json', id, ()=> {})
          const binding = path.scope.getBinding(id.name);
          if (!binding) return undefined
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
      }
    },
  
    // How to get the version of react?
    // How to  save the file after runned the commant ?
    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers } = node;
      // throw Error(JSON.stringify(path))
      if (!specifiers.length) return;
  
      node.specifiers = specifiers.filter((specifier) => {
        const { local } = specifier;
        if (local.name === "React") return true
        const binding = path.scope.getBinding(local.name);
        return !!binding.referenced;
      });
      if (node.specifiers.length === 0) {
        path.remove();
      }
    },
    FunctionDeclaration(path) {
      const { node } = path;
      const { id } = node;
      const binding = path.scope.getBinding(id.name);
      // if(!binding) return undefined
      if (!binding.referenced) {
        path.remove();
      }
    },
  });

  activeTextEditor.edit((editBuilder) => {
    editBuilder.replace(
      new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(activeTextEditor.document.lineCount + 1, 0)
      ),
      generate(ast, {retainLines: true}).code
    );
  });
};