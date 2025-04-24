console.log("\n--------------------- DAY 3 -----------------\n");

console.log("----------- Conditional Statement  -----------\n");


// If Statement
console.log("\n----- 1.  If Statement -----\n");

var number = 5;

if (number > 0) {
    console.log("The number is positive.");
}


// If-Else Statement
console.log("\n----- 2.  If-Else Statement -----\n");

var number = -3;

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}


// write a program that will check which number is even or odd.
var number = 10;
if (number % 2 == 0) {
    console.log("Number is even...");
}
else {
    console.log("Number is odd...");
}


// If-Else If-Else Statement
console.log("\n----- 3.  If-Else If-Else Statement -----\n");

var number = 0;

if (number > 0) {
    console.log("The number is positive.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}

// Write a program that prints the grade based on marks:
// A: 90 and above
// B: 70-89
// C: 50-69
// F: below 50
var number = 99;

if (number >= 90) {
    console.log("Grade = A");
}
else if (number >= 70) {
    console.log("Grade = B");
}

else if (number >= 50) {
    console.log("Grade = C");
}
else {
    console.log("Grade = F");
}

// Write a program to find the largest among three numbers.
var a = 10;
var b = 5;
var c = 20;

if (a > b) {
    if (a > c) {
        console.log("A is the largest");
    }
    else {
        console.log("C is the largest");
    }
}
else {
    if (b > c) {
        console.log("B is the largest");
    }
    else {
        console.log("C is the largest");
    }
}

// Secret Password Checker Ask the user for a password and Check: 
// If the password is "OpenSesame", print "Access Granted"
// If it's anything else, print "Access Denied"

var pwd = "OpenSesame";
if (pwd == "OpenSesame") {
    console.log("Access Granted ");
} else {
    console.log("Access Denied ");
}

// FizzBuzz but Spicy!
// For numbers from 1 to 30:
// If divisible by 3 -> print "Fizz"
// If divisible by 5 -> print "Buzz"
// If divisible by both -> print "FizzBuzz"
//If divisible by 7 print "Thala for a reason"
// Otherwise → just print the number

var number = 15;

if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
}
else if (number % 3 == 0) {
    console.log("Fizz");
} else if (number % 5 == 0) {
    console.log("Buzz");
}
else if (number % 7 == 0) {
    console.log("Thala for a reason");
}
else {
    console.log("Number = ", number)
}


//  Switch Case Statement
console.log("\n----- 4. Switch Case Statement -----\n");


var color = "red";

switch (color) {
    case "red":
        console.log("You selected red.");
        break;
    case "blue":
        console.log("You selected blue.");
        break;
    default:
        console.log("Unknown color.");
}

// Write a program that prints the name of the day based on a number (1-7).

var day = 1;

switch (day) {
    case 1:
        console.log("Today is Sunday ...");
        break;
    case 2:

        console.log("Today is Monday ... ");
        break;
    case 3:

        console.log("Today is Tuesday ... ");
        break;
    case 4:

        console.log("Today is Wednesday ... ");
        break;
    case 5:

        console.log("Today is  Thursday ... ");
        break;
    case 6:

        console.log("Today is  Saturday ...");
        break;
    case 7:

        console.log("Today is  Friday ...");
        break;
    default:
        console.log("Unknown Day ...");
}




// While Loop
console.log("\n----- 5. While Loop -----\n");
var i = 0;

while (i < 5) {
    console.log("Count: " + i);
    i++;
}


// Do-While Loop
console.log("\n----- 6. Do-While Loop -----\n");


var i = 0;

do {
    console.log("Count: " + i);
    i++;
} while (i < 5);


// For Loop  
console.log("\n----- 7. For Loop -----\n");

for (var i = 0; i < 5; i++) {
    console.log("Count: " + i);
}

const person = {
    name: "Luffy",
    age: 19,
    occupation: "Pirate",
    role: "Captain"
}

const crew = ["Zoro", "Sanji", "Nami", "Brook", "Chopper", "Jimbei", "Franky"];
// for in- it is used to iterate over an iterable objects or values
for (let key in person) {
    console.log(`${key} :  ${person[key]} `);
}

// for of 
for (let member of crew) {
    console.log(member);
}

// for each 
crew.forEach(member => {
    console.log(member.toUpperCase());
});


/*
*
* *
* * *
* * * *
*/

console.log();
var rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }

var i = 1;
var rows = 5;
while (i <= rows) {
    let pattern = "";
    var j = 1;
    while (j <= i) {
        pattern += "* ";
        j++;
    }
    console.log(pattern);
    i++;
}
//  Use a loop to add up all numbers from 1 to 100 and print the total
var total = 0;
for (let i = 0; i <= 100; i++) {
    total += i;
}
console.log("Total is 1 to 100 = ", total);








