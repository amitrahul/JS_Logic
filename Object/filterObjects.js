//                                  Filter Duplicate Objects From an Array
/*
              1.  Only keep first object in array with property value

    To filter duplicate objects from an array by a property in JavaScript, 
    use the filter() method to filter out elements that are not the first in the array 
    having the property value.
*/

const arr = [
    {
      name: 'John',
      location: 'Los Angeles',
    },
    {
      name: 'Kate',
      location: 'New York',
    },
    {
      name: 'Mike',
      location: 'New York',
    },
  ];

  const unique = arr.filter((ele,i) => 
(arr.findIndex(obj => obj.location === ele.location)===i))

console.log(unique) // [{name: 'John', location: 'Los Angeles'},{name: 'Kate', location: 'New York'}]


/*      2. Filter an array based on another array and also add properties from another array

    To filter  large_array which contains all data and small_array have small data,
    we are using map method to store element in array and find method which filter
    large array based on some condition and return filtered element.

    This concept is used to add product in the cart.

*/


const product = [
    {
   category : "Fashion",
   
   name : "GREY DOUBLE BUTTON BLAZER",
   qty :1,
   _id:  "z4sLtEcMpzabRyfx"
    },
    {
     category: "Books",
   
   name: "Thinking, Fast and Slow",
   qty:2,
   _id : "y4sLtEcMpzabRyfx"
    }
   ]

   const product_list = [
    {
      category : "Fashion",
      cost : 75,
      name : "GREY DOUBLE BUTTON BLAZER",
      rating :  4,
      _id:  "z4sLtEcMpzabRyfx"
      },
      {
        category: "Books",
      cost: 15,
      name: "Thinking, Fast and Slow",
      rating : 5,
      _id : "y4sLtEcMpzabRyfx"
      },
      {
        category: "Books1",
      cost: 151,
      name: "Thinking",
      rating : 2,
      _id : "y4sLtEclpzabRyop"
      }

  ]

  const cart = product.map
(item => ({...item,...product_list.find(product => product._id === item._id)}));

console.log(cart); 
/*
o/p : -
  [{
    category: "Fashion"
    cost: 75
    name: "GREY DOUBLE BUTTON BLAZER"
    qty: 1
    rating: 4
    _id: "z4sLtEcMpzabRyfx"
},
{
    category  : "Books"
    cost  : 15
    name   : "Thinking, Fast and Slow"
    qty  : 2
    rating  : 5
    _id  : "y4sLtEcMpzabRyfx"
}

]
*/


