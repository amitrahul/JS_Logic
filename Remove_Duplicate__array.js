First Method :  Using Set : =>
    The Set data structure only includes different members from orignal array since the set data structure automatically 
    eliminates duplicate values.
    
        const arr = [1,2,3,4,5,6,5,4,3]
        const uniqueArray  = [...new set(arr)]
        
    Note : -
        new Set(arr) creates a new Set object and initializes it with the elements from the arr array
        [...new Set(arr)] uses the spread operator ... to spread the unique elements from the Set object into a new array. 
        This creates a new array with only the unique values from the arr array.
    
 2nd method :  Using HashMap : =>
       const arr = [1,2,3,4,5,6,5,4,3]
       const hashMap = Object.create(null);
       const uniqueArray = [];
     
         for(const value of arr){
             if(!hashMap[value]){
                hashMap[value] = true; // Add the value to hashmap
                uniqueArray.push(value);
                }
             }
         
         
   Note :
    Object.create(null) creates a new object that doesn't have the usual properties and methods inherited from Object.prototype.
    This means that hashMap is a plain object with no built-in properties or methods like toString() or hasOwnProperty().
    The null parameter passed to Object.create() ensures that the created object doesn't have a prototype chain. 
    As a result, it doesn't inherit any properties or methods from its prototype.
