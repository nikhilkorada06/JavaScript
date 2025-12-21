/**
 * First Class Functions
 *  1. Function can be assigned to a variable.
 *  2. Function can be passed as an Argument to another function.
 *  3. Function can be returned by another function.
 */

const greet = function(){

    console.log("Hello Nikhil !!");
}

greet();



console.log("");


//Function can be passed as an Argument to another function.

function hii()
{
    return "Hii";
}

function hello(name ,hiiiiiii )
{
    console.log(hiiiiiii(),name);
}

hello("Nikhil",hii);



console.log("");



//Returning a function

function x(){
    function y(){
        let name1 = "Akhil";
        console.log(name1,"Welcome");
    }
     return y;
}

// console.log(output);

let output = x();
output();

//can be written as 
x()();