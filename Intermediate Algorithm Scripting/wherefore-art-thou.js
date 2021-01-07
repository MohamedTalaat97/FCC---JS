function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcProperty = Object.keys(source)
  let out = false
  for (let i = 0 ; i<collection.length ; i++)
  {
    for(let j = 0 ; j < srcProperty.length ; j++)
    {
    if (collection[i].hasOwnProperty(srcProperty[j]))
    {
      if(collection[i][srcProperty[j]] == source[srcProperty[j]])
      {
        
      }
      else { out = true ; break }
 
    }
    else { out = true ;break}

    }
    if (!out) { arr.push(collection[i])}
    out = false
    

  }

console.log(arr)
  // Only change code above this line
  return arr;
}
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})