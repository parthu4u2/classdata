console.log("\n--------------------- DAY 4 -----------------\n");

console.log("\n----------- Function -----------\n");


// Demo Of Function
function greet(name) {
    console.log("Hello," + name + "!");
}
greet("Parth");

// Addition and Subtraction

function add(a, b) {
    console.log("\nAddition Of " + a + " And " + b + " = ", a + b)
}
add(10, 20);

function sub(a, b) {
    console.log("\nSubtraction Of " + a + " And " + b + " = ", a - b)
}
var a = 50, b = 15;
sub(a, b);

// Numbr is Even Or Odd Check
// Noraml function 

function IsEven(a) {
    return a % 2 == 0;
}
var a = 10;
console.log("\n" + a + " Is even = " + IsEven(a));

// Arrow function 
const isEven = (a) => a % 2 === 0;

var a = 10;
console.log("\n" + a + " (Using Arrow Function) Is even = " + isEven(a));



// Sum of Array Element 

function sumofarray(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

var array = [10, 20, 30, 40, 50];

console.log("\nMy Array Element is = ", array);
console.log("Sum of All Array Element is = ", sumofarray(array));

//Check if All Elements are Positive 
//Write a function areAllPositive(arr) that returns
// true if all numbers are positive.

function areAllPositive(array) {
    var nagative = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return false;
        }
    }
    return true;

}
var array = [10, 20, -10, 30];

console.log("\nMy Array Element is = ", array);
console.log(" All Array Element is Positive = ", areAllPositive(array));

// Some Math function 

// Returns the absolute (positive) value of x."
console.log("This is Abs fucntion = ", Math.abs(-7.10));

// Rounds x UP to the nearest integer 
console.log("This is ceil fucntion = ", Math.ceil(4.3));

// Rounds x DOWN to the nearest integer
console.log("This is floor fucntion = ", Math.floor(4.7));

// Rounds x to the nearest integer.
console.log("This is round fucntion = ", Math.round(4.5));

// Returns the integer part of x 
console.log("This is trunc fucntion = ", Math.trunc(4.9));




console.log("\n--------------------------------------- \n");

