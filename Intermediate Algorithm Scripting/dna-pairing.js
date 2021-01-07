function pairElement(str) {
  let myArr={"A" : "T", "T" : "A", "G" : "C", "C" : "G"};
  return str.split("").map(dna => [dna, myArr[dna]] );
}
pairElement("GCG");