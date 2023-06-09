/**
 * Problem Description
 *  Given an array of n integers and an integer k, rotate the array k times in clockwise order.
 * 
 * Input format :-
 *  There are three lines of input.
 *  First line contains integer n.
 *  Next line contains n space separated integers.
 *  Next line contains the value of k.
 * 
 *  Output format :-
 *  Print the rotated array.
 * 
 * Sample Input 1
    5
    1 2 3 4 5
    2

    Sample Output 1
    4 5 1 2 3

    Explanation 1
        After first rotation array will be 5 1 2 3 4

        After second rotation array will be 4 5 1 2 3

        Constraints
        1 <= n <= 100000
        1 <= element of array <= 100000
        0 <= k <= 100000
 */

        /**
     * @param {number} n
     * @param {number[]} arr
     * @param {number} k
     * @return {number[]}
 */


        function cyclicRotation(n, arr, k) {

            //      Approach # 01
            //      Try with O(n*k)
        
            //  while(k>0){
            //     const data = arr[n-1];  // 5  4
            //     // console.log(data);
            //     for(let j=n-1;j>0;j--){
            //       arr[j] = arr[j-1];
            //       // j=4 arr[4] = 4  3
            //       // j=3 arr[3] = 3  2
            //       // j=2 arr[2] = 2  1
            //       // j=1 arr[1] = 1  5
            //       // j=0 out of loop
        
            //       // [5,1,2,3,4] after 1st loop 
            //     //    0 1 2 3 4  index of array
            //     }
            //     arr[0] = data;
            //     // console.log(arr); 
            //     --k;
            //   }
            //   return arr;
        
            /***************************************************************************** */
            //      Approach # 02
            // try with O(n)
        
          // Create one new array to push the k times elements
          const updatedArr = [];
        //   console.log(arr);
          if(k>n){
            k = k%n;
          }
          for (let i = 0; i < k; i++) {
            //    Using array method
            // updatedArr.unshift(arr[n-1-i])
            //          or
            updatedArr[k-(i+1)] = arr[n-1-i] ; // 2 -> 9, 1 -> 5, 0 -> 4
          }
          // console.log(updatedArr);   // [4, 5,9]
        
          // push the remaning element to new array
          for (let i = 0; i < n - k; i++) {
            //  using array method
            // updatedArr.push(arr[i]);
            //        or
            updatedArr[k + i] = arr[i];
          }
          // console.log(updatedArr);   [4, 5, 1, 2, 3]
          return updatedArr;
        };

        const rotate = [1, 2, 3, 4, 5,9];
        console.log(cyclicRotation(6, rotate,10)); // [3, 4, 5, 9, 1, 2]