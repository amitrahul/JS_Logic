//  split method to convert a string to an array in JavaScript

let string = "apple,banana,orange";
let array = string.split(",");
console.log(array);  // prints ["apple", "banana", "orange"]



// shorthand method   =>

let string1 = "apple,banana,orange";
let array1 = [...string.split(",")];
console.log(array1);  // prints ["apple", "banana", "orange"]

// Without using split method

const stringtoArray = (data) => {
    let arr = [];
    let splitdata = "";
    for (let i = 0; i <= data.length; i++) {
      if (data[i] === " " || i === data.length) {
        arr.push(splitdata);
        splitdata = "";
      }
      splitdata += data[i];
    }
    return arr;
  };
  
  console.log(stringtoArray(`Javascript language`)); // ['Javascript', ' language']