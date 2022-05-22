function isValidDocumentLanguage(document) {
  // console.log(document)
  return document.languageId.includes("javascript") || document.languageId.includes("javascriptreact") ;
}
// activeTextEditor.document
//     "uri":{
//         "$mid":1,
//         "fsPath":"/Users/boyq/Desktop/liangzhiCode/exploration-tool/src/pages/Exploration/components/PathAnalysis/index.jsx",
//         "external":"file:///Users/boyq/Desktop/liangzhiCode/exploration-tool/src/pages/Exploration/components/PathAnalysis/index.jsx",
//         "path":"/Users/boyq/Desktop/liangzhiCode/exploration-tool/src/pages/Exploration/components/PathAnalysis/index.jsx",
//         "scheme":"file"
//     },
//     "fileName":"/Users/boyq/Desktop/liangzhiCode/exploration-tool/src/pages/Exploration/components/PathAnalysis/index.jsx",
//     "isUntitled":false,
//     "languageId":"javascriptreact",
//     "version":1,
//     "isClosed":false,
//     "isDirty":false,
//     "eol":1,
//     "lineCount":171
// }

module.exports = {
  isValidDocumentLanguage,
};