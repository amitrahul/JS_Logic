							clone an array in JavaScript

1. Spread Operator (Shallow copy)

	numbers = [1, 2, 3];
	numbersCopy = [...numbers];	

	numbersCopy.push(4);
	console.log(numbers, numbersCopy);
	// [1, 2, 3] and [1, 2, 3, 4]	

	nestedNumbers = [[1], [2]];
	numbersCopy = [...nestedNumbers];

	numbersCopy[0].push(300);
	console.log(nestedNumbers, numbersCopy);
	// [[1, 300], [2]]
	// [[1, 300], [2]]
	// They've both been changed because they share references

-->	This doesn’t safely copy multi-dimensional arrays. 
	Array/object values are copied by reference instead of by value.


2. 	for() Loop (Shallow copy)	

		numbers = [1, 2, 3];
 		numbersCopy = [];

	for (i = 0; i < numbers.length; i++) {
	  numbersCopy[i] = numbers[i];
	}

--->it’ll assign objects/arrays by reference instead of by value

3. while() Loop (Shallow copy)

	 numbers = [1, 2, 3];
		numbersCopy = [];
	   	i = -1;

		while (++i < numbers.length) {
		  numbersCopy[i] = numbers[i];
		}

--->it’ll assign objects/arrays by reference instead of by value

4. Array.map (Shallow copy)

	Array.map returns an array of the same length every single time.
		 numbers = [1, 2, 3];
		numbersCopy = numbers.map((x) => x);

--->it’ll assign objects/arrays by reference instead of by value

5. Array.filter (Shallow copy)

	This function returns an array, just like map, but it’s not guaranteed to be the same length
		numbers = [1, 2, 3];
		numbersCopy = numbers.filter(() => true);

--->it’ll assign objects/arrays by reference instead of by value		

6. Array.reduce (Shallow copy)

	 numbers = [1, 2, 3];

	 numbersCopy = numbers.reduce((newArray, element) => {
	  newArray.push(element);

	  return newArray;
	}, []);

--->it’ll assign objects/arrays by reference instead of by value

7. 	Array.slice (Shallow copy)

	slice returns a shallow copy of an array based on the provided start/end index you provide.

	If we want all the elements, don’t give any parameters : -
	numbers = [1, 2, 3, 4, 5];
	numbersCopy = numbers.slice();
	// [1, 2, 3, 4, 5]

--->it’ll assign objects/arrays by reference instead of by value	

8. JSON.parse and JSON.stringify (Deep copy)
	
	JSON.stringify() turns an object into a string.

	JSON.parse() turns a string into an object.

	nestedNumbers = [[1], [2]];
	numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

	numbersCopy[0].push(300);
	console.log(nestedNumbers, numbersCopy);

	// [[1], [2]]
	// [[1, 300], [2]]
	// These two arrays are completely separate!

	Note: This one safely copies deeply nested objects/arrays!

	working mechanism : -

		JSON.stringify(nestedNumbers) converts the nestedNumbers array into a JSON-formatted string
		 representation. In this case, it becomes '[[1],[2]]'.

		JSON.parse() is then used to parse the JSON-formatted string and create a new array from it.
		 Since JSON.parse() creates a new object based on the string representation, any nested 
		 arrays or objects within the original array will also be deeply copied.

9. Array.concat (Shallow copy)

	[1, 2, 3].concat(); // [1, 2, 3]
	[1, 2, 3].concat([]); // [1, 2, 3]

--->it’ll assign objects/arrays by reference instead of by value

10. Array.from (Shallow copy)
	
	This can turn any iterable object into an array. Giving an array returns a shallow copy.

	numbers = [1, 2, 3];
	numbersCopy = Array.from(numbers);
	// [1, 2, 3]			 

--->it’ll assign objects/arrays by reference instead of by value