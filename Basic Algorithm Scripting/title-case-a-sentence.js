function titleCase(str) {

  let strArr = str.split(" ")
  for (let i = 0 ; i<strArr.length ; i++)
  {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase()
  }
  console.log(strArr.join(" "))
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");