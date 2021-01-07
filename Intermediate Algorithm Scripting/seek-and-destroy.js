function destroyer(arr) {
  console.log(arguments)
  let newArr = arguments[0]
  let values = Object.values(arguments).slice(1)
  console.log(values)
  for(let i = 0 ; i<values.length ;i++)
{
newArr = newArr.filter(e=> e!= values[i])
  
}

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));