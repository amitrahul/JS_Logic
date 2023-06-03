//                                  Remove Falsy Values

/*
    Falsy values include false, 0, '', null, undefined, and NaN.

    remove falsy values from an array using the filter() method
*/

const arr = [1, 2, 0, '', undefined, null, 3, NaN, false];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr); // [1, 2, 3]

/*
Boolean is passed as the callback function to filter(). The Boolean() function is a 
built-in function in JavaScript that returns true for truthy values and false for falsy values. 
By passing Boolean as the callback function, filter() will remove all falsy values from the array arr 
and return a new array filteredArr with only truthy values.
*/