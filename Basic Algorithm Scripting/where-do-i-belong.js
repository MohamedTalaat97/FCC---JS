function getIndexToIns(arr, num) {
  let i = 0
  let newArr = arr.sort(function(a, b){return a - b})
  console.log(newArr)
  for(i = 0 ; i<newArr.length ; i++)
  {

    if (num > newArr[i] && num <=newArr[i+1]) 
    return i+1
  }
  if (num > newArr[i-1])  return newArr.length;
  return 0;
 
}

console.log(getIndexToIns([2, 5, 10], 15));