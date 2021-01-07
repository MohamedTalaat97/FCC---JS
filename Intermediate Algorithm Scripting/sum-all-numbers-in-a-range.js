function sumAll(arr) {
  arr.sort((a,b) => a-b)
  let first = arr[0]
  let second = arr[1]
  console.log(first,second)
  let newArr = [first]
  while(1)
  {
    if (first ==second )
    { break}
   newArr.push(++first)
  }
 
  console.log(newArr)
  return newArr.reduce((acc , cur ) => acc+cur);
}

console.log(sumAll([1, 4]));