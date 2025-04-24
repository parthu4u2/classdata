console.log("\n--------------------- DAY 1 -----------------\n");
console.log("------------- This Is Javascript Variables -------------\n");
console.log("This is external file example\n");

// We can use three Keywords For javascript let, const, var for variable declare

const c = 'Hsello';
console.log("The value of constant c is :- ", c);

let l = 10;
console.log("The value of let l is :- ", l);
{
  let l = 15;
  // so let is block scoped 
}
var v = 5.8;
console.log("The value of variable v is :- ", v);

var v = 10;
console.log("The value of variable v is :- ", v);
// so var is function scoped

console.log("\n------------------------ Data Types --------------\n");

// javascript is dynamically typed, meaning variables can hold values of any type and types are determined at runtime.

// JavaScript, there are several data types, including:

// Primitive types: undefined, null, boolean, number, string, symbol

console.log("Primitive Datatypes :- \n");

var d;
console.log("The value of Undefined variable d is :- ", d);


var d = 10;
console.log("The value of Number variable d is :- ", typeof (d), d);
console.log("The Type of variable d is :- ", typeof (d));

var d = 10.94;
console.log("The value of Number variable d is :- ", typeof (d), d);

var d = true;
console.log("The value of Boolean variable d is :- ", typeof (d), d);

var d = false;
console.log("The value of Boolean variable d is :- ", typeof (d), d);

var d = "Hellow World";
console.log("The value of String variable d is :- ", typeof (d), d);

var d = Symbol('@');
console.log("The value of Symbol variable d is :- ", typeof (d), d);

var d = null;
console.log("The value of mull variable d is :- ", typeof (d), d);


var symbol1 = Symbol('foo');
var symbol2 = Symbol('foo');
console.log(symbol1 == symbol2);// it's not check datatypes 
console.log(symbol1 === symbol2);// it's check datatypes also

// var a=10;
// var k='10';
// console.log(a == k); // loose equality check
// console.log(a === k); // strict equality check


console.log();


var a = 10;
var b = '10';
console.log(a + b);
var str1 = "hello ";
var str2 = "what's Up!!!!";
console.log(str1 + "  " + str2);
var str3 = str1 + "   " + str2;
// console.log(str1.concat(str2))//concatenation
console.log("The length of str1 and str2 is: ", str1.length + str2.length);
console.log("The length of str1 and str2 is after space included: ", str3.length);





// Non-Primitive types: Object, Array, Function, Date, RegExp

console.log("\nNon-Primitive Datatypes :- \n");

const person = { firstName: "John", lastName: "Doe" };
console.log("The value of Object variable person is :- ", person);

const cars = ["Saab", "Volvo", "BMW"];
console.log("The value of Array variable cars is :- ", cars);

const date = new Date("2022-03-25");
console.log("The value of Date variable date is :- ", date);

const regex = /[a-zA-Z]/;
console.log("The value of RegExp variable regex is :- ", regex);

function greet() {
  console.log("Hello, welcome to the JavaScript data types demonstration!");
}
greet();





console.log("\n------------------ Practice Exercises ------------------\n")

console.log("1 Declare a variable named 'name' and assign your name to it. Then print a greeting using that variable.");
console.log();


var parth = "Good Mornig !";
console.log(parth);

console.log("\n------------------------------------------------------------");
console.log("2 Check the type of these values - 'One Piece',123,true,null,undefined, {name: 'Zoro'},[1, 2, 3]  \n");



// ("One Piece"
//  123
//  true
//  null
//  undefined
// { name: "Zoro" }
// [1, 2, 3] )

var d = "One Piece";
console.log(typeof (d), d);

var d = 123;
console.log(typeof (d), d);

var d = true;
console.log(typeof (d), d);

var d = null;
console.log(typeof (d), d);

var d;
console.log(typeof (d), d);

var d = { name: "Zoro" };
console.log(typeof (d), d);

var d = [1, 2, 3];
console.log(typeof (d), d);

console.log("\n------------------------------------------------------------");
console.log("3.Create a variable named 'age'. Assign a number to it and then reassign a string. What happens?");


var age = 25;
var age = "Twenty-five";

console.log(typeof (age), age);



console.log("\n------------------------------------------------------------");
console.log("4.Write a program to swap values of two variables");

var a = 10;
var b = 20;
console.log("Before Swapping a= " + a + " b= " + b);
var temp = a;
a = b;
b = temp;

console.log("After Swapping a= " + a + " b= " + b);

console.log("\n------------------------------------------------------------");
console.log("5.Declare three variables: city, country, and population,and log a sentence using all of them");

var city = "Ahmedabad";
var country = "India"
var population = 1000000;

console.log("Sentence = One city of " + country + " name is " + city + " and Population of this city " + population);



console.log("\n------------------------------------------------------------");
console.log("6.Code Café Menu, You're making a digital menu for a café. Create variables for: drinkName (string),price (number),isAvailable (boolean),Then print:The drink Latte costs $3.5 Available: true");



console.log("Cafe Menu");
var drinkName = "Latte";
var price = 3.5;
var isAvailable = true;
console.log("The drink " + drinkName + " costs $" + price + " Available: " + isAvailable);




console.log("\n------------------------------------------------------------");
console.log("7.Secret Code Validation You're building a secret login screen.Store the correct password and userInput.");
var correctPassword = "secret123";
var userInput = "secret123";
var check = userInput === correctPassword;
console.log("User entered password is correct or not = " + check);




console.log("\n------------------------------------------------------------");
console.log("8.let student1 = 'Harry'; let student2 = null; let student3 = undefined;let student4 = 'Draco';  Write a script that checks if the student variable is a real name or not assigned yet. typeof === string");
let student1 = "Harry";
let student2 = null;
let student3 = undefined;
let student4 = "Draco";



console.log("\n------------------------------------------------------------");
console.log("9.Output Check");
let heart = "❤️";
let numberOfHearts = "3";
console.log(heart + numberOfHearts);

console.log("\n------------------------------------------------------------");
console.log("10.Output Check");

console.log(0 == false);
console.log(0 === false);


console.log("\n------------------------------------------------------------");
console.log("11.Output Check");

let aa = "7";
let bb = true;
console.log(aa + bb);
console.log(aa * bb);

console.log("\n------------------------------------------------------------");
console.log("12.Output Check");

console.log(typeof "JavaScript");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

console.log("\n------------------------------------------------------------");



