function fearNotLetter(str) {
  if (str == 'abcdefghijklmnopqrstuvwxyz') return undefined;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let strArray = str.split('');
  let idx = alphabet.indexOf(strArray[0]);
  let strLen = strArray.length;
  let splicedAlphabet = alphabet.splice(idx, strLen);

  for (let i = 0; i < splicedAlphabet.length; i++) {
    if (!strArray.includes(splicedAlphabet[i])) 
      return splicedAlphabet[i]
  }
}



fearNotLetter("abce");