//                                  Optional Chaining

/*
        Optional chaining allows you to access nested properties without causing an error
         if one of the intermediate properties is null or undefined.
          It uses the ?. syntax to check if a property exists before accessing it.
*/

const obj = { 
    property1: { 
      property2: { 
        property3: 'Hello!' 
      } 
    } 
  };
  
  console.log(obj?.property1?.property2?.property3); // Hello!
  console.log(obj?.property1?.property2?.property4); // undefined