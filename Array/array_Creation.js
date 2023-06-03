//                  Create Array from Iterables

/*
    Array.from() is a built-in method that creates a new array from an 
    iterable object or an array-like object.

    This method can be used to convert various data structures such as 
    strings, Sets, and Maps into an array.
*/

// Converting String to an array
const str = "Rabi";
const arr = Array.from(str);
console.log(arr); // Output: ["R", "a", "b", "i"]

// Converting Set to an array
const set = new Set([1, 2, 3, 3, 4, 5]);
const arr1 = Array.from(set);
console.log(arr1); // Output: [1, 2, 3, 4, 5]