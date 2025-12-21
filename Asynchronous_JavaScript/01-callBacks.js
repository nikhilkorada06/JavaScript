/**                     ---CallBack Functions---            
 * 
 * JavaScript functions are called as first-class citizens
  bcz function called as first-class citizens for three reasons. Because you

  1.  we can assign function to a variable, 
  2.  we can pass a function as an argument to another function
  3.  we can also return a function from another function.

A Function which can be passes as an Argument to another Function is known as CALLBACK Function..
 */


function A(b)
{
    console.log("Hello");
    console.log(b);
    b();
}
function B()
{
    console.log("Bye");
}
A(B);
//In this code Function B is called as callback function.
//the execution of function B depends on fn A unless it is called individually.




/**
 * Asynchronous ---  Basically means something, which is going to 
                     happen later on, down, line in the code
                     even if the execution is done. But that
                     action is going to take place after some time.
                     Let's say clicking on a button for waiting.
                     For a data from the user or waiting for a data
                     from the from the server
 */

//setTimeout is basically a Async function, callback functions are needed to work with async functions..

console.log("hello");


setTimeout(function callback(){
    console.log("Execute after some time")
}, 2000);

//this will be executed after 2000 milli seconds or 4 sec
//Here this functions is registered, stored somewhere in the browser and a timer of 4 sec is creatde after 4 sec's this function will be executed.
//This is how the callback works ... calling a function after the timer is expired.