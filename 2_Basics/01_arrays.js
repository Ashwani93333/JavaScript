//Arrays

//Using literal syntax
let arr1 = [1,23,4];

//usinq constructor syntax
let arr2 = new Array(1,2,3,4);

//Declare without elements
let arr3 = new Array(5); // Creates an array with 5 empty slots

// console.log(arr2);

//In Js array have non-fixed size and can contain elements of different data types
let arr4 = [1, "Hello", true, null, undefined, {name: "John"}, [1,2,3]];

// console.log(arr4[arr4.length-1]);

// ----------------------Array Methods----------------------

console.log(arr4.length); // Output: 7 - Returns the number of elements in the array

console.log(arr4.push(737)); // Output: 8 - Adds a new element to the end of the array and returns the new length
console.log(arr4.pop()); // Output: 737 - Removes the last element from the array and returns it

console.log(arr4.shift()); // Output: 1 - Removes the first element from the array and returns it
console.log(arr4.unshift("7894")); // Output: 7 - Adds a 7894 to the beginning of the array and returns the new length


//Iterate over array

for(let i =0; i<arr2.length; i++){
    console.log(arr2[i]);
}

//using For each method

arr2.forEach(function(data, index){
    console.log(`Index: ${index}, Value: ${data}`);
})


//using For of method

for(let data of arr2){
    console.log(data);
}