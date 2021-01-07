function spinalCase(str) {
  
  let replacedWhiteSpaceStr=str.replace(/([A-Z])/g," $1").trim().replace(/ +/g, '-').toLowerCase().replace(/_/g, '')

console.log( replacedWhiteSpaceStr)
     
     return replacedWhiteSpaceStr;
}

spinalCase('This Is Spinal Tap');