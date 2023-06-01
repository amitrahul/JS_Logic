//   Approach 1 :-

    let obj = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: 'value4'
    };
    
    delete obj.prop1;
    delete obj.prop3;
    
    console.log(obj);  // Outputs { prop2: 'value2', prop4: 'value4' }

// Approach 2 :-  Object.assign() method 

    let obj1 = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: 'value4'
    };

    // use the Object.assign() method to create a new object with the desired properties removed.
    let newObj1 = Object.assign({}, obj1);
    delete newObj1.prop1;
    delete newObj1.prop3;
    
    console.log(newObj);  // Outputs { prop2: 'value2', prop4: 'value4' }


// Approach 3 : - In modern JavaScript (ES6) => Object.entries() and Object.fromEntries() methods 

/*
    use the Object.entries() and Object.fromEntries() methods
     to remove multiple properties from an object
*/

    let obj2 = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: 'value4'
    };
    
    let newObj = Object.fromEntries(
        Object.entries(obj2).filter(([key]) => key !== 'prop1' && key !== 'prop3')
    );
    
    console.log(newObj);  // Outputs { prop2: 'value2', prop4: 'value4' }

    /* 
        ->  Object.entries(obj2) creates an array of key-value pairs from obj2.
            Each pair is represented as an array [key, value]

       ->  Object.fromEntries() creates a new object from the filtered key-value pairs. 
           It takes an array of key-value pairs and converts it into an object.  
    */