//  Reversing a string can be easily achieved using split then combine reverse and join method

const reverse = str => str.split("").reverse().join("");

// using for loop : -

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      const ch = str[i];
      reversed += ch;
    }
    return reversed;
  };
  const revers = reverseString('javascript');
  console.log(revers); // tpircsavaj