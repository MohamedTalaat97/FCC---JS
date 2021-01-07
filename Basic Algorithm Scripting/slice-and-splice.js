function frankenSplice(arr1, arr2, n) {
  var p1 = arr2.slice(0,n);
var p2 = arr2.slice(n);
console.log(p1,p2)
  return p1.concat(arr1).concat(p2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);