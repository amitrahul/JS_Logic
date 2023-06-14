/** Finding maximum in array */

//  Approach 1

function maxInArray(n, arr) {
    let max= 0 ;
    for(let i= 0 ;i<n ;i++){
       max =  arr[i]> max ?  arr[i] : max;
    }
    return max;
}

//  APPROACH 2 : (Using sort method )
function maxInArray(n, arr) {
   return arr.sort((a,b) => a-b).pop();
}