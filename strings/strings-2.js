/**
 * Strings Methods
 * charAt()   |  charCodeAt() 
 */

const str = 'Hello World!';

// charAt() method -- takes a number and gives the character at that index 

console.log(str.charAt(3));


// charCodeAt() method -- takes a number and gives the ASCII code value of the character at that index

console.log(str.charCodeAt(0));
console.log(str.charCodeAt()); //by default it gives the ASCII code value of the first character


console.log(`The ASCII code value of ${str.charAt()} is ${str.charCodeAt()}`);
console.log(`The ASCII code value of ${str.charAt(3)} is ${str.charCodeAt(3)}`);


//  [ String.fromCharCode(enter character code  here) ] --> this gives the character of a given ascii code.