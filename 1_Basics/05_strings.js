let name1 = "ashwnai";
let age = 25;

//concatenation
let sentence = "My name is " + name1 + " and I am " + age + " years old.";
console.log(sentence); // Output: My name is ashwnai and I am 25 years old.

//for production level code, we can use template literals (backticks) for better readability and maintainability
let sentence2 = `my name is ${name1} and I am ${age} years old.`;
console.log(sentence2); 

//As Object form
const name2 = new String("   ashwnai   ");
// name2 = name2.toUpperCase();

//Frequent access methods of String Object
console.log(name2.toUpperCase()); // UpperCase method

console.log(name2.length); // Length proprty

console.log(name2.charAt(0)); // CharAt method

console.log(name2.indexOf("a")); // IndexOf method

console.log(name2.slice(0, 4)); // Slice method

console.log(name2.replace("ashwnai", "ash")); // Replace method

console.log(name2.trim()); // Trim method removes whitespace from both ends of a string

//Replace any sub part of the string with another string using replace method
let url = "https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md";
let newUrl = url.replace(".md", ".com");

console.log(newUrl); // Output: https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.com