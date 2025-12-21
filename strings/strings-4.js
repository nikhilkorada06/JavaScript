/**
 * string.includes()
 */

const str = 'HEllo World!';

// The includes() method checks if a string contains a specified substring and returns true or false.

console.log(str.includes('World'));

if(str.includes('Hello')) {
    console.log('The string contains "Hello"');
}   
else {
    console.log('The string does not contain "Hello"');
}




// using for of loop

const vowels = "aeiou";

for(let x of str)
{
    if(vowels.includes(x)) {

        console.log(`${x} is a vowel, Presrent at index ${str.indexOf(x)}`);
    }
}

let flag = false;

for (let x of str.toLowerCase())  // Convert to lowercase to check for vowels
{
    if(vowels.includes(x)){
        flag = true;
        break;
    }
    else{
        flag = false;
    }
}
if(flag) {
    console.log('The string contains at least one vowel');
}
else {
    console.log('The string does not contain any vowels');
}