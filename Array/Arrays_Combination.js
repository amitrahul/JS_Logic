// Longhand : =>
    
        let array1 = [10, 20, 30];
        let array2 = [40, 50, 60];
        let mergedArray = [];

        for (let i = 0; i < array1.length; i++) {
          mergedArray.push(array1[i]);
        }

        for (let i = 0; i < array2.length; i++) {
          mergedArray.push(array2[i]);
        }

        console.log(mergedArray);  

        // Output: [10, 20, 30, 40, 50, 60]

// Shorthand  :  =>

      // Approach 1 : Using Concat method  =>
             
           let array3 = [10, 20, 30];
           let array4 = [40, 50, 60];
           let mergedArray1 = array3.concat(array4);

      // Approach 2 : Using Spread Operator =>
      
          let array5 = [10, 20, 30];
          let array6 = [40, 50, 60];
          let mergedArray2 = [...array5, ...array6];

      // Approach 3 : Using reduce method  =>
      
            let array7 = [10, 20, 30];
            let array8 = [40, 50, 60];
            let mergedArray3 = array7.reduce((acc, val) => acc.concat(val), array8);

            console.log(mergedArray);  // Output: [40, 50, 60, 10, 20, 30]

 
/*                              Different ways of merging multiple arrays                      */

const ar1= [1,2,3,4,5,6];
const ar2 = [4,5,6,7,8,9];
//  merge but don't remove duplications
const ar3 = ar1.concat(ar2);
console.log(ar3);
 //   [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]

const ar4 = [...ar1,...ar2];
console.log(ar4);
//  [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]

// merge with remove duplications
const ar5 =[...new Set(ar1.concat(ar2))];
console.log(ar5);
//  [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ar6= [...new Set([...ar1,...ar2])];
console.log(ar6);
//  [1, 2, 3, 4, 5, 6, 7, 8, 9]