// Ternary Operator (Conditional Operator)
console.log("\n----- 8. Ternary Operator -----\n");

var age = 18;

var message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);

console.log("\n--------------------------------------- \n");






// Sum of First N Natural Numbers
// Write a program using a for loop that calculates the sum of the first n natural numbers

var n = 10; 
var sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
    }
console.log("Sum of first " + n + " natural numbers is: " + sum);



// Factorial Calculator
// Write a JavaScript function that returns the factorial of a number  

function factorial(num) {
     let result = 1;
  
     for (let i = 1; i <= num; i++) {
      result *= i;
    }
  
     return result;
  }
  
var number = 5; 
  console.log("Factorial of " + number + " is: " + factorial(number));


// Reverse a Number
// Take an input number and reverse it using a loop. Example: 1234 → 4321 

var num = 1234; 
var reversed = 0;

while (num > 0) {
  let lastDigit = num % 10; 
  reversed = reversed * 10 + lastDigit; 
  num = (num - lastDigit) / 10; 
}

console.log("Reversed number: " + reversed);
 


// Count Vowels in a String
// Write a program to count the number of vowels in a given string using a loop and if condition. 



var str = "Hello World";  
var count=0;
 for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    count++;
  }
}

console.log("Number of vowels: " + count);



// Palindrome Number
// Check whether a given number is a palindrome. Example: 121 → Palindrome, 123 → Not a palindrome. 
var num = 121;  
var originalNum = num;  
var reversed = 0;

 while (num > 0) {
  var lastDigit = num % 10;  
  reversed = reversed * 10 + lastDigit;  
  num = (num - lastDigit) / 10;  
}

 if (originalNum === reversed) {
  console.log(originalNum + " is a Palindrome.");
} else {
  console.log(originalNum + " is Not a Palindrome.");
}





// Find the GCD of Two Numbers
// Write a program using a loop to calculate the Greatest Common Divisor (GCD) of two numbers.

// var a = 56; 
// var b = 98; 

// while (a !== b) {
//   if (a > b) {
//     a = a - b; 
//   } else {
//     b = b - a; 
//   }
// }

// console.log("GCD is: " + a);



//  Armstrong Number
// Check if a number is an Armstrong number. (e.g., 153 = 1³ + 5³ + 3³) 

var num = 153;  
var originalNum = num;  
var sum = 0;
 
while (num > 0) {
  var lastDigit = num % 10; 
  sum += lastDigit * lastDigit * lastDigit;  
  num = (num - lastDigit) / 10;  
}

if (sum === originalNum) {
  console.log(originalNum + " is an Armstrong Number.");
} else {
  console.log(originalNum + " is Not an Armstrong Number.");
}



//     1
//    121
//   12321
//  1234321
// 123454321
var rows = 5; 
for (var i = 1; i <= rows; i++) {
  var str = ""; 

 
  for (var j = 1; j <= rows - i; j++) {
    str += " ";
  }
 
  for (var k = 1; k <= i; k++) {
    str += k;
  }

 
  for (var l = i - 1; l >= 1; l--) {
    str += l;
  }

  console.log(str);  
}

 

// Sum of Digits Until One Digit Remains
// Keep summing the digits of a number until you get a single digit.

// Example: 987 → 9+8+7=24 → 2+4=6

var num = 987;  

while (num >= 10) {  
  var sum = 0;
    
  while (num > 0) {
    var lastDigit = num % 10;  
    sum += lastDigit;  
    num = (num - lastDigit) / 10; 
  }
  
  num = sum;                     
}

console.log("Single digit result: " + num);



//    *
//   ***
//  *****
//   ***
//    *


var rows = 3;  

 for (var i = 1; i <= rows; i++) {
  var str = ""; 
  
   for (var j = rows - i; j > 0; j--) {
    str += " ";
  }
  
   for (var k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  
  console.log(str);
}

 for (var i = rows - 1; i >= 1; i--) {
  var str = ""; 
  
   for (var j = rows - i; j > 0; j--) {
    str += " "; 
  }
  
   for (var k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  
  console.log(str);
}
  
   
// Count Frequency of Each Character in a String
// Use a loop and object to store how many times each character appears.

// var str = "hello world";  
// var frequency = {};  

// for (var i = 0; i < str.length; i++) {
//   var char = str[i];
//   frequency[char] = (frequency[char] || 0) + 1; 
// }

// console.log(frequency);



// Check whether a 3x3 matrix is a magic square (rows, columns, diagonals all add up to the same number