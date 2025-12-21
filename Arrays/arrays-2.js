/**
 * Array Methods- push and concat
 */

let fruits = ["Apple", "Banana", "Cherry"];
let vegetables = ["Carrot", "Potato", "Cabbage"];


// Using push() to add an element to the end of the fruits array
fruits.push("Orange");  
console.log(fruits);
console.log({fruits});



//using concat() to merge two arrays
// The concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.

let combo = fruits.concat(vegetables);

console.log(combo);
console.log({combo});

let combo2 = vegetables.concat(fruits);
console.log(combo2);    
console.log({combo2});

