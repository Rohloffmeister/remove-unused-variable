// const vscode = require("vscode");
const t = require("@babel/types");
const fs = require('fs');

const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
// const { isValidDocumentLanguage } = require("../utils.js");
const ast = {
  "type": "File",
  "start": 0,
  "end": 141,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 10,
      "column": 1
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 141,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 10,
        "column": 1
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "ImportDeclaration",
        "start": 0,
        "end": 26,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "specifiers": [
          {
            "type": "ImportDefaultSpecifier",
            "start": 7,
            "end": 12,
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "local": {
              "type": "Identifier",
              "start": 7,
              "end": 12,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 12
                },
                "identifierName": "React"
              },
              "name": "React"
            }
          }
        ],
        "importKind": "value",
        "source": {
          "type": "StringLiteral",
          "start": 18,
          "end": 25,
          "loc": {
            "start": {
              "line": 1,
              "column": 18
            },
            "end": {
              "line": 1,
              "column": 25
            }
          },
          "extra": {
            "rawValue": "react",
            "raw": "'react'"
          },
          "value": "react"
        },
        "assertions": []
      },
      {
        "type": "ExportDefaultDeclaration",
        "start": 28,
        "end": 141,
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 1
          }
        },
        "declaration": {
          "type": "FunctionDeclaration",
          "start": 43,
          "end": 141,
          "loc": {
            "start": {
              "line": 3,
              "column": 15
            },
            "end": {
              "line": 10,
              "column": 1
            }
          },
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "loc": {
              "start": {
                "line": 3,
                "column": 24
              },
              "end": {
                "line": 3,
                "column": 28
              },
              "identifierName": "test"
            },
            "name": "test"
          },
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 29
                },
                "end": {
                  "line": 3,
                  "column": 30
                },
                "identifierName": "a"
              },
              "name": "a"
            },
            {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 32
                },
                "end": {
                  "line": 3,
                  "column": 33
                },
                "identifierName": "b"
              },
              "name": "b"
            },
            {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 35
                },
                "end": {
                  "line": 3,
                  "column": 36
                },
                "identifierName": "c"
              },
              "name": "c"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 66,
            "end": 141,
            "loc": {
              "start": {
                "line": 3,
                "column": 38
              },
              "end": {
                "line": 10,
                "column": 1
              }
            },
            "body": [
              {
                "type": "FunctionDeclaration",
                "start": 70,
                "end": 93,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 2
                  },
                  "end": {
                    "line": 6,
                    "column": 3
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 11
                    },
                    "end": {
                      "line": 4,
                      "column": 12
                    },
                    "identifierName": "t"
                  },
                  "name": "t"
                },
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 13
                      },
                      "end": {
                        "line": 4,
                        "column": 14
                      },
                      "identifierName": "c"
                    },
                    "name": "c"
                  },
                  {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 16
                      },
                      "end": {
                        "line": 4,
                        "column": 17
                      },
                      "identifierName": "d"
                    },
                    "name": "d"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 87,
                  "end": 93,
                  "loc": {
                    "start": {
                      "line": 4,
                      "column": 19
                    },
                    "end": {
                      "line": 6,
                      "column": 3
                    }
                  },
                  "body": [],
                  "directives": []
                }
              },
              {
                "type": "ReturnStatement",
                "start": 96,
                "end": 138,
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 2
                  },
                  "end": {
                    "line": 8,
                    "column": 33
                  }
                },
                "argument": {
                  "type": "JSXElement",
                  "start": 109,
                  "end": 136,
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 4
                    },
                    "end": {
                      "line": 8,
                      "column": 31
                    }
                  },
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 109,
                    "end": 126,
                    "loc": {
                      "start": {
                        "line": 8,
                        "column": 4
                      },
                      "end": {
                        "line": 8,
                        "column": 21
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 110,
                      "end": 113,
                      "loc": {
                        "start": {
                          "line": 8,
                          "column": 5
                        },
                        "end": {
                          "line": 8,
                          "column": 8
                        }
                      },
                      "name": "div"
                    },
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 114,
                        "end": 125,
                        "loc": {
                          "start": {
                            "line": 8,
                            "column": 9
                          },
                          "end": {
                            "line": 8,
                            "column": 20
                          }
                        },
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 114,
                          "end": 121,
                          "loc": {
                            "start": {
                              "line": 8,
                              "column": 9
                            },
                            "end": {
                              "line": 8,
                              "column": 16
                            }
                          },
                          "name": "onClick"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 122,
                          "end": 125,
                          "loc": {
                            "start": {
                              "line": 8,
                              "column": 17
                            },
                            "end": {
                              "line": 8,
                              "column": 20
                            }
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 124,
                            "loc": {
                              "start": {
                                "line": 8,
                                "column": 18
                              },
                              "end": {
                                "line": 8,
                                "column": 19
                              },
                              "identifierName": "t"
                            },
                            "name": "t"
                          }
                        }
                      }
                    ],
                    "selfClosing": false
                  },
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 130,
                    "end": 136,
                    "loc": {
                      "start": {
                        "line": 8,
                        "column": 25
                      },
                      "end": {
                        "line": 8,
                        "column": 31
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 132,
                      "end": 135,
                      "loc": {
                        "start": {
                          "line": 8,
                          "column": 27
                        },
                        "end": {
                          "line": 8,
                          "column": 30
                        }
                      },
                      "name": "div"
                    }
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 126,
                      "end": 130,
                      "loc": {
                        "start": {
                          "line": 8,
                          "column": 21
                        },
                        "end": {
                          "line": 8,
                          "column": 25
                        }
                      },
                      "extra": {
                        "rawValue": "test",
                        "raw": "test"
                      },
                      "value": "test"
                    }
                  ],
                  "extra": {
                    "parenthesized": true,
                    "parenStart": 103
                  }
                }
              }
            ],
            "directives": []
          }
        }
      }
    ],
    "directives": []
  },
  "comments": []
}




