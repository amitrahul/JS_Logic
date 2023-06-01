/*
    Null is a primitive type in JavaScript that represents an empty value. 
    When you set a variable to null, it has no value. 
    Contrarily, undefined means that a variable has been declared but has not yet been assigned a value.
*/

let message;
console.log(message === undefined); // true

message = null;
console.log(message === null); // true