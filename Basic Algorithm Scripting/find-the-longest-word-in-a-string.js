function findLongestWordLength(str) {
  let arr = str.split(" ")
  let max = 0
  console.log(arr)
  for(let word in arr)
  {
    console.log(word)
    if (arr[word].length > max) max = arr[word].length;
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");