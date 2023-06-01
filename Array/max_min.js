// Longhand : =>
   
   // Find the maximum number in an array

    const array1 = [3, 7, 1, 9, 2, 5];
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
    }
    }
    console.log(maxNumber);  // Output: 9

    
    // Find the minimum number in an array

    const array2 = [3, 7, 1, 9, 2, 5];
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
    }
    console.log(minNumber);  // Output: 1


//  Using Math.max() and Math.min()

    const array3 = [3, 7, 1, 9, 2, 5];

    const maximumNumber =  Math.max(...array3);
    const minimumNumber =  Math.min(...array3);
