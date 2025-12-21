 /**
  * indexOf method
  */

 //It returns the index of the first occurrence of a specified value in a string, or -1 if not found.
const str = 'Hello World!';

console.log(str.indexOf('llo'));
console.log(str.indexOf(' ')); 
console.log(str.indexOf('z')); // -1, not found

//To Start Searching from a Specific Index

console.log(str.indexOf('l', 3)); // starts searching from index 3