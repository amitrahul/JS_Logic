//                          Compare Objects

/*
    Javascript behaves in mysterious ways when comparing objects. 
    Comparing objects with the === operator checks only the reference of the objects,
     so the following code always returns false:
*/

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = {a :1, b:2, c:3}

const result = obj1 === obj2; 
console.log(result); //false

/*
    To solve this very issue, you can create a deep comparison function:
*/

const isEqual = (a,b) => JSON.stringify(a) === JSON.stringify(b);

console.log(isEqual(obj1,obj2)); //True
console.log(isEqual(obj1,obj3)); //False


/*                                   works with arrays too                            */

const arr1 =[4,5,6,7]
const arr2 = [4,5,6,7]
console.log(arr1===arr2)   // false
console.log(isEqual(arr1,arr2));  // true