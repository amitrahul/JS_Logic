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

      Approach 2 : Using Spread Operator =>
      
          let array1 = [10, 20, 30];
          let array2 = [40, 50, 60];
          let mergedArray = [...array1, ...array2];

      Approach 3 : Using reduce method  =>
      
            let array1 = [10, 20, 30];
            let array2 = [40, 50, 60];
            let mergedArray = array1.reduce((acc, val) => acc.concat(val), array2);

            console.log(mergedArray);  // Output: [40, 50, 60, 10, 20, 30]
