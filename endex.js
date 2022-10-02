//Use Destructuring Assignment to Assign Variables from Arrays
//swap the values
let a = 1;
let b = 0;

//first
let c;
c = a;
a = b;
b = c;

//second
let aa = 1;
let bb = 0;
[aa, bb] = [bb, aa];

// three
a = b + (b = a, 0);

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

//Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line

    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);

    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {

    return {
        name,
        age,
        gender
    };

};

//Write Concise Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);


//Use class Syntax to Define a Constructor Function
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to Control Access to an Object
class Thermostat {
    constructor(temp) {
        this._temp = 5 / 9 * (temp - 32);
    }
    // getter
    get temperature() {
        return this._temp;
    }
    // setter
    set temperature(value) {
        this._temp = value;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;// вызов setter
temp = thermos.temperature; // 26 in Celsius...чтение после setter


//Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result)
})


makeServerRequest.catch(error => {
    console.log(error);
});


//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
//let result = myRegex.test(myString);

//Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
//let result = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
//let petRegex = /dog|cat|bird|fish/; // Change this line
//let result = petRegex.test(petString);

//Ignore Case While Matching
//let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
//let result = fccRegex.test(myString);

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
//let result = extractStr.match(codingRegex); // Change this line

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
//let result = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
//let result = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
//let result = quoteSample.match(vowelRegex); // Change this line

//Match All Numbers
//let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
//let result = movieName.match(numRegex).length;

//Match All Non - Numbers
//let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
//let result = movieName.match(noNumRegex).length;

//Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]|[a-z]+\d*)$/i; // Change this line
//let result = userCheck.test(username);

//Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
//let result = sample.match(countWhiteSpace);

//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/i; // Change this line
//let result = favRegex.test(favWord);

//Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; // Change this line
//let result = pwRegex.test(sampleWord);

//Check For Mixed Grouping of Characters
//let myString = "Eleanor Roosevelt";
//let myRegex = /(Eleanor|Franklin D.)\sRoosevelt/; // Change this line
//let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
//let result = reRegex.test(repeatNum);

//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
//let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
//let result = hello.replace(wsRegex, ""); // Change this line

//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "i";
console.log(myArray);

//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift("I", 2, "three",);
    arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

//Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

let newArr = arr.splice(1, 4);

console.log(arr);

//Add Items Using splice()
function htmlColorNames(arr) {

    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")

    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Copy Array Items Using slice()
function forecast(arr) {

    let newArr = arr.slice(2, 4);
    return newArr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));







