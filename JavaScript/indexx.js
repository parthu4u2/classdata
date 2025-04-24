console.log("\n--------------------- DAY 2 -----------------\n");

// String Methods
// Slicing
console.log("\n----------- String Methods -----------\n");
console.log("\n----- 1. Slicing -----\n");
var str = "Apple,Kiwi,Mango";
var p1 = console.log(str.slice(4, 14));
var p2 = console.log(str.slice(-16, -8));

console.log();

// Substring
console.log("\n----- 2. Substring -----\n ");
var p3 = console.log(str.substring(4));

// Substr
console.log("\n----- 3. Substr -----\n");
var p4 = console.log(str.substr(4, 14));

// Replace
console.log("\n----- 4. Replace ----- \n");
var str2 = "Hello GoodMornining";
console.log("Before Replace = ", str2);
var newstr = str2.replace("GoodMornining", "GoodEvening");
console.log("After Replace = ", newstr);

// Case
console.log("\n----- 5. Case ----- \n");
console.log("Main String = ", newstr);
var str6 = console.log("Lower Case = ", str2.toLowerCase());
var str7 = console.log("Upper Case = ", str2.toUpperCase());




// Non-Primitive types: Object, Array, Function, Date, RegExp


console.log("\n----------- Non-Primitive types -----------\n");
console.log("\n----------- 1. Object -----------\n");
const person = {
    firstName: "John", lastName: "Doe", age: 25, salary: 180000,
    others: {
        skills: "Webdev",
        address: "Marathalli",
        phone: 77777777777,
        Company: "Google"
    }
};

console.log("\n----- 1. Print ----- \n");
console.log("The value of Object variable person is :- ", person);
console.log(person.firstName);
console.log(person.others);
console.log(person.others.skills);

console.log("\n----- 2. Update -----\n ");
console.log("Changes Skills = ", person.others.skills = "AI-Ml");

console.log("\n----- 3.  Delete -----\n ");
console.log("Delete Object = ", delete person.others.skills);



console.log("\n----------- 2. Array -----------\n");


var arry = [10, 20, 30, 40, 50];
console.log("The value of Array variable is :- ", arry);

const cars = ["Saab", "Volvo", "BMW"];
console.log("The value of Array variable cars is :- ", cars);

// Lenghth

console.log();
console.log("\n----- 1. Lenght ----- \n");
console.log();
var arrr = [2, 3, 4, 5, 9, 10, 11, 12, 13];
console.log("Lenght Of Array  ", arrr, " Is = ", arrr.length);
console.log();

// Conacatenation
console.log();
console.log("\n----- 2. Conacatenation -----\n ");
console.log();
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [4, 5, 6, 4, 2, 1, 3, 4];
console.log("Conacatenation Of array is = ", arr1.concat(arr2));
console.log();

// Push Pop
console.log("\n----- 3. Push & Pop -----\n ");
arr1.push(8);
console.log("After Push 8 =", arr1);
arr1.pop(8);
console.log("After Pop 8 =", arr1);
console.log();

// Unsift and Shift
console.log("\n----- 4. Unsift & Shift ----- \n");
arr1.unshift(18);
console.log("After unshift = ", arr1);

arr1.shift(18);
console.log("After shift = ", arr1);
console.log();


const date = new Date("2022-03-25");
console.log("The value of Date variable date is :- ", date);

const regex = /[a-zA-Z]/;
console.log("The value of RegExp variable regex is :- ", regex);

function greet() {
    console.log("Hello, welcome to the JavaScript data types demonstration!");
}
greet();





console.log("\n----- ** Practice Qestion ** ----- \n");

console.log("1. Print all elements of an array ");
var myarray = [10, 20, 30, 40, 50, 60];
console.log("Your Array is = ", myarray);

// Find the largest number in an array


console.log("\n2. Find the largest and smallest number in an array");
var largest = Math.max(...myarray);
var smallest = Math.min(...myarray);
console.log("Your array is = ", myarray);
console.log("Largest number in array is = ", largest);
console.log("Smallest number in array is = ", smallest);

console.log("\n3.suppose this [1,2,3,4,5,6] is an array write a code that will divide the array into parts");
var sarray = [1, 2, 3, 4, 5, 6];
let part1 = sarray.splice(0, sarray.length / 2); // First half
let part2 = sarray; // Remaining half
console.log(part1); // [1, 2, 3]
console.log(part2); // [4, 5, 6]

console.log("\n4.[1,2,3,4,5,6] this is an array .Write a program that will create an additioanl array from the preexisting array.");
var originalArray = [1, 2, 3, 4, 5, 6];
let newArray = originalArray.slice(2, 5);
console.log("Original Array:", originalArray); // [1, 2, 3, 4, 5, 6]
console.log("New Array (sliced):", newArray); // [3, 4, 5]

console.log("\n 5.Sort Array");
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before sort array = ", fruits1);
console.log("After sort array = ", fruits1.sort());

console.log("\n 6. Find the intersection of two arrays");
var one = [1, 2, 3, 4, 5]
var two = [6, 7, 8, 9, 5]
var intersection = one.filter(value => two.includes(value));
console.log(intersection);



console.log("\n-----------** Operators **-----------\n");


// JavaScript operators are symbols that are used to perform
// operations on operands.
console.log("Volvo " + 16 + 4);

// Unary Operator
console.log("\n----- Unary Operator -----\n ");
// increment and decrement 
var a = 5;
// Pre-increment and Post-increment
console.log("Pre-increment = ", ++a);
console.log("Post-increment = ", a++);
// Pre-decrement and Post-decrement
console.log("Pre-decrement", --a);
console.log("Post-decrement", a++);

// Arithmetic Operator
console.log("\n----- Arithmetic Operator -----\n ");

var a = 8, b = 2;

console.log("Addition = ", a + b);
console.log("Subtraction = ", a - b);
console.log("Multiplication = ", a * b);
console.log("Division = ", a / b);
console.log("Modules = ", a % b);


// Shift Operator (<<, >>)
console.log("\n----- Shift Operator -----\n ");

console.log("Shift Operator << = ", a << b);
console.log("Shift Operator >> =", a >> b);

// Relational Operators (>, <, >=, <=)
console.log("\n----- Relational Operator -----\n ");

console.log("a > b = ", a > b);
console.log("a < b = ", a < b);

// Bitwise Operators (&, |, ^) Work in Binary Value 
console.log("\n----- Bitwise Operator -----\n ");

console.log("a & b = ", a & b);
console.log("a | b = ", a | b);
console.log("a ^ b = ", a ^ b);

// Logical Operators (&&, ||, !)
console.log("\n----- Logical Operator -----\n ");

console.log("a > 2 && b < 5 = ", a > 2 && b < 5);
console.log("a < 2 || b > 1 = ", a < 2 || b > 1);
console.log("!(a == 5) = ", !(a == 5));

// Assignment Operators (=, +=, -=, *=, /=)
console.log("\n----- Assignment Operator -----\n ");

let c = 10;
console.log("C = ");
console.log("+= :- ", c += 5);
console.log("-= :- ", c -= 5);
console.log("*= :- ", c *= 5);
console.log("/= :- ", c /= 5);


// Ternary Operator (condition ? expr1 : expr2)
console.log("\n----- Ternary Operator -----\n ");

let result = (a > b) ? "a is greater" : "b is greater";
console.log(result);



console.log("\n--------------------------------------- \n");

 