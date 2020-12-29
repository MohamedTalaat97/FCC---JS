// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    "alpha":"Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "echo" : "Easy",
    "foxtrot" : "Frank",
    "delta" : "Denver"
  }
  result = lookup[val]
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");