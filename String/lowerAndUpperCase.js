/**           method created to convert a string into lower and upper case         */

const lowerCase = (c) => {
    const ascii = c.charCodeAt(0);
    return String.fromCharCode(ascii + 32);
  };
  
  const upperCase = (c) => {
    const ascii = c.charCodeAt(0);
    return String.fromCharCode(ascii - 32);
  };
  /*********************************************************************************/

  console.log(lowerCase("D")); // d
  console.log(upperCase("l")); // L
  
  let sim = "AIRtel";
  
  /* strings are immutable. This means that once a string is created, 
  its contents cannot be changed. */

  sim[0] = 'a';
  console.log(sim)  // AIRtel
  
  /** Converted string into Array form */
  const simArray = Array.from(sim);
  console.log(simArray) // ['A', 'i', 'r', 't', 'e', 'l']
  
  /*  Converted the Sring into lower case */
  
  for(let i=0;i<simArray.length;i++){
    if(simArray[i]>='A'&& simArray[i]<='Z'){
      simArray[i] = lowerCase(simArray[i])
    }
  }

  // console.log(simArray) // ['a', 'i', 'r', 't', 'e', 'l']
  // /** converted an array into string */
  // sim=simArray.join('')
  // console.log(sim); // airtel
  
  /** Converted an string into upper case */
  
  for(let i=0;i<simArray.length;i++){
    if(simArray[i]>='a'&& simArray[i]<='z'){
      simArray[i] = upperCase(simArray[i])
    }
  }

  // console.log(simArray)  //  ['A', 'I', 'R', 'T', 'E', 'L']
  //  sim=simArray.join('')
  // console.log(sim); // AIRTEL
  
  /** Converted lower to upper case and upper to lower case */
  
  for(let i=0;i<simArray.length;i++){
    if(simArray[i]>='a'&& simArray[i]<='z'){
      simArray[i] = upperCase(simArray[i])
    }
    else if(simArray[i]>='A'&& simArray[i]<='Z'){
      simArray[i] = lowerCase(simArray[i])
    }
  }
  
//   console.log(simArray)  //  ['a', 'i', 'r', 'T', 'E', 'L']
//    sim=simArray.join('')
//   console.log(sim); // airTEL


/***********************************************************************************/

/** Created method for upper and lower case conversion */
const lowerandUpperCase = (data) =>{
  const array = Array.from(data);
   for(let i=0;i<array.length;i++){
      if(array[i]>='a'&& array[i]<='z'){
        array[i] = upperCase(array[i])
      }
      else if(array[i]>='A'&& array[i]<='Z'){
        array[i] = lowerCase(array[i])
      }
    }
    return array.join('');
}

const phone = ["asus","SAMsung","Iphone"]
const phonedata =phone.join('');  //  asusSAMsungIphone
// const phneArr = Array.from(phonedata);
// console.log(phneArr);
//  ['a', 's', 'u', 's', 'S', 'A', 'M', 's', 'u', 'n', 'g', 'I', 'p', 'h', 'o', 'n', 'e']
console.log(lowerandUpperCase(phonedata))

/** created method for lower case conversion */
// data is passed in form of string
const lowerCaseConversion = (data) =>{
  const array = Array.from(data);
  for(let i=0;i<array.length;i++){
  if(array[i]>='A'&& array[i]<='Z'){
    array[i] = lowerCase(array[i])
  }
}
return array.join('');
}

console.log(lowerCaseConversion("CRICKET")) // cricket

/** created method for upper case conversion */
// data is passed in form of string
const upperCaseConversion = (data) =>{
  const array = Array.from(data);
  for(let i=0;i<array.length;i++){
    if(array[i]>='a'&& array[i]<='z'){
      array[i] = upperCase(array[i])
    }
  }
return array.join('');
}

console.log(upperCaseConversion("tennis")) // TENNIS