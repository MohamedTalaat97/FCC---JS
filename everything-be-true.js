function truthCheck(collection, pre) {
var bool = false;  
  for (var each in collection) {
    if (collection[each][pre]) {
      bool=true;
    }
    else {
      return false;
    }
  }
 return bool;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))