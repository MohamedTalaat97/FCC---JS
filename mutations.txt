function mutation(arr) {
  console.log(arr[0].toLowerCase())
let str1 = Array.from(arr[0].toLowerCase());
let str2 = Array.from(arr[1].toLowerCase());

for(let i = 0;i<str2.length ; i++)
{
  if(str1.indexOf(str2[i]) == -1) return false
 
}
  return true;
}

mutation(["hello", "hey"]);