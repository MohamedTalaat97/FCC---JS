// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0]// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber =16;       // Change this line
var player = testObj[playerNumber];   // Change this line// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = "woof"var sum = 10 + 10;function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch(val){

  case "a":
  answer = "apple"
  break;
  case "b":
  answer = "bird"
  break;
  case "c":
  answer = "cat";
  break;
  default :
  answer =  "stuff"
  
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);// Change code below this line

var someAdjective = "hard";
var myStr = "Learning to code is ";
myStr += someAdjective// Setup
var a;
a = 7;
var b;
b=a;

// Only change code below this line// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)var myDog = {
// Only change code below this line
"name" : "medo",
"legs" : 2,
"tails" : 4,
"friends" : [1,2,3]

// Only change code above this line
};function testSize(num) {
  // Only change code below this line
if(num<5)
{return "Tiny"}
else if (num <10)
{ return "Small"}
else if (num <15)
{ return "Medium"}
else if (num<20)
{return "Large"}
else { return "Huge"}

  return "Change Me";
  // Only change code above this line
}

testSize(7);//first comment 
/* second comment */// Setup
function testEqual(val) {
  if (val ==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val >10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);function testLessThan(val) {
  if (val <25) {  // Change this line
    return "Under 25";
  }

  if (val <55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
  
      return "Yes";
  
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9 ;
c += 7;var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /=  12;
b /=  4;
c /=  11;var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *=  5;
b *= 3 ;
c *=   10;var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -=  6;
b -= 15;
c -=  1;var myStr ="This is the start. "+ "This is the end."; // Change this line// Only change code below this line

var myStr ="This is the first sentence. ";
myStr += "This is the second sentence."// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";// Only change code below this line
var myName = "Mohamed";
var myStr = "My name is" + myName + " and I am well!" ;// Setup
var myArray = [];

// Only change code below this line
for(var i = 9 ; i >0 ; i-=2)
{
myArray.push(i)
}var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7var myName;var myFirstName = "mohamed";
var myLastName = "talaat"var myVar = 11;

// Only change code below this line
myVar --;// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this li
delete myDog.tailsvar quotient = 4.4 / 2.0; // Change this linevar quotient = 66 / 33;var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this linevar myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
// Change this line// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;// Only change code below this line

var remainder = 11%3;// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear ="sweater"

  // Only change code above this line
  return outerWear;
}

myOutfit();var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes ==1)
  {return names[0]}
  else if (strokes <=par-2)
{return names[1]}
else if (strokes == par-1)
{return names[2]}
else if (strokes == par)
{return names[3]}
else if (strokes == par+1)
{return names[4]}
else if (strokes == par+2)
{return names[5]}
else 
{return names[6]}


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);var myVar = 87;

// Only change code below this line
myVar++;var a = 9;function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}

testElseIf(7);function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else  {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);// Setup
var myArray = [];

// Only change code below this line

for (var i = 0 ; i < 10 ; i+= 2)
{

    myArray.push(i+1)
}
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0
for (var i =0 ; i< myArr.length ;i++)
{
total += myArr[i]

}// Setup
var myArray = [];
var i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
}
while (i < 5)// Setup
var myArray = [];

// Only change code below this line
for (var i = 0 ; i< 5 ; i++)
{
    myArray.push(i+1)
}// Setup
var myArray = [];
var  i=5
while (i>=0)
{
    myArray.push(i)
    i--
}
// Only change code below this linefunction myLocalScope() {

  // Only change code below this line
  var myVar = 5

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35])var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
   {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add a record here
];// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val)
{
  case 1:
  case 2:
  case 3:
answer = "Low"
break;
case 4: case 5: case 6:
answer = "Mid"
break
case 7: case 8 : case 9:
answer = "High"
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);var product = 2.0 *2.5;var product = 8 * 10;// Only change code below this line
var myArray = [['medo','hnan'] , [5,6]];function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0 ; i< arr.length ; i++)
  {
     for(var j = 0 ; j< arr[i].length ; j++)
     {

       product *= arr[i][j]
     }

     
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);function functionWithArgs(a , b)
{

    console.log(a+b)
}
functionWithArgs(1,2)// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

  if (value == "")
  {
    delete object[id].prop
    return object
  }
  if(prop != "tracks")
  {
    object[id].prop = value
    console.log(object[id].prop)
  }
  if (prop == "tracks"){
    if (!object[id].hasOwnProperty("tracks"))
    {
      object[id].tracks = [value]
    }
    else {
      object[id].tracks.push(value)
    }

  }

  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val)
{
  case "bob": 
    answer = "Marley";
    break;
  case 42 : 
    answer = "The Answer";
      break;
  case 1:
    answer = "There is no #1";
      break;
  case 99:
    answer = "Missed me by this much!";
      break;
  case 7:
    answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);function timesFive(a){
    return a*5
}// Setup
function abTest(a, b) {
  // Only change code below this line
if(a<0 || b<0 ){
  return undefined
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);function isLess(a, b) {
  // Only change code below this line
return a<b
  // Only change code above this line
}

isLess(10, 15);function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val){
case 1:
answer = "alpha"
break;
case 2:
answer = "beta"
break;
case 3:
answer = "gamma"
break;
case 4:
answer = "delta"
break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);var myList = [];
myList.push(["Chocolate Bar", 15] ,
            ["Chocolate Bar", 15],
            ["Chocolate Bar", 15],
            ["Chocolate Bar", 15],
            ["Chocolate Bar", 15])function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  
  
  return arr.shift();
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));// Only change code below this line
var myArray = ["medo" , 5];// Setup
var a;
a=7;

// Only change code below this linevar difference = 45 -33;function checkObj(obj, checkProp) {
  // Only change code below this line
 
   if(obj.hasOwnProperty(checkProp)){
     return obj[checkProp]
   }
   else { return "Not Found"}
  // Only change code above this line
}// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this linefunction welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){

sum+=5

}

// Only change code above this line

addThree();
addFive();// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder"// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length -1]; // Change this line// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this linefunction trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true"
}
else{
  return "No, that was false"
}


  // Only change code above this line

}// Only change code below this line
function countdown(n){
if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this linefunction rangeOfNumbers(startNum, endNum) {

  if (startNum == endNum )
  {
return [startNum]
  }
  const arr = rangeOfNumbers(startNum , endNum -1)
  arr.push(endNum)


  return arr;
};function convertToInteger(str) {

return parseInt(str,2)
}

convertToInteger("10011");function convertToInteger(str) {
return parseInt(str)
}

convertToInteger("56");// Setup
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

phoneticLookup("charlie");var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "my " +myNoun + " has a " +myAdjective + " nose and it " + myVerb +" "+myAdverb; // Change this line
// Only change code above this linefunction reusableFunction()
{
    console.log("Hi World")
}


reusableFunction()