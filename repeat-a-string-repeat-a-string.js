function repeatStringNumTimes(str, num) {
  if (num <=0) return "";
  let basic = ""
  for (let i = 0; i<num;i++)
  {
    basic += str
  }
  console.log(basic)
  return basic;
}

repeatStringNumTimes("abc", 3);