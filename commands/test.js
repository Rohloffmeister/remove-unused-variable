// const vscode = require("vscode");
const t = require("@babel/types");
const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
// const { isValidDocumentLanguage } = require("../utils.js");

const ast = {
  "type": "File",
  "start": 0,
  "end": 139,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 9,
      "column": 0
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 139,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 9,
        "column": 0
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "ImportDeclaration",
        "start": 0,
        "end": 25,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 25
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
        "start": 27,
        "end": 138,
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 1
          }
        },
        "declaration": {
          "type": "FunctionDeclaration",
          "start": 42,
          "end": 138,
          "loc": {
            "start": {
              "line": 3,
              "column": 15
            },
            "end": {
              "line": 8,
              "column": 1
            }
          },
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
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
              "start": 56,
              "end": 61,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 29
                },
                "end": {
                  "line": 3,
                  "column": 34
                },
                "identifierName": "props"
              },
              "name": "props"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 63,
            "end": 138,
            "loc": {
              "start": {
                "line": 3,
                "column": 36
              },
              "end": {
                "line": 8,
                "column": 1
              }
            },
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 67,
                "end": 93,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 2
                  },
                  "end": {
                    "line": 4,
                    "column": 28
                  }
                },
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 73,
                    "end": 93,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 8
                      },
                      "end": {
                        "line": 4,
                        "column": 28
                      }
                    },
                    "id": {
                      "type": "ObjectPattern",
                      "start": 73,
                      "end": 85,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 8
                        },
                        "end": {
                          "line": 4,
                          "column": 20
                        }
                      },
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "start": 74,
                          "end": 78,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 9
                            },
                            "end": {
                              "line": 4,
                              "column": 13
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 78,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 9
                              },
                              "end": {
                                "line": 4,
                                "column": 13
                              },
                              "identifierName": "addd"
                            },
                            "name": "addd"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 78,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 9
                              },
                              "end": {
                                "line": 4,
                                "column": 13
                              },
                              "identifierName": "addd"
                            },
                            "name": "addd"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 80,
                          "end": 83,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 15
                            },
                            "end": {
                              "line": 4,
                              "column": 18
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 80,
                            "end": 83,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 15
                              },
                              "end": {
                                "line": 4,
                                "column": 18
                              },
                              "identifierName": "ccc"
                            },
                            "name": "ccc"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 80,
                            "end": 83,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 15
                              },
                              "end": {
                                "line": 4,
                                "column": 18
                              },
                              "identifierName": "ccc"
                            },
                            "name": "ccc"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 93,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 23
                        },
                        "end": {
                          "line": 4,
                          "column": 28
                        },
                        "identifierName": "props"
                      },
                      "name": "props"
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "ReturnStatement",
                "start": 96,
                "end": 136,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 2
                  },
                  "end": {
                    "line": 7,
                    "column": 3
                  }
                },
                "argument": {
                  "type": "JSXElement",
                  "start": 109,
                  "end": 132,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 4
                    },
                    "end": {
                      "line": 6,
                      "column": 27
                    }
                  },
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 109,
                    "end": 114,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 4
                      },
                      "end": {
                        "line": 6,
                        "column": 9
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 110,
                      "end": 113,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 5
                        },
                        "end": {
                          "line": 6,
                          "column": 8
                        }
                      },
                      "name": "div"
                    },
                    "attributes": [],
                    "selfClosing": false
                  },
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 126,
                    "end": 132,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 21
                      },
                      "end": {
                        "line": 6,
                        "column": 27
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 128,
                      "end": 131,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 23
                        },
                        "end": {
                          "line": 6,
                          "column": 26
                        }
                      },
                      "name": "div"
                    }
                  },
                  "children": [
                    {
                      "type": "JSXExpressionContainer",
                      "start": 114,
                      "end": 120,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 9
                        },
                        "end": {
                          "line": 6,
                          "column": 15
                        }
                      },
                      "expression": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 119,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 10
                          },
                          "end": {
                            "line": 6,
                            "column": 14
                          },
                          "identifierName": "addd"
                        },
                        "name": "addd"
                      }
                    },
                    {
                      "type": "JSXText",
                      "start": 120,
                      "end": 121,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 15
                        },
                        "end": {
                          "line": 6,
                          "column": 16
                        }
                      },
                      "extra": {
                        "rawValue": " ",
                        "raw": " "
                      },
                      "value": " "
                    },
                    {
                      "type": "JSXExpressionContainer",
                      "start": 121,
                      "end": 126,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 16
                        },
                        "end": {
                          "line": 6,
                          "column": 21
                        }
                      },
                      "expression": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 125,
                        "loc": {
                          "start": {
                            "line": 6,
                            "column": 17
                          },
                          "end": {
                            "line": 6,
                            "column": 20
                          },
                          "identifierName": "ccc"
                        },
                        "name": "ccc"
                      }
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
  "comments": [],
  "tokens": [
    {
      "type": {
        "label": "import",
        "keyword": "import",
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
      "value": "import",
      "start": 0,
      "end": 6,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
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
      "value": "React",
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
      "value": "from",
      "start": 13,
      "end": 17,
      "loc": {
        "start": {
          "line": 1,
          "column": 13
        },
        "end": {
          "line": 1,
          "column": 17
        }
      }
    },
    {
      "type": {
        "label": "string",
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
      "value": "react",
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
      }
    },
    {
      "type": {
        "label": "export",
        "keyword": "export",
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
      "value": "export",
      "start": 27,
      "end": 33,
      "loc": {
        "start": {
          "line": 3,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 6
        }
      }
    },
    {
      "type": {
        "label": "default",
        "keyword": "default",
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
      "value": "default",
      "start": 34,
      "end": 41,
      "loc": {
        "start": {
          "line": 3,
          "column": 7
        },
        "end": {
          "line": 3,
          "column": 14
        }
      }
    },
    {
      "type": {
        "label": "function",
        "keyword": "function",
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
      "value": "function",
      "start": 42,
      "end": 50,
      "loc": {
        "start": {
          "line": 3,
          "column": 15
        },
        "end": {
          "line": 3,
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
      "value": "test",
      "start": 51,
      "end": 55,
      "loc": {
        "start": {
          "line": 3,
          "column": 24
        },
        "end": {
          "line": 3,
          "column": 28
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
      "start": 55,
      "end": 56,
      "loc": {
        "start": {
          "line": 3,
          "column": 28
        },
        "end": {
          "line": 3,
          "column": 29
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
      "value": "props",
      "start": 56,
      "end": 61,
      "loc": {
        "start": {
          "line": 3,
          "column": 29
        },
        "end": {
          "line": 3,
          "column": 34
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
      "start": 61,
      "end": 62,
      "loc": {
        "start": {
          "line": 3,
          "column": 34
        },
        "end": {
          "line": 3,
          "column": 35
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
      "start": 63,
      "end": 64,
      "loc": {
        "start": {
          "line": 3,
          "column": 36
        },
        "end": {
          "line": 3,
          "column": 37
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
      "start": 67,
      "end": 72,
      "loc": {
        "start": {
          "line": 4,
          "column": 2
        },
        "end": {
          "line": 4,
          "column": 7
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
      "start": 73,
      "end": 74,
      "loc": {
        "start": {
          "line": 4,
          "column": 8
        },
        "end": {
          "line": 4,
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
      "value": "addd",
      "start": 74,
      "end": 78,
      "loc": {
        "start": {
          "line": 4,
          "column": 9
        },
        "end": {
          "line": 4,
          "column": 13
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
      "start": 78,
      "end": 79,
      "loc": {
        "start": {
          "line": 4,
          "column": 13
        },
        "end": {
          "line": 4,
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
      "value": "ccc",
      "start": 80,
      "end": 83,
      "loc": {
        "start": {
          "line": 4,
          "column": 15
        },
        "end": {
          "line": 4,
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
      "start": 84,
      "end": 85,
      "loc": {
        "start": {
          "line": 4,
          "column": 19
        },
        "end": {
          "line": 4,
          "column": 20
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
      "start": 86,
      "end": 87,
      "loc": {
        "start": {
          "line": 4,
          "column": 21
        },
        "end": {
          "line": 4,
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
      "value": "props",
      "start": 88,
      "end": 93,
      "loc": {
        "start": {
          "line": 4,
          "column": 23
        },
        "end": {
          "line": 4,
          "column": 28
        }
      }
    },
    {
      "type": {
        "label": "return",
        "keyword": "return",
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
      "value": "return",
      "start": 96,
      "end": 102,
      "loc": {
        "start": {
          "line": 5,
          "column": 2
        },
        "end": {
          "line": 5,
          "column": 8
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
      "start": 103,
      "end": 104,
      "loc": {
        "start": {
          "line": 5,
          "column": 9
        },
        "end": {
          "line": 5,
          "column": 10
        }
      }
    },
    {
      "type": {
        "label": "jsxTagStart",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 109,
      "end": 110,
      "loc": {
        "start": {
          "line": 6,
          "column": 4
        },
        "end": {
          "line": 6,
          "column": 5
        }
      }
    },
    {
      "type": {
        "label": "jsxName",
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
      "value": "div",
      "start": 110,
      "end": 113,
      "loc": {
        "start": {
          "line": 6,
          "column": 5
        },
        "end": {
          "line": 6,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": "jsxTagEnd",
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
      "start": 113,
      "end": 114,
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
      "start": 114,
      "end": 115,
      "loc": {
        "start": {
          "line": 6,
          "column": 9
        },
        "end": {
          "line": 6,
          "column": 10
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
      "value": "addd",
      "start": 115,
      "end": 119,
      "loc": {
        "start": {
          "line": 6,
          "column": 10
        },
        "end": {
          "line": 6,
          "column": 14
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
      "start": 119,
      "end": 120,
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
        "label": "jsxText",
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
      "value": " ",
      "start": 120,
      "end": 121,
      "loc": {
        "start": {
          "line": 6,
          "column": 15
        },
        "end": {
          "line": 6,
          "column": 16
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
      "start": 121,
      "end": 122,
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
      "value": "ccc",
      "start": 122,
      "end": 125,
      "loc": {
        "start": {
          "line": 6,
          "column": 17
        },
        "end": {
          "line": 6,
          "column": 20
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
      "start": 125,
      "end": 126,
      "loc": {
        "start": {
          "line": 6,
          "column": 20
        },
        "end": {
          "line": 6,
          "column": 21
        }
      }
    },
    {
      "type": {
        "label": "jsxTagStart",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 126,
      "end": 127,
      "loc": {
        "start": {
          "line": 6,
          "column": 21
        },
        "end": {
          "line": 6,
          "column": 22
        }
      }
    },
    {
      "type": {
        "label": "/",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": 10,
        "updateContext": null
      },
      "value": "/",
      "start": 127,
      "end": 128,
      "loc": {
        "start": {
          "line": 6,
          "column": 22
        },
        "end": {
          "line": 6,
          "column": 23
        }
      }
    },
    {
      "type": {
        "label": "jsxName",
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
      "value": "div",
      "start": 128,
      "end": 131,
      "loc": {
        "start": {
          "line": 6,
          "column": 23
        },
        "end": {
          "line": 6,
          "column": 26
        }
      }
    },
    {
      "type": {
        "label": "jsxTagEnd",
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
      "start": 131,
      "end": 132,
      "loc": {
        "start": {
          "line": 6,
          "column": 26
        },
        "end": {
          "line": 6,
          "column": 27
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
      "start": 135,
      "end": 136,
      "loc": {
        "start": {
          "line": 7,
          "column": 2
        },
        "end": {
          "line": 7,
          "column": 3
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
      "start": 137,
      "end": 138,
      "loc": {
        "start": {
          "line": 8,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 1
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
      "start": 139,
      "end": 139,
      "loc": {
        "start": {
          "line": 9,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 0
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
