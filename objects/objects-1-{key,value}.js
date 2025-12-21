/**
 * Objects --> {key: value}
 */

const obj = {
    name : "Nikhil", //javascript internally converts keys to a string
    age : 25 ,
    job  : "Student",
    courses : ["JavaScript", "Python", "Java"],
    "is verified": true
} 

console.log(obj.name); // "Nikhil"
console.log(obj["age"]); // 25      
console.log(obj.courses[0]); // "JavaScript"
console.log(obj.job);





//keys containing spaces must be accessed using bracket notation
//while uisng dot notation, it will throw an error
//while using bracket notation, you can use any string as a key
console.log(obj["is verified"]); // true
// console.log(obj.is Verified); // undefined //error //no spaces should be included.


console.log (obj[1]); //undefined.