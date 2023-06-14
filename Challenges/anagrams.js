/** Given two strings, return true if they are anagrams of one another */

/* n “anagram” of a “string” is another character string containing the same characters, 
only the order of the characters can be different. For example, “abcd” and “dabc” are 
anagrams of each other.  */

const isAnagrams = (data1,data2) =>{
    data1= data1.split('').sort().join('');
    data2= data2.split('').sort().join('');

    return data1 === data2;
}