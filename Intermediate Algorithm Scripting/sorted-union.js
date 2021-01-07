function uniteUnique(arr) {
  let newArr = [...arguments]
  let result = []
  let numbers ={
1:false,
2:false,
3:false,
4:false,
5:false,
6:false,
7:false,
8:false,
9:false
  }
  while(newArr.length)
  { let temp = newArr.shift()
  console.log(temp)
  for (let num in temp)
  {
    if(!numbers[temp[num]])
    {
      result.push(temp[num])
      numbers[temp[num]] = true

    }
  }

  }


  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));