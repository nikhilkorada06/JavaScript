/**
 * split and join methods
 */

const askUser = require("readline-sync");

const str = askUser.question("Enter the string to check : ");



//split method 

//split() method basicallu converts a string into an array of characters
// and join() method converts an array into a string



// Check if a string is a palindrome

const arr = str.split("");

console.log(arr); // ["m", "a", "d", "a", "m"]

console.log(arr.reverse());

if (arr.join(arr === arr.reverse())) {
    console.log("The string is a palindrome");
}
else {
    console.log("The string is not a palindrome");
}