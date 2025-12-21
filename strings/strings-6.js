/**
 *  sub strings
 */

const str = "Hello, World!";

// substring() method

console.log(str.substring(0, 5)); // "Hello"

console.log(str.substring(7)); // "World!"

console.log(str.substring(7, 12)); // "World"


/**
 *  string.trim()
 */

const strWithSpaces = "   Hello, World!   ";

console.log(strWithSpaces.trim()); // "Hello, World!"
console.log(strWithSpaces.trimStart()); // "Hello, World!   "
console.log(strWithSpaces.trimEnd()); // "   Hello, World!"
console.log(strWithSpaces.trim().substring(0, 5)); // "Hello"


/**
 *  string.split()
 */

const csv = "apple,banana,cherry";
const fruits = csv.split(","); // ["apple", "banana", "cherry"]
console.log(fruits[0]);

/**
 * slice() method
 */

console.log(str.slice(1,-1)); // "Hello"
console.log(str.slice(7)); // "World!"