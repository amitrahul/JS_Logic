//                                      Null merge operator (???)

/*
    When the left operand is null or undefined, it returns the right operand. 
    Otherwise, it returns the operand on the left.
*/

const str = null ?? 'default string';
console.log(str);
// expected output: "default string"

const num = 0 ?? 42;
console.log(num);
// expected output: 0