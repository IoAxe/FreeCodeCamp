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




