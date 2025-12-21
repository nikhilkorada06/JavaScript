/**
 * sort
 */

// Sorts an array in place and returns the sorted array.

const numbers = [4, 2, 5, 1, 3];;

numbers.sort(); // sorts the array in ascending order

console.log(numbers);

console.log("   ");

const alphabets = ['b','e','d','a','c'];

alphabets.sort(); // sorts the array in alphabetical order

console.log(alphabets);

console.log("   ");




//during sorting it converts numbers into strings and checks 

const num = [1,2,51,32,4,56,6,22,34];

num.sort();

console.log(num);

console.log("   ");





//solving the above problem using compare function

num.sort(ascendingOrder = (a,b) => {return a-b;});

console.log(num);

console.log("   ");

num.sort(descendingOrder = (a,b) => {return b-a;});

console.log(num);

console.log({num});


