//                              Flattening an Array

const multiDimensionalArray = [[1, 2], [3, 4, [5, 6]]];
const flattenedArray = multiDimensionalArray.flat(2);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


/*
    multiDimensionalArray is a two-dimensional array with two nested arrays. By calling 
    the flat() method with a depth of 2, all sub-array elements are concatenated into a 
    single flat array. The resulting flattenedArray contains all the elements of the 
    original multi-dimensional array in a single dimension.
*/