// const vscode = require("vscode");
const t = require("@babel/types");
const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
// const { isValidDocumentLanguage } = require("../utils.js");

const ast ={
  "type": "File",
  "start": 0,
  "end": 115,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 10,
      "column": 7
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 115,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 10,
        "column": 7
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 51,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 1
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6,
            "end": 51,
            "loc": {
              "start": {
                "line": 1,
                "column": 6
              },
              "end": {
                "line": 3,
                "column": 1
              }
            },
            "id": {
              "type": "Identifier",
              "start": 6,
              "end": 10,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 10
                },
                "identifierName": "test"
              },
              "name": "test"
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 13,
              "end": 51,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 13
                },
                "end": {
                  "line": 3,
                  "column": 1
                }
              },
              "id": null,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    },
                    "identifierName": "a"
                  },
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 17
                    },
                    "end": {
                      "line": 1,
                      "column": 18
                    },
                    "identifierName": "b"
                  },
                  "name": "b"
                },
                {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 21
                    },
                    "identifierName": "c"
                  },
                  "name": "c"
                },
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 23
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    },
                    "identifierName": "d"
                  },
                  "name": "d"
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 51,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 29
                  },
                  "end": {
                    "line": 3,
                    "column": 1
                  }
                },
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 32,
                    "end": 49,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 1
                      },
                      "end": {
                        "line": 2,
                        "column": 18
                      }
                    },
                    "expression": {
                      "type": "CallExpression",
                      "start": 32,
                      "end": 49,
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 1
                        },
                        "end": {
                          "line": 2,
                          "column": 18
                        }
                      },
                      "callee": {
                        "type": "MemberExpression",
                        "start": 32,
                        "end": 43,
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 1
                          },
                          "end": {
                            "line": 2,
                            "column": 12
                          }
                        },
                        "object": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 39,
                          "loc": {
                            "start": {
                              "line": 2,
                              "column": 1
                            },
                            "end": {
                              "line": 2,
                              "column": 8
                            },
                            "identifierName": "console"
                          },
                          "name": "console"
                        },
                        "computed": false,
                        "property": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 43,
                          "loc": {
                            "start": {
                              "line": 2,
                              "column": 9
                            },
                            "end": {
                              "line": 2,
                              "column": 12
                            },
                            "identifierName": "log"
                          },
                          "name": "log"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 44,
                          "end": 45,
                          "loc": {
                            "start": {
                              "line": 2,
                              "column": 13
                            },
                            "end": {
                              "line": 2,
                              "column": 14
                            },
                            "identifierName": "a"
                          },
                          "name": "a"
                        },
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "loc": {
                            "start": {
                              "line": 2,
                              "column": 16
                            },
                            "end": {
                              "line": 2,
                              "column": 17
                            },
                            "identifierName": "c"
                          },
                          "name": "c"
                        }
                      ]
                    }
                  }
                ],
                "directives": []
              }
            }
          }
        ],
        "kind": "const"
      },
      {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 105,
        "loc": {
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 1
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 59,
            "end": 105,
            "loc": {
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 7,
                "column": 1
              }
            },
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 6
                },
                "end": {
                  "line": 5,
                  "column": 11
                },
                "identifierName": "test1"
              },
              "name": "test1"
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 67,
              "end": 105,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 14
                },
                "end": {
                  "line": 7,
                  "column": 1
                }
              },
              "id": null,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 15
                    },
                    "end": {
                      "line": 5,
                      "column": 16
                    },
                    "identifierName": "a"
                  },
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 18
                    },
                    "end": {
                      "line": 5,
                      "column": 19
                    },
                    "identifierName": "b"
                  },
                  "name": "b"
                },
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 21
                    },
                    "end": {
                      "line": 5,
                      "column": 22
                    },
                    "identifierName": "c"
                  },
                  "name": "c"
                },
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 24
                    },
                    "end": {
                      "line": 5,
                      "column": 25
                    },
                    "identifierName": "d"
                  },
                  "name": "d"
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 105,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 30
                  },
                  "end": {
                    "line": 7,
                    "column": 1
                  }
                },
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 103,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 1
                      },
                      "end": {
                        "line": 6,
                        "column": 18
                      }
                    },
                    "expression": {
                      "type": "CallExpression",
                      "start": 86,
                      "end": 103,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 1
                        },
                        "end": {
                          "line": 6,
                          "column": 18
                        }
                      },
                      "callee": {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 97,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 1
                          },
                          "end": {
                            "line": 6,
                            "column": 12
                          }
                        },
                        "object": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 93,
                          "loc": {
                            "start": {
                              "line": 6,
                              "column": 1
                            },
                            "end": {
                              "line": 6,
                              "column": 8
                            },
                            "identifierName": "console"
                          },
                          "name": "console"
                        },
                        "computed": false,
                        "property": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 97,
                          "loc": {
                            "start": {
                              "line": 6,
                              "column": 9
                            },
                            "end": {
                              "line": 6,
                              "column": 12
                            },
                            "identifierName": "log"
                          },
                          "name": "log"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "loc": {
                            "start": {
                              "line": 6,
                              "column": 13
                            },
                            "end": {
                              "line": 6,
                              "column": 14
                            },
                            "identifierName": "a"
                          },
                          "name": "a"
                        },
                        {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "loc": {
                            "start": {
                              "line": 6,
                              "column": 16
                            },
                            "end": {
                              "line": 6,
                              "column": 17
                            },
                            "identifierName": "c"
                          },
                          "name": "c"
                        }
                      ]
                    }
                  }
                ],
                "directives": []
              }
            }
          }
        ],
        "kind": "const"
      },
      {
        "type": "ExpressionStatement",
        "start": 108,
        "end": 115,
        "loc": {
          "start": {
            "line": 10,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "expression": {
          "type": "CallExpression",
          "start": 108,
          "end": 115,
          "loc": {
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 7
            }
          },
          "callee": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "loc": {
              "start": {
                "line": 10,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 4
              },
              "identifierName": "test"
            },
            "name": "test"
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 5
                },
                "end": {
                  "line": 10,
                  "column": 6
                },
                "identifierName": "a"
              },
              "name": "a"
            }
          ]
        }
      }
    ],
    "directives": []
  },
  "comments": [],
  "tokens": [
    {
      "type": {
        "label": "const",
        "keyword": "const",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "const",
      "start": 0,
      "end": 5,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "test",
      "start": 6,
      "end": 10,
      "loc": {
        "start": {
          "line": 1,
          "column": 6
        },
        "end": {
          "line": 1,
          "column": 10
        }
      }
    },
    {
      "type": {
        "label": "=",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": true,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "=",
      "start": 11,
      "end": 12,
      "loc": {
        "start": {
          "line": 1,
          "column": 11
        },
        "end": {
          "line": 1,
          "column": 12
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 13,
      "end": 14,
      "loc": {
        "start": {
          "line": 1,
          "column": 13
        },
        "end": {
          "line": 1,
          "column": 14
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "a",
      "start": 14,
      "end": 15,
      "loc": {
        "start": {
          "line": 1,
          "column": 14
        },
        "end": {
          "line": 1,
          "column": 15
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 15,
      "end": 16,
      "loc": {
        "start": {
          "line": 1,
          "column": 15
        },
        "end": {
          "line": 1,
          "column": 16
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "b",
      "start": 17,
      "end": 18,
      "loc": {
        "start": {
          "line": 1,
          "column": 17
        },
        "end": {
          "line": 1,
          "column": 18
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 18,
      "end": 19,
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 19
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "c",
      "start": 20,
      "end": 21,
      "loc": {
        "start": {
          "line": 1,
          "column": 20
        },
        "end": {
          "line": 1,
          "column": 21
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 21,
      "end": 22,
      "loc": {
        "start": {
          "line": 1,
          "column": 21
        },
        "end": {
          "line": 1,
          "column": 22
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "d",
      "start": 23,
      "end": 24,
      "loc": {
        "start": {
          "line": 1,
          "column": 23
        },
        "end": {
          "line": 1,
          "column": 24
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 24,
      "end": 25,
      "loc": {
        "start": {
          "line": 1,
          "column": 24
        },
        "end": {
          "line": 1,
          "column": 25
        }
      }
    },
    {
      "type": {
        "label": "=>",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 26,
      "end": 28,
      "loc": {
        "start": {
          "line": 1,
          "column": 26
        },
        "end": {
          "line": 1,
          "column": 28
        }
      }
    },
    {
      "type": {
        "label": "{",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 29,
      "end": 30,
      "loc": {
        "start": {
          "line": 1,
          "column": 29
        },
        "end": {
          "line": 1,
          "column": 30
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "console",
      "start": 32,
      "end": 39,
      "loc": {
        "start": {
          "line": 2,
          "column": 1
        },
        "end": {
          "line": 2,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": ".",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 39,
      "end": 40,
      "loc": {
        "start": {
          "line": 2,
          "column": 8
        },
        "end": {
          "line": 2,
          "column": 9
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "log",
      "start": 40,
      "end": 43,
      "loc": {
        "start": {
          "line": 2,
          "column": 9
        },
        "end": {
          "line": 2,
          "column": 12
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 43,
      "end": 44,
      "loc": {
        "start": {
          "line": 2,
          "column": 12
        },
        "end": {
          "line": 2,
          "column": 13
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "a",
      "start": 44,
      "end": 45,
      "loc": {
        "start": {
          "line": 2,
          "column": 13
        },
        "end": {
          "line": 2,
          "column": 14
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 45,
      "end": 46,
      "loc": {
        "start": {
          "line": 2,
          "column": 14
        },
        "end": {
          "line": 2,
          "column": 15
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "c",
      "start": 47,
      "end": 48,
      "loc": {
        "start": {
          "line": 2,
          "column": 16
        },
        "end": {
          "line": 2,
          "column": 17
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 48,
      "end": 49,
      "loc": {
        "start": {
          "line": 2,
          "column": 17
        },
        "end": {
          "line": 2,
          "column": 18
        }
      }
    },
    {
      "type": {
        "label": "}",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 50,
      "end": 51,
      "loc": {
        "start": {
          "line": 3,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 1
        }
      }
    },
    {
      "type": {
        "label": "const",
        "keyword": "const",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "const",
      "start": 53,
      "end": 58,
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 5
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "test1",
      "start": 59,
      "end": 64,
      "loc": {
        "start": {
          "line": 5,
          "column": 6
        },
        "end": {
          "line": 5,
          "column": 11
        }
      }
    },
    {
      "type": {
        "label": "=",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": true,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "=",
      "start": 65,
      "end": 66,
      "loc": {
        "start": {
          "line": 5,
          "column": 12
        },
        "end": {
          "line": 5,
          "column": 13
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 67,
      "end": 68,
      "loc": {
        "start": {
          "line": 5,
          "column": 14
        },
        "end": {
          "line": 5,
          "column": 15
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "a",
      "start": 68,
      "end": 69,
      "loc": {
        "start": {
          "line": 5,
          "column": 15
        },
        "end": {
          "line": 5,
          "column": 16
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 69,
      "end": 70,
      "loc": {
        "start": {
          "line": 5,
          "column": 16
        },
        "end": {
          "line": 5,
          "column": 17
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "b",
      "start": 71,
      "end": 72,
      "loc": {
        "start": {
          "line": 5,
          "column": 18
        },
        "end": {
          "line": 5,
          "column": 19
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 72,
      "end": 73,
      "loc": {
        "start": {
          "line": 5,
          "column": 19
        },
        "end": {
          "line": 5,
          "column": 20
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "c",
      "start": 74,
      "end": 75,
      "loc": {
        "start": {
          "line": 5,
          "column": 21
        },
        "end": {
          "line": 5,
          "column": 22
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 75,
      "end": 76,
      "loc": {
        "start": {
          "line": 5,
          "column": 22
        },
        "end": {
          "line": 5,
          "column": 23
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "d",
      "start": 77,
      "end": 78,
      "loc": {
        "start": {
          "line": 5,
          "column": 24
        },
        "end": {
          "line": 5,
          "column": 25
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 78,
      "end": 79,
      "loc": {
        "start": {
          "line": 5,
          "column": 25
        },
        "end": {
          "line": 5,
          "column": 26
        }
      }
    },
    {
      "type": {
        "label": "=>",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 80,
      "end": 82,
      "loc": {
        "start": {
          "line": 5,
          "column": 27
        },
        "end": {
          "line": 5,
          "column": 29
        }
      }
    },
    {
      "type": {
        "label": "{",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 83,
      "end": 84,
      "loc": {
        "start": {
          "line": 5,
          "column": 30
        },
        "end": {
          "line": 5,
          "column": 31
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "console",
      "start": 86,
      "end": 93,
      "loc": {
        "start": {
          "line": 6,
          "column": 1
        },
        "end": {
          "line": 6,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": ".",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 93,
      "end": 94,
      "loc": {
        "start": {
          "line": 6,
          "column": 8
        },
        "end": {
          "line": 6,
          "column": 9
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "log",
      "start": 94,
      "end": 97,
      "loc": {
        "start": {
          "line": 6,
          "column": 9
        },
        "end": {
          "line": 6,
          "column": 12
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 97,
      "end": 98,
      "loc": {
        "start": {
          "line": 6,
          "column": 12
        },
        "end": {
          "line": 6,
          "column": 13
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "a",
      "start": 98,
      "end": 99,
      "loc": {
        "start": {
          "line": 6,
          "column": 13
        },
        "end": {
          "line": 6,
          "column": 14
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 99,
      "end": 100,
      "loc": {
        "start": {
          "line": 6,
          "column": 14
        },
        "end": {
          "line": 6,
          "column": 15
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "c",
      "start": 101,
      "end": 102,
      "loc": {
        "start": {
          "line": 6,
          "column": 16
        },
        "end": {
          "line": 6,
          "column": 17
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 102,
      "end": 103,
      "loc": {
        "start": {
          "line": 6,
          "column": 17
        },
        "end": {
          "line": 6,
          "column": 18
        }
      }
    },
    {
      "type": {
        "label": "}",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 104,
      "end": 105,
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 1
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "test",
      "start": 108,
      "end": 112,
      "loc": {
        "start": {
          "line": 10,
          "column": 0
        },
        "end": {
          "line": 10,
          "column": 4
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 112,
      "end": 113,
      "loc": {
        "start": {
          "line": 10,
          "column": 4
        },
        "end": {
          "line": 10,
          "column": 5
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "a",
      "start": 113,
      "end": 114,
      "loc": {
        "start": {
          "line": 10,
          "column": 5
        },
        "end": {
          "line": 10,
          "column": 6
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 114,
      "end": 115,
      "loc": {
        "start": {
          "line": 10,
          "column": 6
        },
        "end": {
          "line": 10,
          "column": 7
        }
      }
    },
    {
      "type": {
        "label": "eof",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 115,
      "end": 115,
      "loc": {
        "start": {
          "line": 10,
          "column": 7
        },
        "end": {
          "line": 10,
          "column": 7
        }
      }
    }
  ]
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
      const { id, init } = declaration;

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

  ArrowFunctionExpression(path) {
    const { node } = path;
    const { params = [] } = node;
    let paramsList = [...params]
    for(let i =  params.length - 1; i >= 0; i--) {
      let paramsId= params[i];

      const paramsBinding = path.scope.getBinding(paramsId.name);
      if(!paramsBinding.referenced) {
        paramsList.pop()
      } else {
        break
      }
      node.params = paramsList
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
    const { id, params = [] } = node;
    let paramsList = [...params]
    for(let i =  params.length - 1; i >= 0; i--) {
      let paramsId= params[i];

      const paramsBinding = path.scope.getBinding(paramsId.name);
      if(!paramsBinding.referenced) {
        paramsList.pop()
      } else {
        break
      }
      node.params = paramsList
    }
    // fs.writeFile('functionProps.json', JSON.stringify(node), () => {})
    
    const binding = path.scope.getBinding(id.name);
    // if(!binding) return undefined
    if (!binding.referenced) {
      path.remove();
    }
  },
});

// activeTextEditor.edit((editBuilder) => {
//   editBuilder.replace(
//     new vscode.Range(
//       new vscode.Position(0, 0),
//       new vscode.Position(activeTextEditor.document.lineCount + 1, 0)
//     ),
//     );
//   });

fs.writeFile('./test_res.js', generate(ast, {retainLines: true, retainFunctionParens: true}).code, () => {
  console.log('success')
})
