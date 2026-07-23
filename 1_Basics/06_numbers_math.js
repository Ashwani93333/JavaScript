let num= 23.784;
console.log(num); // Output: 23.784

const num2 = new Number(45); // Creating a Number object
console.log(num2);

//methods of Number Object
console.log(num2.toString()); 

console.log(num2.toFixed(2)); // Output: "45.00" - Formats the number with 2 decimal places

let bigNumber = 10000;
console.log(bigNumber.toLocaleString('en-IN')); // Output: "10,000" - Formats the number with commas as thousands separators

/*

------------------------------Math Object------------------------------

The Math object is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions. It is not a constructor, so you cannot create instances of it. Instead, you can use its static methods and properties directly.

*/


console.log(Math.PI.toFixed(2)); // Output: 3.14 - The value of π (pi)

console.log(Math.E.toFixed(2)); // Output: 2.72 - The value of e (Euler's number)

console.log(Math.round(3.5)); // Output: 4 - Rounds to the nearest integer

console.log(Math.floor(3.9)); // Output: 3 - Rounds down to the nearest integer

console.log(Math.ceil(3.1)); // Output: 4 - Rounds up to the nearest integer

console.log(Math.sqrt(16)); // Output: 4 - Calculates the square root of a number

console.log(Math.pow(2, 3)); // Output: 8 - Calculates 2 raised to the power of 3     

console.log(Math.random()); // Output: 0.123456789 - Returns a random number between 0 and 1
