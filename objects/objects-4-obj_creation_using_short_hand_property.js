/**
 * Short Hand
 */

//Short hand property is a property used to create obj easily




const name="Nikhil";//string;
const age = 19 ;//number

console.log({name: name , age : age});

//Like this when key name and value name is same we can create obj simply using this property

console.log({name,age});//object //using short hand property






//Doing same thing using functions

function createObj(name , age ){
    return {
        name, //name : name 
        age   // age : age 
    }
}

console.log(createObj("Nikhil",19));
