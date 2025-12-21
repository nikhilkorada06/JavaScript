/**
 * spread operator
 * The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.  
 */

const arr1 = [1,2,3,4,5];

const arr2 =[10,11,12,13,14,15];

const comboArray = [0,...arr1,6,7,8,9,...arr2];

console.log(comboArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log({comboArray});