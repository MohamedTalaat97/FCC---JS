function chunkArrayInGroups(arr, size) {
  let i = 0
  let newArr = []
  let s = size
  while(arr.length != 0)
  {

    newArr.push(arr.splice(0,size))
  i++

  }
while(newArr[newArr.length-1].length == 0)
  {newArr.pop()}
 console.log(newArr)
  return newArr;
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
