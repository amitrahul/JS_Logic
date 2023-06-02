/*
    A common use of array/list shuffling is in a card game, 
    where the cards in the deck have to be randomly ordered.

            The Fisher-Yates shuffle is a well-known shuffling algorithm
*/

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  const arr = [1, 2, 3, 4, 5];
  shuffleArray(arr);
  console.log(arr);
  // [ 2, 3, 5, 1, 4 ] (varies)

  // Another way :-

  const shuffleArray1= (arr) =>
  [...Array(arr.length)]
    .map((_, i) => Math.floor(Math.random() * (i + 1)))
    .reduce(
      (shuffled, r, i) =>
        shuffled.map((num, j) =>
          j === i ? shuffled[r] : j === r ? shuffled[i] : num
        ),
      arr
    );
    console.log(shuffleArray1([1, 2, 3, 4, 5]));
    // [ 2, 4, 1, 3, 5 ] (varies)

/*
    This runs with O(n2) time complexity (quadratic), and could cause performance problems 
    for large arrays, but it is an elegant solution that works. 
    Also, unlike the first method, it doesn’t mutate the original array.
*/


//      alternative functional approach

const shuffleArray3 = (arr) => arr.sort(() => Math.random() - 0.5);
const arr1 = [1, 2, 3, 4, 5];
console.log(shuffleArray3(arr1));
// [ 5, 2, 4, 1, 3 ] (varies)

/* 
    As it uses sort(), it runs with a time complexity of O(n log n) and 
    has a better performance than the preceding method.

 */