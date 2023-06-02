//                  Check if Two Arrays Contain the Same Values

/*
        This is a problem of ensuring that two arrays contain the same elements (in any order)
         and that these elements occur the same number of times in both arrays.
*/

// Using For loop :-

const areEqual = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
      for (const num of arr1) {
        if (!arr2.includes(num)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 1, 2];
  const arr3 = [1, 2, 3];
  console.log(areEqual(arr1, arr2)); // true
  console.log(areEqual(arr1, arr3)); // false

  
  // Using the Array sort() and join() methods :-

  const equalCase = (arr1,arr2) => (arr1.sort().join('') === arr2.sort().join(''));

   console.log(equalCase([2,9,5,1,7],[9,5,2,1,7])) // true