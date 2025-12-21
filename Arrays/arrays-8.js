/**
 * Destructuring an array means unpacking values from an array into distinct variables.
 * It allows you to extract values from an array and assign them to variables in a more concise way.
 */


//example 1
const arr = [1, 2, 3, 4, 5];

const [a, b, c] = [1,2,3];

console.log(a,b,c);




//example 2

const[x,y,z,...rest] = [1,2,3,4,5,6,7,8,9];;

console.log(x,y,z);
console.log(rest);




//example 3
const arr2 = [["html","css","js"],1,2,3,4,5];

const [courses , p] = arr2;

console.log(courses); // ["html", "css", "js"]
console.log(a); // 1

const [courses1,...q] = arr2;
console.log(courses); // ["html", "css", "js"]
console.log(q); // [1, 2, 3, 4, 5]



//example 4
//Swapping variables using destructuring
let x1 = 10;    
let y1 = 20;
[x1, y1] = [y1, x1];
console.log(x1); // 20
console.log(y1); // 10  