/**
 * Object Methods
 */

const obj  = {
     
    name : "Nikhil",
    age  : 19,
    city : "Srikakulam"
}




//Entries  --> Key value pairs as individual arrays present in a big array

const entries = Object.entries(obj);

console.log(entries);


console.log(" ");






//Keys --> returns an array containing keys of that object

const keys =Object.keys(obj);
console.log(keys);   //returns an array containing all keys 
console.log(keys[0]);



console.log("");






//Values --> returns an array containing all values of keys present in that object

const values = Object.values(obj);
console.log(values);