// const vscode = require("vscode");
const t = require("@babel/types");
const fs = require('fs');

const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
// const { isValidDocumentLanguage } = require("../utils.js");
const ast = {
  "type": "File",
  "start": 0,
  "end": 203,
  "loc": {
    "start": {
      "line": 1,
      "column": 0 },

    "end": {
      "line": 17,
      "column": 7 } },


  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 203,
    "loc": {
      "start": {
        "line": 1,
        "column": 0 },

      "end": {
        "line": 17,
        "column": 7 } },


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
          "column": 0 },

        "end": {
          "line": 3,
          "column": 1 } },


      "declarations": [
      {
        "type": "VariableDeclarator",
        "start": 6,
        "end": 51,
        "loc": {
          "start": {
            "line": 1,
            "column": 6 },

          "end": {
            "line": 3,
            "column": 1 } },


        "id": {
          "type": "Identifier",
          "start": 6,
          "end": 10,
          "loc": {
            "start": {
              "line": 1,
              "column": 6 },

            "end": {
              "line": 1,
              "column": 10 },

            "identifierName": "test" },

          "name": "test" },

        "init": {
          "type": "ArrowFunctionExpression",
          "start": 13,
          "end": 51,
          "loc": {
            "start": {
              "line": 1,
              "column": 13 },

            "end": {
              "line": 3,
              "column": 1 } },


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
                "column": 14 },

              "end": {
                "line": 1,
                "column": 15 },

              "identifierName": "a" },

            "name": "a" },

          {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "loc": {
              "start": {
                "line": 1,
                "column": 17 },

              "end": {
                "line": 1,
                "column": 18 },

              "identifierName": "b" },

            "name": "b" },

          {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "loc": {
              "start": {
                "line": 1,
                "column": 20 },

              "end": {
                "line": 1,
                "column": 21 },

              "identifierName": "c" },

            "name": "c" },

          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "loc": {
              "start": {
                "line": 1,
                "column": 23 },

              "end": {
                "line": 1,
                "column": 24 },

              "identifierName": "d" },

            "name": "d" }],


          "body": {
            "type": "BlockStatement",
            "start": 29,
            "end": 51,
            "loc": {
              "start": {
                "line": 1,
                "column": 29 },

              "end": {
                "line": 3,
                "column": 1 } },


            "body": [
            {
              "type": "ExpressionStatement",
              "start": 32,
              "end": 49,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 1 },

                "end": {
                  "line": 2,
                  "column": 18 } },


              "expression": {
                "type": "CallExpression",
                "start": 32,
                "end": 49,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 1 },

                  "end": {
                    "line": 2,
                    "column": 18 } },


                "callee": {
                  "type": "MemberExpression",
                  "start": 32,
                  "end": 43,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1 },

                    "end": {
                      "line": 2,
                      "column": 12 } },


                  "object": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 39,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 1 },

                      "end": {
                        "line": 2,
                        "column": 8 },

                      "identifierName": "console" },

                    "name": "console" },

                  "computed": false,
                  "property": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 43,
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 9 },

                      "end": {
                        "line": 2,
                        "column": 12 },

                      "identifierName": "log" },

                    "name": "log" } },


                "arguments": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 13 },

                    "end": {
                      "line": 2,
                      "column": 14 },

                    "identifierName": "a" },

                  "name": "a" },

                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 16 },

                    "end": {
                      "line": 2,
                      "column": 17 },

                    "identifierName": "c" },

                  "name": "c" }] } }],





            "directives": [] } } }],




      "kind": "const" },

    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 107,
      "loc": {
        "start": {
          "line": 5,
          "column": 0 },

        "end": {
          "line": 7,
          "column": 1 } },


      "declarations": [
      {
        "type": "VariableDeclarator",
        "start": 59,
        "end": 107,
        "loc": {
          "start": {
            "line": 5,
            "column": 6 },

          "end": {
            "line": 7,
            "column": 1 } },


        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 64,
          "loc": {
            "start": {
              "line": 5,
              "column": 6 },

            "end": {
              "line": 5,
              "column": 11 },

            "identifierName": "test1" },

          "name": "test1" },

        "init": {
          "type": "ArrowFunctionExpression",
          "start": 67,
          "end": 107,
          "loc": {
            "start": {
              "line": 5,
              "column": 14 },

            "end": {
              "line": 7,
              "column": 1 } },


          "id": null,
          "generator": false,
          "async": false,
          "params": [
          {
            "type": "ObjectPattern",
            "start": 68,
            "end": 80,
            "loc": {
              "start": {
                "line": 5,
                "column": 15 },

              "end": {
                "line": 5,
                "column": 27 } },


            "properties": [
            {
              "type": "ObjectProperty",
              "start": 69,
              "end": 70,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 16 },

                "end": {
                  "line": 5,
                  "column": 17 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 16 },

                  "end": {
                    "line": 5,
                    "column": 17 },

                  "identifierName": "a" },

                "name": "a" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 16 },

                  "end": {
                    "line": 5,
                    "column": 17 },

                  "identifierName": "a" },

                "name": "a" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 72,
              "end": 73,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 19 },

                "end": {
                  "line": 5,
                  "column": 20 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 19 },

                  "end": {
                    "line": 5,
                    "column": 20 },

                  "identifierName": "b" },

                "name": "b" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 19 },

                  "end": {
                    "line": 5,
                    "column": 20 },

                  "identifierName": "b" },

                "name": "b" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 75,
              "end": 76,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 22 },

                "end": {
                  "line": 5,
                  "column": 23 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 22 },

                  "end": {
                    "line": 5,
                    "column": 23 },

                  "identifierName": "c" },

                "name": "c" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 22 },

                  "end": {
                    "line": 5,
                    "column": 23 },

                  "identifierName": "c" },

                "name": "c" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 78,
              "end": 79,
              "loc": {
                "start": {
                  "line": 5,
                  "column": 25 },

                "end": {
                  "line": 5,
                  "column": 26 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 25 },

                  "end": {
                    "line": 5,
                    "column": 26 },

                  "identifierName": "d" },

                "name": "d" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 25 },

                  "end": {
                    "line": 5,
                    "column": 26 },

                  "identifierName": "d" },

                "name": "d" },

              "extra": {
                "shorthand": true } }] }],





          "body": {
            "type": "BlockStatement",
            "start": 85,
            "end": 107,
            "loc": {
              "start": {
                "line": 5,
                "column": 32 },

              "end": {
                "line": 7,
                "column": 1 } },


            "body": [
            {
              "type": "ExpressionStatement",
              "start": 88,
              "end": 105,
              "loc": {
                "start": {
                  "line": 6,
                  "column": 1 },

                "end": {
                  "line": 6,
                  "column": 18 } },


              "expression": {
                "type": "CallExpression",
                "start": 88,
                "end": 105,
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 1 },

                  "end": {
                    "line": 6,
                    "column": 18 } },


                "callee": {
                  "type": "MemberExpression",
                  "start": 88,
                  "end": 99,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 1 },

                    "end": {
                      "line": 6,
                      "column": 12 } },


                  "object": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 95,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 1 },

                      "end": {
                        "line": 6,
                        "column": 8 },

                      "identifierName": "console" },

                    "name": "console" },

                  "computed": false,
                  "property": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 9 },

                      "end": {
                        "line": 6,
                        "column": 12 },

                      "identifierName": "log" },

                    "name": "log" } },


                "arguments": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 13 },

                    "end": {
                      "line": 6,
                      "column": 14 },

                    "identifierName": "a" },

                  "name": "a" },

                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 16 },

                    "end": {
                      "line": 6,
                      "column": 17 },

                    "identifierName": "c" },

                  "name": "c" }] } }],





            "directives": [] } } }],




      "kind": "const" },

    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 170,
      "loc": {
        "start": {
          "line": 9,
          "column": 0 },

        "end": {
          "line": 12,
          "column": 1 } },


      "declarations": [
      {
        "type": "VariableDeclarator",
        "start": 115,
        "end": 170,
        "loc": {
          "start": {
            "line": 9,
            "column": 6 },

          "end": {
            "line": 12,
            "column": 1 } },


        "id": {
          "type": "Identifier",
          "start": 115,
          "end": 120,
          "loc": {
            "start": {
              "line": 9,
              "column": 6 },

            "end": {
              "line": 9,
              "column": 11 },

            "identifierName": "test2" },

          "name": "test2" },

        "init": {
          "type": "ArrowFunctionExpression",
          "start": 123,
          "end": 170,
          "loc": {
            "start": {
              "line": 9,
              "column": 14 },

            "end": {
              "line": 12,
              "column": 1 } },


          "id": null,
          "generator": false,
          "async": false,
          "params": [
          {
            "type": "ObjectPattern",
            "start": 124,
            "end": 136,
            "loc": {
              "start": {
                "line": 9,
                "column": 15 },

              "end": {
                "line": 9,
                "column": 27 } },


            "properties": [
            {
              "type": "ObjectProperty",
              "start": 125,
              "end": 126,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 16 },

                "end": {
                  "line": 9,
                  "column": 17 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 16 },

                  "end": {
                    "line": 9,
                    "column": 17 },

                  "identifierName": "a" },

                "name": "a" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 16 },

                  "end": {
                    "line": 9,
                    "column": 17 },

                  "identifierName": "a" },

                "name": "a" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 128,
              "end": 129,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 19 },

                "end": {
                  "line": 9,
                  "column": 20 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 19 },

                  "end": {
                    "line": 9,
                    "column": 20 },

                  "identifierName": "b" },

                "name": "b" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 19 },

                  "end": {
                    "line": 9,
                    "column": 20 },

                  "identifierName": "b" },

                "name": "b" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 131,
              "end": 132,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 22 },

                "end": {
                  "line": 9,
                  "column": 23 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 22 },

                  "end": {
                    "line": 9,
                    "column": 23 },

                  "identifierName": "c" },

                "name": "c" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 22 },

                  "end": {
                    "line": 9,
                    "column": 23 },

                  "identifierName": "c" },

                "name": "c" },

              "extra": {
                "shorthand": true } },


            {
              "type": "ObjectProperty",
              "start": 134,
              "end": 135,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 25 },

                "end": {
                  "line": 9,
                  "column": 26 } },


              "method": false,
              "key": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 25 },

                  "end": {
                    "line": 9,
                    "column": 26 },

                  "identifierName": "d" },

                "name": "d" },

              "computed": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 25 },

                  "end": {
                    "line": 9,
                    "column": 26 },

                  "identifierName": "d" },

                "name": "d" },

              "extra": {
                "shorthand": true } }] },




          {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "loc": {
              "start": {
                "line": 9,
                "column": 29 },

              "end": {
                "line": 9,
                "column": 32 },

              "identifierName": "ccc" },

            "name": "ccc" }],


          "body": {
            "type": "BlockStatement",
            "start": 146,
            "end": 170,
            "loc": {
              "start": {
                "line": 9,
                "column": 37 },

              "end": {
                "line": 12,
                "column": 1 } },


            "body": [
            {
              "type": "ExpressionStatement",
              "start": 150,
              "end": 166,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 2 },

                "end": {
                  "line": 10,
                  "column": 18 } },


              "expression": {
                "type": "CallExpression",
                "start": 150,
                "end": 166,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 2 },

                  "end": {
                    "line": 10,
                    "column": 18 } },


                "callee": {
                  "type": "MemberExpression",
                  "start": 150,
                  "end": 161,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 2 },

                    "end": {
                      "line": 10,
                      "column": 13 } },


                  "object": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 157,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 2 },

                      "end": {
                        "line": 10,
                        "column": 9 },

                      "identifierName": "console" },

                    "name": "console" },

                  "computed": false,
                  "property": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 161,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 10 },

                      "end": {
                        "line": 10,
                        "column": 13 },

                      "identifierName": "log" },

                    "name": "log" } },


                "arguments": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 14 },

                    "end": {
                      "line": 10,
                      "column": 17 },

                    "identifierName": "ccc" },

                  "name": "ccc" }] } }],





            "directives": [] } } }],




      "kind": "const" },

    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 179,
      "loc": {
        "start": {
          "line": 14,
          "column": 0 },

        "end": {
          "line": 14,
          "column": 7 } },


      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 179,
        "loc": {
          "start": {
            "line": 14,
            "column": 0 },

          "end": {
            "line": 14,
            "column": 7 } },


        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "loc": {
            "start": {
              "line": 14,
              "column": 0 },

            "end": {
              "line": 14,
              "column": 5 },

            "identifierName": "test2" },

          "name": "test2" },

        "arguments": [] } },


    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 194,
      "loc": {
        "start": {
          "line": 15,
          "column": 0 },

        "end": {
          "line": 15,
          "column": 14 } },


      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 194,
        "loc": {
          "start": {
            "line": 15,
            "column": 0 },

          "end": {
            "line": 15,
            "column": 14 } },


        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 185,
          "loc": {
            "start": {
              "line": 15,
              "column": 0 },

            "end": {
              "line": 15,
              "column": 5 },

            "identifierName": "test1" },

          "name": "test1" },

        "arguments": [
        {
          "type": "ObjectExpression",
          "start": 186,
          "end": 193,
          "loc": {
            "start": {
              "line": 15,
              "column": 6 },

            "end": {
              "line": 15,
              "column": 13 } },


          "properties": [
          {
            "type": "ObjectProperty",
            "start": 187,
            "end": 192,
            "loc": {
              "start": {
                "line": 15,
                "column": 7 },

              "end": {
                "line": 15,
                "column": 12 } },


            "method": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "loc": {
                "start": {
                  "line": 15,
                  "column": 7 },

                "end": {
                  "line": 15,
                  "column": 8 },

                "identifierName": "a" },

              "name": "a" },

            "computed": false,
            "shorthand": false,
            "value": {
              "type": "NumericLiteral",
              "start": 189,
              "end": 192,
              "loc": {
                "start": {
                  "line": 15,
                  "column": 9 },

                "end": {
                  "line": 15,
                  "column": 12 } },


              "extra": {
                "rawValue": 123,
                "raw": "123" },

              "value": 123 } }] }] } },







    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 203,
      "loc": {
        "start": {
          "line": 17,
          "column": 0 },

        "end": {
          "line": 17,
          "column": 7 } },


      "expression": {
        "type": "CallExpression",
        "start": 196,
        "end": 203,
        "loc": {
          "start": {
            "line": 17,
            "column": 0 },

          "end": {
            "line": 17,
            "column": 7 } },


        "callee": {
          "type": "Identifier",
          "start": 196,
          "end": 200,
          "loc": {
            "start": {
              "line": 17,
              "column": 0 },

            "end": {
              "line": 17,
              "column": 4 },

            "identifierName": "test" },

          "name": "test" },

        "arguments": [
        {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "loc": {
            "start": {
              "line": 17,
              "column": 5 },

            "end": {
              "line": 17,
              "column": 6 },

            "identifierName": "a" },

          "name": "a" }] } }],





    "directives": [] },

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
      "updateContext": null },

    "value": "const",
    "start": 0,
    "end": 5,
    "loc": {
      "start": {
        "line": 1,
        "column": 0 },

      "end": {
        "line": 1,
        "column": 5 } } },



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
      "updateContext": null },

    "value": "test",
    "start": 6,
    "end": 10,
    "loc": {
      "start": {
        "line": 1,
        "column": 6 },

      "end": {
        "line": 1,
        "column": 10 } } },



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
      "updateContext": null },

    "value": "=",
    "start": 11,
    "end": 12,
    "loc": {
      "start": {
        "line": 1,
        "column": 11 },

      "end": {
        "line": 1,
        "column": 12 } } },



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
      "updateContext": null },

    "start": 13,
    "end": 14,
    "loc": {
      "start": {
        "line": 1,
        "column": 13 },

      "end": {
        "line": 1,
        "column": 14 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 14,
    "end": 15,
    "loc": {
      "start": {
        "line": 1,
        "column": 14 },

      "end": {
        "line": 1,
        "column": 15 } } },



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
      "updateContext": null },

    "start": 15,
    "end": 16,
    "loc": {
      "start": {
        "line": 1,
        "column": 15 },

      "end": {
        "line": 1,
        "column": 16 } } },



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
      "updateContext": null },

    "value": "b",
    "start": 17,
    "end": 18,
    "loc": {
      "start": {
        "line": 1,
        "column": 17 },

      "end": {
        "line": 1,
        "column": 18 } } },



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
      "updateContext": null },

    "start": 18,
    "end": 19,
    "loc": {
      "start": {
        "line": 1,
        "column": 18 },

      "end": {
        "line": 1,
        "column": 19 } } },



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
      "updateContext": null },

    "value": "c",
    "start": 20,
    "end": 21,
    "loc": {
      "start": {
        "line": 1,
        "column": 20 },

      "end": {
        "line": 1,
        "column": 21 } } },



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
      "updateContext": null },

    "start": 21,
    "end": 22,
    "loc": {
      "start": {
        "line": 1,
        "column": 21 },

      "end": {
        "line": 1,
        "column": 22 } } },



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
      "updateContext": null },

    "value": "d",
    "start": 23,
    "end": 24,
    "loc": {
      "start": {
        "line": 1,
        "column": 23 },

      "end": {
        "line": 1,
        "column": 24 } } },



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
      "updateContext": null },

    "start": 24,
    "end": 25,
    "loc": {
      "start": {
        "line": 1,
        "column": 24 },

      "end": {
        "line": 1,
        "column": 25 } } },



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
      "updateContext": null },

    "start": 26,
    "end": 28,
    "loc": {
      "start": {
        "line": 1,
        "column": 26 },

      "end": {
        "line": 1,
        "column": 28 } } },



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
      "binop": null },

    "start": 29,
    "end": 30,
    "loc": {
      "start": {
        "line": 1,
        "column": 29 },

      "end": {
        "line": 1,
        "column": 30 } } },



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
      "updateContext": null },

    "value": "console",
    "start": 32,
    "end": 39,
    "loc": {
      "start": {
        "line": 2,
        "column": 1 },

      "end": {
        "line": 2,
        "column": 8 } } },



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
      "updateContext": null },

    "start": 39,
    "end": 40,
    "loc": {
      "start": {
        "line": 2,
        "column": 8 },

      "end": {
        "line": 2,
        "column": 9 } } },



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
      "updateContext": null },

    "value": "log",
    "start": 40,
    "end": 43,
    "loc": {
      "start": {
        "line": 2,
        "column": 9 },

      "end": {
        "line": 2,
        "column": 12 } } },



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
      "updateContext": null },

    "start": 43,
    "end": 44,
    "loc": {
      "start": {
        "line": 2,
        "column": 12 },

      "end": {
        "line": 2,
        "column": 13 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 44,
    "end": 45,
    "loc": {
      "start": {
        "line": 2,
        "column": 13 },

      "end": {
        "line": 2,
        "column": 14 } } },



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
      "updateContext": null },

    "start": 45,
    "end": 46,
    "loc": {
      "start": {
        "line": 2,
        "column": 14 },

      "end": {
        "line": 2,
        "column": 15 } } },



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
      "updateContext": null },

    "value": "c",
    "start": 47,
    "end": 48,
    "loc": {
      "start": {
        "line": 2,
        "column": 16 },

      "end": {
        "line": 2,
        "column": 17 } } },



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
      "updateContext": null },

    "start": 48,
    "end": 49,
    "loc": {
      "start": {
        "line": 2,
        "column": 17 },

      "end": {
        "line": 2,
        "column": 18 } } },



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
      "binop": null },

    "start": 50,
    "end": 51,
    "loc": {
      "start": {
        "line": 3,
        "column": 0 },

      "end": {
        "line": 3,
        "column": 1 } } },



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
      "updateContext": null },

    "value": "const",
    "start": 53,
    "end": 58,
    "loc": {
      "start": {
        "line": 5,
        "column": 0 },

      "end": {
        "line": 5,
        "column": 5 } } },



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
      "updateContext": null },

    "value": "test1",
    "start": 59,
    "end": 64,
    "loc": {
      "start": {
        "line": 5,
        "column": 6 },

      "end": {
        "line": 5,
        "column": 11 } } },



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
      "updateContext": null },

    "value": "=",
    "start": 65,
    "end": 66,
    "loc": {
      "start": {
        "line": 5,
        "column": 12 },

      "end": {
        "line": 5,
        "column": 13 } } },



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
      "updateContext": null },

    "start": 67,
    "end": 68,
    "loc": {
      "start": {
        "line": 5,
        "column": 14 },

      "end": {
        "line": 5,
        "column": 15 } } },



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
      "binop": null },

    "start": 68,
    "end": 69,
    "loc": {
      "start": {
        "line": 5,
        "column": 15 },

      "end": {
        "line": 5,
        "column": 16 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 69,
    "end": 70,
    "loc": {
      "start": {
        "line": 5,
        "column": 16 },

      "end": {
        "line": 5,
        "column": 17 } } },



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
      "updateContext": null },

    "start": 70,
    "end": 71,
    "loc": {
      "start": {
        "line": 5,
        "column": 17 },

      "end": {
        "line": 5,
        "column": 18 } } },



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
      "updateContext": null },

    "value": "b",
    "start": 72,
    "end": 73,
    "loc": {
      "start": {
        "line": 5,
        "column": 19 },

      "end": {
        "line": 5,
        "column": 20 } } },



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
      "updateContext": null },

    "start": 73,
    "end": 74,
    "loc": {
      "start": {
        "line": 5,
        "column": 20 },

      "end": {
        "line": 5,
        "column": 21 } } },



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
      "updateContext": null },

    "value": "c",
    "start": 75,
    "end": 76,
    "loc": {
      "start": {
        "line": 5,
        "column": 22 },

      "end": {
        "line": 5,
        "column": 23 } } },



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
      "updateContext": null },

    "start": 76,
    "end": 77,
    "loc": {
      "start": {
        "line": 5,
        "column": 23 },

      "end": {
        "line": 5,
        "column": 24 } } },



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
      "updateContext": null },

    "value": "d",
    "start": 78,
    "end": 79,
    "loc": {
      "start": {
        "line": 5,
        "column": 25 },

      "end": {
        "line": 5,
        "column": 26 } } },



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
      "binop": null },

    "start": 79,
    "end": 80,
    "loc": {
      "start": {
        "line": 5,
        "column": 26 },

      "end": {
        "line": 5,
        "column": 27 } } },



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
      "updateContext": null },

    "start": 80,
    "end": 81,
    "loc": {
      "start": {
        "line": 5,
        "column": 27 },

      "end": {
        "line": 5,
        "column": 28 } } },



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
      "updateContext": null },

    "start": 82,
    "end": 84,
    "loc": {
      "start": {
        "line": 5,
        "column": 29 },

      "end": {
        "line": 5,
        "column": 31 } } },



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
      "binop": null },

    "start": 85,
    "end": 86,
    "loc": {
      "start": {
        "line": 5,
        "column": 32 },

      "end": {
        "line": 5,
        "column": 33 } } },



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
      "updateContext": null },

    "value": "console",
    "start": 88,
    "end": 95,
    "loc": {
      "start": {
        "line": 6,
        "column": 1 },

      "end": {
        "line": 6,
        "column": 8 } } },



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
      "updateContext": null },

    "start": 95,
    "end": 96,
    "loc": {
      "start": {
        "line": 6,
        "column": 8 },

      "end": {
        "line": 6,
        "column": 9 } } },



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
      "updateContext": null },

    "value": "log",
    "start": 96,
    "end": 99,
    "loc": {
      "start": {
        "line": 6,
        "column": 9 },

      "end": {
        "line": 6,
        "column": 12 } } },



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
      "updateContext": null },

    "start": 99,
    "end": 100,
    "loc": {
      "start": {
        "line": 6,
        "column": 12 },

      "end": {
        "line": 6,
        "column": 13 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 100,
    "end": 101,
    "loc": {
      "start": {
        "line": 6,
        "column": 13 },

      "end": {
        "line": 6,
        "column": 14 } } },



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
      "updateContext": null },

    "start": 101,
    "end": 102,
    "loc": {
      "start": {
        "line": 6,
        "column": 14 },

      "end": {
        "line": 6,
        "column": 15 } } },



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
      "updateContext": null },

    "value": "c",
    "start": 103,
    "end": 104,
    "loc": {
      "start": {
        "line": 6,
        "column": 16 },

      "end": {
        "line": 6,
        "column": 17 } } },



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
      "updateContext": null },

    "start": 104,
    "end": 105,
    "loc": {
      "start": {
        "line": 6,
        "column": 17 },

      "end": {
        "line": 6,
        "column": 18 } } },



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
      "binop": null },

    "start": 106,
    "end": 107,
    "loc": {
      "start": {
        "line": 7,
        "column": 0 },

      "end": {
        "line": 7,
        "column": 1 } } },



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
      "updateContext": null },

    "value": "const",
    "start": 109,
    "end": 114,
    "loc": {
      "start": {
        "line": 9,
        "column": 0 },

      "end": {
        "line": 9,
        "column": 5 } } },



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
      "updateContext": null },

    "value": "test2",
    "start": 115,
    "end": 120,
    "loc": {
      "start": {
        "line": 9,
        "column": 6 },

      "end": {
        "line": 9,
        "column": 11 } } },



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
      "updateContext": null },

    "value": "=",
    "start": 121,
    "end": 122,
    "loc": {
      "start": {
        "line": 9,
        "column": 12 },

      "end": {
        "line": 9,
        "column": 13 } } },



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
      "updateContext": null },

    "start": 123,
    "end": 124,
    "loc": {
      "start": {
        "line": 9,
        "column": 14 },

      "end": {
        "line": 9,
        "column": 15 } } },



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
      "binop": null },

    "start": 124,
    "end": 125,
    "loc": {
      "start": {
        "line": 9,
        "column": 15 },

      "end": {
        "line": 9,
        "column": 16 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 125,
    "end": 126,
    "loc": {
      "start": {
        "line": 9,
        "column": 16 },

      "end": {
        "line": 9,
        "column": 17 } } },



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
      "updateContext": null },

    "start": 126,
    "end": 127,
    "loc": {
      "start": {
        "line": 9,
        "column": 17 },

      "end": {
        "line": 9,
        "column": 18 } } },



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
      "updateContext": null },

    "value": "b",
    "start": 128,
    "end": 129,
    "loc": {
      "start": {
        "line": 9,
        "column": 19 },

      "end": {
        "line": 9,
        "column": 20 } } },



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
      "updateContext": null },

    "start": 129,
    "end": 130,
    "loc": {
      "start": {
        "line": 9,
        "column": 20 },

      "end": {
        "line": 9,
        "column": 21 } } },



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
      "updateContext": null },

    "value": "c",
    "start": 131,
    "end": 132,
    "loc": {
      "start": {
        "line": 9,
        "column": 22 },

      "end": {
        "line": 9,
        "column": 23 } } },



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
      "updateContext": null },

    "start": 132,
    "end": 133,
    "loc": {
      "start": {
        "line": 9,
        "column": 23 },

      "end": {
        "line": 9,
        "column": 24 } } },



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
      "updateContext": null },

    "value": "d",
    "start": 134,
    "end": 135,
    "loc": {
      "start": {
        "line": 9,
        "column": 25 },

      "end": {
        "line": 9,
        "column": 26 } } },



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
      "binop": null },

    "start": 135,
    "end": 136,
    "loc": {
      "start": {
        "line": 9,
        "column": 26 },

      "end": {
        "line": 9,
        "column": 27 } } },



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
      "updateContext": null },

    "start": 136,
    "end": 137,
    "loc": {
      "start": {
        "line": 9,
        "column": 27 },

      "end": {
        "line": 9,
        "column": 28 } } },



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
      "updateContext": null },

    "value": "ccc",
    "start": 138,
    "end": 141,
    "loc": {
      "start": {
        "line": 9,
        "column": 29 },

      "end": {
        "line": 9,
        "column": 32 } } },



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
      "updateContext": null },

    "start": 141,
    "end": 142,
    "loc": {
      "start": {
        "line": 9,
        "column": 32 },

      "end": {
        "line": 9,
        "column": 33 } } },



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
      "updateContext": null },

    "start": 143,
    "end": 145,
    "loc": {
      "start": {
        "line": 9,
        "column": 34 },

      "end": {
        "line": 9,
        "column": 36 } } },



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
      "binop": null },

    "start": 146,
    "end": 147,
    "loc": {
      "start": {
        "line": 9,
        "column": 37 },

      "end": {
        "line": 9,
        "column": 38 } } },



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
      "updateContext": null },

    "value": "console",
    "start": 150,
    "end": 157,
    "loc": {
      "start": {
        "line": 10,
        "column": 2 },

      "end": {
        "line": 10,
        "column": 9 } } },



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
      "updateContext": null },

    "start": 157,
    "end": 158,
    "loc": {
      "start": {
        "line": 10,
        "column": 9 },

      "end": {
        "line": 10,
        "column": 10 } } },



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
      "updateContext": null },

    "value": "log",
    "start": 158,
    "end": 161,
    "loc": {
      "start": {
        "line": 10,
        "column": 10 },

      "end": {
        "line": 10,
        "column": 13 } } },



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
      "updateContext": null },

    "start": 161,
    "end": 162,
    "loc": {
      "start": {
        "line": 10,
        "column": 13 },

      "end": {
        "line": 10,
        "column": 14 } } },



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
      "updateContext": null },

    "value": "ccc",
    "start": 162,
    "end": 165,
    "loc": {
      "start": {
        "line": 10,
        "column": 14 },

      "end": {
        "line": 10,
        "column": 17 } } },



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
      "updateContext": null },

    "start": 165,
    "end": 166,
    "loc": {
      "start": {
        "line": 10,
        "column": 17 },

      "end": {
        "line": 10,
        "column": 18 } } },



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
      "binop": null },

    "start": 169,
    "end": 170,
    "loc": {
      "start": {
        "line": 12,
        "column": 0 },

      "end": {
        "line": 12,
        "column": 1 } } },



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
      "updateContext": null },

    "value": "test2",
    "start": 172,
    "end": 177,
    "loc": {
      "start": {
        "line": 14,
        "column": 0 },

      "end": {
        "line": 14,
        "column": 5 } } },



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
      "updateContext": null },

    "start": 177,
    "end": 178,
    "loc": {
      "start": {
        "line": 14,
        "column": 5 },

      "end": {
        "line": 14,
        "column": 6 } } },



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
      "updateContext": null },

    "start": 178,
    "end": 179,
    "loc": {
      "start": {
        "line": 14,
        "column": 6 },

      "end": {
        "line": 14,
        "column": 7 } } },



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
      "updateContext": null },

    "value": "test1",
    "start": 180,
    "end": 185,
    "loc": {
      "start": {
        "line": 15,
        "column": 0 },

      "end": {
        "line": 15,
        "column": 5 } } },



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
      "updateContext": null },

    "start": 185,
    "end": 186,
    "loc": {
      "start": {
        "line": 15,
        "column": 5 },

      "end": {
        "line": 15,
        "column": 6 } } },



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
      "binop": null },

    "start": 186,
    "end": 187,
    "loc": {
      "start": {
        "line": 15,
        "column": 6 },

      "end": {
        "line": 15,
        "column": 7 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 187,
    "end": 188,
    "loc": {
      "start": {
        "line": 15,
        "column": 7 },

      "end": {
        "line": 15,
        "column": 8 } } },



  {
    "type": {
      "label": ":",
      "beforeExpr": true,
      "startsExpr": false,
      "rightAssociative": false,
      "isLoop": false,
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null },

    "start": 188,
    "end": 189,
    "loc": {
      "start": {
        "line": 15,
        "column": 8 },

      "end": {
        "line": 15,
        "column": 9 } } },



  {
    "type": {
      "label": "num",
      "beforeExpr": false,
      "startsExpr": true,
      "rightAssociative": false,
      "isLoop": false,
      "isAssign": false,
      "prefix": false,
      "postfix": false,
      "binop": null,
      "updateContext": null },

    "value": 123,
    "start": 189,
    "end": 192,
    "loc": {
      "start": {
        "line": 15,
        "column": 9 },

      "end": {
        "line": 15,
        "column": 12 } } },



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
      "binop": null },

    "start": 192,
    "end": 193,
    "loc": {
      "start": {
        "line": 15,
        "column": 12 },

      "end": {
        "line": 15,
        "column": 13 } } },



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
      "updateContext": null },

    "start": 193,
    "end": 194,
    "loc": {
      "start": {
        "line": 15,
        "column": 13 },

      "end": {
        "line": 15,
        "column": 14 } } },



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
      "updateContext": null },

    "value": "test",
    "start": 196,
    "end": 200,
    "loc": {
      "start": {
        "line": 17,
        "column": 0 },

      "end": {
        "line": 17,
        "column": 4 } } },



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
      "updateContext": null },

    "start": 200,
    "end": 201,
    "loc": {
      "start": {
        "line": 17,
        "column": 4 },

      "end": {
        "line": 17,
        "column": 5 } } },



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
      "updateContext": null },

    "value": "a",
    "start": 201,
    "end": 202,
    "loc": {
      "start": {
        "line": 17,
        "column": 5 },

      "end": {
        "line": 17,
        "column": 6 } } },



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
      "updateContext": null },

    "start": 202,
    "end": 203,
    "loc": {
      "start": {
        "line": 17,
        "column": 6 },

      "end": {
        "line": 17,
        "column": 7 } } },



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
      "updateContext": null },

    "start": 203,
    "end": 203,
    "loc": {
      "start": {
        "line": 17,
        "column": 7 },

      "end": {
        "line": 17,
        "column": 7 } } }] };





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