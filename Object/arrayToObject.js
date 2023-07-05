/**
 *  * Convert array to object
 *
 * in this process it clone whole first array then after
 * it will replace whole clone array to second array
 */

//* 1.only clone the first array
let x = [10, 20, 30, 40, 50, 60, 70];
let y = [5, 6, 7, 8, 9];
let z = { ...a };
// {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, 6: 70}

//* 2.clone first array then that value is replaced by 2nd array
let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8, 9];
let c = { ...a, ...b };
console.log(c);
// {0: 5, 1: 6, 2: 7, 3: 8, 4: 9}

//* 3.clone first array and only replace value of array1 upto size of second array
let e = [10, 20, 30, 40, 50, 60, 70];
let f = [5, 6, 7, 8, 9];
let g = { ...a, ...b };
console.log(g);
// {0: 5, 1: 6, 2: 7, 3: 8, 4: 9, 5: 60, 6: 70}