// const ast = parser.parse(code, {
//   sourceType: "module",
//     // parse in strict mode and allow module declarations
//     plugins: [
//       // enable jsx and flow syntax
//       "jsx",
//       "flow",
//     ],
// });

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
      } else if (t.isArrayPattern(id)) {// 如果是解构形式的数组定义  react中 useState中的定义
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
        // if(init.type === 'ArrowFunctionExpression') {
        //   const { params = [] } = init;
        //   let paramsList = [...params]
        //   for(let i =  params.length - 1; i >= 0; i--) {
        //     let paramsId= params[i];

        //     // 获取path下的箭头函数的scope

        //     const paramsBinding = declarations.scope.getBinding(paramsId.name);
        //     if(!paramsBinding.referenced) {
        //       paramsList.pop()
        //     } else {
        //       break
        //     }
        //     init.params = paramsList
        //   }
        // }

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
    }
  },

  ArrowFunctionExpression(path) {
    const { node } = path;
    const { params = [] } = node;
    let paramsList = [...params];
    // fs.writeFile('functionObjProps.json', JSON.stringify(node), () => { })

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
        if (!propertiesList.length) {// 如果对象中参数都没有引用 去除当前的
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
    node.params = paramsList;

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
      if (local.name === "React") return true;
      const binding = path.scope.getBinding(local.name);
      return !!binding.referenced;
    });
    if (node.specifiers.length === 0) {
      path.remove();
    }
  },
  FunctionDeclaration(path) {
    const { node } = path;
    const { id, params = [] } = node;
    let paramsList = [...params];
    for (let i = params.length - 1; i >= 0; i--) {
      let paramsId = params[i];

      const paramsBinding = path.scope.getBinding(paramsId.name);
      if (!paramsBinding.referenced) {
        paramsList.pop();
      } else {
        break;
      }
      node.params = paramsList;
    }
    // fs.writeFile('functionProps.json', JSON.stringify(node), () => {})

    const binding = path.scope.getBinding(id.name);
    // if(!binding) return undefined
    if (!binding.referenced) {
      path.remove();
    }
  } });


// activeTextEditor.edit((editBuilder) => {
//   editBuilder.replace(
//     new vscode.Range(
//       new vscode.Position(0, 0),
//       new vscode.Position(activeTextEditor.document.lineCount + 1, 0)
//     ),
//     );
//   });

//  1.普通变量 
//  2.import 
//  3.函数  
//     3.1函数本身引用
//    3.2参数 
//      3.2.1 普通的参数(params1, params2) --- 【遍历部分】从最后一个参数起， 没有被引用的去除， 当前有引用的直接跳出循环， 之前的不再判断
//      3.2.2 解构参数({params1, params2}) --- 全部遍历， 没有的去除
//  4.箭头函数 
//    4.1 箭头函数一般都是以普通变量定义的， 所以本身不需要去除【已经在普通变量中做过了处理】这里只需要处理参数
//    4.2 参数【通普通函数的参数处理】

fs.writeFile('./test_res.js', generate(ast, { retainLines: true, retainFunctionParens: true }).code, () => {
  console.log('success');
});