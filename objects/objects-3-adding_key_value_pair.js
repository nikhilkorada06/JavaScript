/**
 * Adding a key value pair into a object
 */



const askUser = require ("readline-sync");
const key = askUser.question("What do you wanna know about user (Name / age / state / city) ??? \n" );
const courses = askUser.question("What course do u wanna learn : ");


const person ={
    Name : "Nikhil",
    Age  :  19,
    [courses] : "Course not available"
}


//adding key-value pairs into object

person.State = "AndhraPradesh";
person.City="Vishakapatnam";


console.log(person[key]); //Key is taken from the user and taken as a string so no needof quotes 
//If we use quotes it will search for a key named key in that particular object.
//If we ask for a key that was not present in that object it will return undefiend
console.log(person[courses]);

console.log(person);
console.log({person});