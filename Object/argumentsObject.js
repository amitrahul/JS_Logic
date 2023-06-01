/*
        Based on the number of named arguments in the function definition,
        the length property of a function returns the number of arguments that
        the function expects to receive.

  */

        function myFunction(a, b, c) {
            // function body
        }
        
        console.log(myFunction.length);  // Output: 3

  /*
        The parameters passed to a function are stored in an object called an argument, 
        which looks like an array. Using the length property of the argument object,
        you can find out how many arguments were passed to the function.
  */    

        function myFunction(a, b, c) {
            console.log(arguments.length);  // Output: 3
          }
          
          myFunction(1, 2, 3);

/*
        Due to the fact that the objectsarguments are not real arrays, 
        not all array methods are accessible. 
        Use the Array.from() function to turn the arguments object into an actual array 

        now, argsArray is a regular array that you can use array methods on, 
        such as forEach(), map(), filter(), and others.
*/

            function myFunction() {
                const argsArray = Array.from(arguments); 
                console.log(argsArray);
            }
            
            myFunction('apple', 'banana', 'cherry');

        // o/p : ['apple', 'banana', 'cherry']


// ES6 Feature : =>  Using rest parameters

/*
    it's more common to use the rest parameters syntax to capture function arguments as an array

    The rest parameters syntax achieves the same result of converting function arguments into an array, 
    and it is more concise and widely supported in modern JavaScript environments.
*/

            function myFunction(...args) {
                console.log(args);
                }

                myFunction('apple', 'banana', 'cherry');

