function countOnline(usersObj) {
  // Only change code below this line
  let count =0 

for (let user in usersObj)
{
  console.log()
  if (usersObj[user].online)
  count++
}

return count
  // Only change code above this line
}