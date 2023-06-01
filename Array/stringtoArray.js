//  split method to convert a string to an array in JavaScript

let string = "apple,banana,orange";
let array = string.split(",");
console.log(array);  // prints ["apple", "banana", "orange"]



// shorthand method   =>

let string1 = "apple,banana,orange";
let array1 = [...string.split(",")];
console.log(array1);  // prints ["apple", "banana", "orange"]