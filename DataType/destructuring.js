/**                 Array Destructuring Assignment         */

/** Array destructuring allows you to extract individual elements from an array 
 * and assign them to variables. 
 * 
 * */
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

/**  skip elements by leaving gaps between commas: */
const [, , c] = [1, 2, 3];
console.log(c); // 3

/**                 Object Destructuring Assignment         */

const { prop0, prop2 } = { prop0: 'foo', prop2: 'bar' };
console.log(prop0); // 'foo'
console.log(prop2); // 'bar'

/**      also use aliases to rename properties: */
const { prop1: newProp1, prop2: newProp2 } = { prop1: 'foo', prop2: 'bar' };
console.log(newProp1); // 'foo'
console.log(newProp2); // 'bar'


/** Using Rest Parameters with Object Destructuring */

/** With the rest syntax (...), collect the remaining properties of an object into a new object.
 *  This is useful when we want to extract specific properties while keeping the rest 
 * of the object intact:
 * 
 *  */

const { prop1, ...rest } = { prop1: 'foo', prop2: 'bar', prop3: 'baz' };
console.log(prop1); // 'foo'
console.log(rest); // { prop2: 'bar', prop3: 'baz' }