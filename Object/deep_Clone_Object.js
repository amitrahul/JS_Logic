//                                          Deep Clone an Object

/*
    A deep clone of an object is a new object with a completely separate copy of all properties,
    including nested objects. This differs from a shallow clone, where only the first-level 
    properties are copied and nested objects are referenced rather than copied.

*/

/*                              Structured Clone

    The structured clone is a concept in JavaScript that refers to the process of creating 
    a deep clone of an object, including its nested objects and arrays, as well as 
    other complex data structures. The structured clone algorithm is used by several APIs 
    in JavaScript, such as the postMessage method for communication between window objects 
    (e.g. between a page and an iframe), the IndexedDB API for storing and retrieving data 
    in the browser, and the Service Workers API for background processing of network requests

    The structured clone algorithm works by recursively copying all properties of an object, 
    including nested objects and arrays, into a new object with the same structure and values. 
    It can handle a wide range of data types, including functions, dates, regular expressions, 
    arrays, and objects.

*/


const original = { a: 1, b: { c: new Date() } };

const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] =
        obj[key] instanceof Date
          ? new Date(obj[key].getTime())
          : deepClone(obj[key]);
    }
  }
  return clone;
};

const clone = deepClone(original);

console.log(clone);
// Output: {a: 1, b: {c: Tue Jun 04 2024 15:16:10 GMT+0530 (India Standard Time)}}

clone.b.c.setFullYear(2024);

console.log(original);
// Output: {a: 1, b: {c: Sun Jun 04 2023 15:17:35 GMT+0530 (India Standard Time)}}