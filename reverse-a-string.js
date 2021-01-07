function reverseString(str) {
  let stack = []
  for (let i =0 ; i<str.length ; i++)
  {
stack.push(str[i])

  }
stack.reverse()
str = stack.join("")
console.log(str)
  return str;
}

reverseString("hello");