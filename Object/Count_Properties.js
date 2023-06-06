//                              Count by the Properties of an Array of Objects

/*
    Need to count the number of items in an array that match a particular property?
     Using reduce on arrays can achieve the task with ease!
*/

const carsData =  [
    { manufacturer: "audi", model: "q8", year: "2019" },
    { manufacturer: "audi", model: "rs7", year: "2020" },
    { manufacturer: "ford", model: "mustang", year: "2019" },
    { manufacturer: "ford", model: "explorer", year: "2020" },
    { manufacturer: "bmw", model: "x7", year: "2020" },
  ];

  const countingElement = (arr,prop) =>
  arr.reduce((acc,cur)=>
    ((acc[cur[prop]] = ++acc[cur[prop]] || 1),acc),
  {}); 

console.log(countingElement(carsData,"manufacturer"));

/*
    ++prev[curr[prop]] || 1 increments the value at prev[curr[prop]] by 1 if 
    it exists or sets it to 1 if it doesn't exist yet. This counts the occurrences 
    of each unique value.

    const obj ={ manufacturer: "audi", model: "q8", year: "2019" }

    obj["audi"] = 20; or obj.audi = 20;

     console.log((++obj.audi)|| 1); // o/p  21
    => here obj has audi property that's why it increment it's value and then return
     that value

      console.log((++obj.audi123)|| 1); // o/p 1
     => here obj hasn't audi property that's why it doesn't increment it's value and then return
      output as 1

*/

//Note :
/**
 * if we are access obj property by string then we have to access through obj["propertyname"]
 *  like here we access cur["manufacturer"] which gives value of manufature key.
 * 
 * countingElement(carsData,"manufacturer")--> in this calling we are passing prperties in 
 * string form that's why we need to access like this .
 * 
 * const obj ={ manufacturer: "audi", model: "q8", year: "2019" }
 * 
 * obj.audi = 10; or obj["audi"] = 20; here we are adding property to obj by string or also
 * by direct property name
 * 
 */