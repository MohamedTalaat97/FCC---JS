function confirmEnding(str, target) {
let newStr = str.substring(str.length - target.length);

  return newStr === target;
}

confirmEnding("Bastian", "n");