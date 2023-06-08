const isEven = num => num % 2 === 0;
                or
const isEven1 = value => !(value & 1);

/*
    if a number is even by performing a bitwise AND operation between the number and 1. 
    In binary, odd numbers have their least significant bit set to 1, while even numbers 
    have it set to 0. The expression value & 1 will evaluate to 0 for even numbers and 1 for 
    odd numbers.

    
    The ! operator is then used to invert the result. So, if num is even, the expression
     !(value & 1) will evaluate to true, indicating that the number is even.If num is odd, 
     the expression will evaluate to false, indicating that the number is not even.
*/