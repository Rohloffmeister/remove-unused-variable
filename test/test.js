// const vscode = require("vscode");
const t = require("@babel/types");
const fs = require('fs');

const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
// const { isValidDocumentLanguage } = require("../utils.js");
const ast = {
  "type": "File",
  "start": 0,
  "end": 292,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 13,
      "column": 1
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 292,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 13,
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
        "end": 292,
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 1
          }
        },
        "declaration": {
          "type": "FunctionDeclaration",
          "start": 43,
          "end": 292,
          "loc": {
            "start": {
              "line": 3,
              "column": 15
            },
            "end": {
              "line": 13,
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
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 59,
            "end": 292,
            "loc": {
              "start": {
                "line": 3,
                "column": 31
              },
              "end": {
                "line": 13,
                "column": 1
              }
            },
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 65,
                "end": 151,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 4
                  },
                  "end": {
                    "line": 4,
                    "column": 90
                  }
                },
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 71,
                    "end": 150,
                    "loc": {
                      "start": {
                        "line": 4,
                        "column": 10
                      },
                      "end": {
                        "line": 4,
                        "column": 89
                      }
                    },
                    "id": {
                      "type": "ObjectPattern",
                      "start": 71,
                      "end": 142,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 10
                        },
                        "end": {
                          "line": 4,
                          "column": 81
                        }
                      },
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "start": 73,
                          "end": 85,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 12
                            },
                            "end": {
                              "line": 4,
                              "column": 24
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 85,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 12
                              },
                              "end": {
                                "line": 4,
                                "column": 24
                              },
                              "identifierName": "searchParams"
                            },
                            "name": "searchParams"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 85,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 12
                              },
                              "end": {
                                "line": 4,
                                "column": 24
                              },
                              "identifierName": "searchParams"
                            },
                            "name": "searchParams"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 87,
                          "end": 96,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 26
                            },
                            "end": {
                              "line": 4,
                              "column": 35
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 96,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 26
                              },
                              "end": {
                                "line": 4,
                                "column": 35
                              },
                              "identifierName": "setParams"
                            },
                            "name": "setParams"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 96,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 26
                              },
                              "end": {
                                "line": 4,
                                "column": 35
                              },
                              "identifierName": "setParams"
                            },
                            "name": "setParams"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 98,
                          "end": 102,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 37
                            },
                            "end": {
                              "line": 4,
                              "column": 41
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 102,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 37
                              },
                              "end": {
                                "line": 4,
                                "column": 41
                              },
                              "identifierName": "area"
                            },
                            "name": "area"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 102,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 37
                              },
                              "end": {
                                "line": 4,
                                "column": 41
                              },
                              "identifierName": "area"
                            },
                            "name": "area"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 104,
                          "end": 111,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 43
                            },
                            "end": {
                              "line": 4,
                              "column": 50
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 111,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 43
                              },
                              "end": {
                                "line": 4,
                                "column": 50
                              },
                              "identifierName": "areaArr"
                            },
                            "name": "areaArr"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 111,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 43
                              },
                              "end": {
                                "line": 4,
                                "column": 50
                              },
                              "identifierName": "areaArr"
                            },
                            "name": "areaArr"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 113,
                          "end": 117,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 52
                            },
                            "end": {
                              "line": 4,
                              "column": 56
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 117,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 52
                              },
                              "end": {
                                "line": 4,
                                "column": 56
                              },
                              "identifierName": "type"
                            },
                            "name": "type"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 117,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 52
                              },
                              "end": {
                                "line": 4,
                                "column": 56
                              },
                              "identifierName": "type"
                            },
                            "name": "type"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "start": 119,
                          "end": 140,
                          "loc": {
                            "start": {
                              "line": 4,
                              "column": 58
                            },
                            "end": {
                              "line": 4,
                              "column": 79
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 124,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 58
                              },
                              "end": {
                                "line": 4,
                                "column": 63
                              },
                              "identifierName": "chain"
                            },
                            "name": "chain"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 119,
                            "end": 140,
                            "loc": {
                              "start": {
                                "line": 4,
                                "column": 58
                              },
                              "end": {
                                "line": 4,
                                "column": 79
                              }
                            },
                            "left": {
                              "type": "Identifier",
                              "start": 119,
                              "end": 124,
                              "loc": {
                                "start": {
                                  "line": 4,
                                  "column": 58
                                },
                                "end": {
                                  "line": 4,
                                  "column": 63
                                },
                                "identifierName": "chain"
                              },
                              "name": "chain"
                            },
                            "right": {
                              "type": "StringLiteral",
                              "start": 127,
                              "end": 140,
                              "loc": {
                                "start": {
                                  "line": 4,
                                  "column": 66
                                },
                                "end": {
                                  "line": 4,
                                  "column": 79
                                }
                              },
                              "extra": {
                                "rawValue": "elecVehicle",
                                "raw": "'elecVehicle'"
                              },
                              "value": "elecVehicle"
                            }
                          },
                          "extra": {
                            "shorthand": true
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 150,
                      "loc": {
                        "start": {
                          "line": 4,
                          "column": 84
                        },
                        "end": {
                          "line": 4,
                          "column": 89
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
                "type": "VariableDeclaration",
                "start": 154,
                "end": 191,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 2
                  },
                  "end": {
                    "line": 5,
                    "column": 39
                  }
                },
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 160,
                    "end": 191,
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 8
                      },
                      "end": {
                        "line": 5,
                        "column": 39
                      }
                    },
                    "id": {
                      "type": "ObjectPattern",
                      "start": 160,
                      "end": 174,
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 8
                        },
                        "end": {
                          "line": 5,
                          "column": 22
                        }
                      },
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "start": 162,
                          "end": 173,
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 10
                            },
                            "end": {
                              "line": 5,
                              "column": 21
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 166,
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 10
                              },
                              "end": {
                                "line": 5,
                                "column": 14
                              },
                              "identifierName": "data"
                            },
                            "name": "data"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 173,
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 16
                              },
                              "end": {
                                "line": 5,
                                "column": 21
                              },
                              "identifierName": "dataO"
                            },
                            "name": "dataO"
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 177,
                      "end": 191,
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 25
                        },
                        "end": {
                          "line": 5,
                          "column": 39
                        }
                      },
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "start": 178,
                          "end": 190,
                          "loc": {
                            "start": {
                              "line": 5,
                              "column": 26
                            },
                            "end": {
                              "line": 5,
                              "column": 38
                            }
                          },
                          "method": false,
                          "key": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 182,
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 26
                              },
                              "end": {
                                "line": 5,
                                "column": 30
                              },
                              "identifierName": "data"
                            },
                            "name": "data"
                          },
                          "computed": false,
                          "shorthand": false,
                          "value": {
                            "type": "NumericLiteral",
                            "start": 184,
                            "end": 190,
                            "loc": {
                              "start": {
                                "line": 5,
                                "column": 32
                              },
                              "end": {
                                "line": 5,
                                "column": 38
                              }
                            },
                            "extra": {
                              "rawValue": 213123,
                              "raw": "213123"
                            },
                            "value": 213123
                          }
                        }
                      ]
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "VariableDeclaration",
                "start": 194,
                "end": 212,
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 2
                  },
                  "end": {
                    "line": 6,
                    "column": 20
                  }
                },
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 200,
                    "end": 212,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 8
                      },
                      "end": {
                        "line": 6,
                        "column": 20
                      }
                    },
                    "id": {
                      "type": "ObjectPattern",
                      "start": 200,
                      "end": 207,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 8
                        },
                        "end": {
                          "line": 6,
                          "column": 15
                        }
                      },
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "start": 201,
                          "end": 206,
                          "loc": {
                            "start": {
                              "line": 6,
                              "column": 9
                            },
                            "end": {
                              "line": 6,
                              "column": 14
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 206,
                            "loc": {
                              "start": {
                                "line": 6,
                                "column": 9
                              },
                              "end": {
                                "line": 6,
                                "column": 14
                              },
                              "identifierName": "data1"
                            },
                            "name": "data1"
                          },
                          "computed": false,
                          "method": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 206,
                            "loc": {
                              "start": {
                                "line": 6,
                                "column": 9
                              },
                              "end": {
                                "line": 6,
                                "column": 14
                              },
                              "identifierName": "data1"
                            },
                            "name": "data1"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 210,
                      "end": 212,
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 18
                        },
                        "end": {
                          "line": 6,
                          "column": 20
                        }
                      },
                      "properties": []
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "FunctionDeclaration",
                "start": 215,
                "end": 234,
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 2
                  },
                  "end": {
                    "line": 9,
                    "column": 3
                  }
                },
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 11
                    },
                    "end": {
                      "line": 7,
                      "column": 12
                    },
                    "identifierName": "t"
                  },
                  "name": "t"
                },
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 228,
                  "end": 234,
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 15
                    },
                    "end": {
                      "line": 9,
                      "column": 3
                    }
                  },
                  "body": [],
                  "directives": []
                }
              },
              {
                "type": "ReturnStatement",
                "start": 237,
                "end": 289,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 2
                  },
                  "end": {
                    "line": 11,
                    "column": 43
                  }
                },
                "argument": {
                  "type": "JSXElement",
                  "start": 250,
                  "end": 287,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 4
                    },
                    "end": {
                      "line": 11,
                      "column": 41
                    }
                  },
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 250,
                    "end": 267,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 4
                      },
                      "end": {
                        "line": 11,
                        "column": 21
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 251,
                      "end": 254,
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 5
                        },
                        "end": {
                          "line": 11,
                          "column": 8
                        }
                      },
                      "name": "div"
                    },
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 255,
                        "end": 266,
                        "loc": {
                          "start": {
                            "line": 11,
                            "column": 9
                          },
                          "end": {
                            "line": 11,
                            "column": 20
                          }
                        },
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 255,
                          "end": 262,
                          "loc": {
                            "start": {
                              "line": 11,
                              "column": 9
                            },
                            "end": {
                              "line": 11,
                              "column": 16
                            }
                          },
                          "name": "onClick"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 263,
                          "end": 266,
                          "loc": {
                            "start": {
                              "line": 11,
                              "column": 17
                            },
                            "end": {
                              "line": 11,
                              "column": 20
                            }
                          },
                          "expression": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 265,
                            "loc": {
                              "start": {
                                "line": 11,
                                "column": 18
                              },
                              "end": {
                                "line": 11,
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
                    "start": 281,
                    "end": 287,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 35
                      },
                      "end": {
                        "line": 11,
                        "column": 41
                      }
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 283,
                      "end": 286,
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 37
                        },
                        "end": {
                          "line": 11,
                          "column": 40
                        }
                      },
                      "name": "div"
                    }
                  },
                  "children": [
                    {
                      "type": "JSXExpressionContainer",
                      "start": 267,
                      "end": 274,
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 21
                        },
                        "end": {
                          "line": 11,
                          "column": 28
                        }
                      },
                      "expression": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 273,
                        "loc": {
                          "start": {
                            "line": 11,
                            "column": 22
                          },
                          "end": {
                            "line": 11,
                            "column": 27
                          },
                          "identifierName": "dataO"
                        },
                        "name": "dataO"
                      }
                    },
                    {
                      "type": "JSXExpressionContainer",
                      "start": 274,
                      "end": 281,
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 28
                        },
                        "end": {
                          "line": 11,
                          "column": 35
                        }
                      },
                      "expression": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 280,
                        "loc": {
                          "start": {
                            "line": 11,
                            "column": 29
                          },
                          "end": {
                            "line": 11,
                            "column": 34
                          },
                          "identifierName": "chain"
                        },
                        "name": "chain"
                      }
                    }
                  ],
                  "extra": {
                    "parenthesized": true,
                    "parenStart": 244
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
  // 处理函数参数
  function getParamsList(path) {
    const { node } = path;
    const { params = [] } = node;
    let paramsList = [...params]
    for (let i = params.length - 1; i >= 0; i--) {
      let paramsId = params[i];
      if (paramsId && paramsId.type === 'ObjectPattern') { // 如果参数是以对象形式的解构 {}
        if (!paramsId.properties || !paramsId.properties.length) continue;  // 如果对象中参数为空
        let propertiesList = [...paramsId.properties];

        paramsId.properties.forEach(k => {
          const paramsBinding = path.scope.getBinding(k.key.name);
          if (!paramsBinding.referenced) { // 如果没被引用
            propertiesList = propertiesList.filter(w => w.key.name !== k.key.name)
          }
        })
        if (!propertiesList.length) { // 如果对象中参数都没有引用 去除当前的解构对象
          paramsList.pop()
        }
        paramsId.properties = propertiesList

      } else {
        const paramsBinding = path.scope.getBinding(paramsId.name);
        if (!paramsBinding.referenced) {
          paramsList.pop()
        } else {
          break
        }
      }
    }
    return paramsList
  }

traverse(ast, {
  VariableDeclaration(path) { // 变量
    const { node } = path;
    const { declarations } = node;
    node.declarations = declarations.filter((declaration) => {
      const { id } = declaration;
      if (t.isObjectPattern(id)) {
        // path.scope.getBinding(name).referenced 判断变量是否被引用
        // 通过filter移除掉没有使用的变量
        id.properties = id.properties.filter((property) => {
          const binding = path.scope.getBinding(property.value.name || property.key.name);
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
      } else if (t.isArrayPattern(id)) { // 如果是解构形式的数组定义  例如 react中 useState这样的定义
        const res = []
        id.elements.forEach(v => {
          const binding = path.scope.getBinding(v.name);
          const { referenced } = binding;
          // 数组的 constantViolations 都是为[] 空
          // 这里对没有应用的进行过滤 
          if (referenced) {
            res.push(v)
          }
        })
        id.elements = res; // 重新赋值新的数组
        return res.length;
      } else {
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

  ImportDeclaration(path) {
    const { node } = path;
    const { specifiers } = node;
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
    const { id } = node; // 获取id和参数
    path.node.params = getParamsList(path) || []

    const binding = path.scope.getBinding(id.name);
    if (!binding.referenced) {
      path.remove();
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
  ArrowFunctionExpression(path) { //
    const { node } = path;
    node.params = getParamsList(path) || []
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