/**
 * Hoisting --> wrt let and const declaration..
 * 
 * variables declared with var are hoisted in global memory space where as variables declared with let and const are hoisted in some other memory space.
*/




//TDZ starts here




console.log(y); //undefined //because var can be hoisted.

//  console.log(x); //Error  ---> ReferenceError: Cannot access 'x' before initialization

//  console.log(a); //Error  ---> ReferenceError: a is not defined

//Here ERROR occured due to x and a are different.
//In case of x JS machine (compiler) already know that x is present somewhere inside the code.
//so from this we can say that variables declared with let and const are also can be hoisted.
//But they the variables declared with let and const are somewhere in a TEMPORARY DEAD ZONE.
//TEMPORAY DEAD ZONE (TDZ) --->  time period between the hoisting the variable and declaring the variable.


let x=9;           //TDZ ends here   //ends when variable is intialized.
var y=10;

console.log(x);