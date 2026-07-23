let names = ["John", "Jane", "Alice", "Bob"];
let surnames = ["Doe", "Smith", "Johnson", "Williams"];

//add last (combine) surnames array to names array
names.push(surnames);
console.log(names);

//accessing elements of surnames array using names array
console.log(names[4][0]); // Output: Doe


//Concatenation of arrays
let combinedArray = names.concat(surnames); // .concat() method makes new array by combining two or more arrays
console.log(combinedArray);


//Production level code, we can use spread operator to combine arrays
let combinedArray2 = [...names, ...surnames]; // add multiple arrays using (, ...)
console.log(combinedArray2);