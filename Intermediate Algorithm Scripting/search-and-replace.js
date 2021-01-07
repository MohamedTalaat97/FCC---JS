function myReplace(str, before, after) {
  let newStr = str.split(" ")
  let index = newStr.indexOf(before)
  if (index > -1)
  {
    let cap = /[A-Z]/.test( newStr[index][0])
    if (cap)
    {
 newStr[index] = after.charAt(0).toUpperCase()+after.slice(1)
    }
    else {
      newStr[index] =after.charAt(0).toLowerCase()+after.slice(1)

    }
    
  }
  console.log(newStr)
  return newStr.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))