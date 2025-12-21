/**
 * Hoisting is the process in which u can access the value of variable or a function before it is initialized.
 * 
 * hoistion wrt var declaration and function.
 * 
 * hoisting basically means moving the declaration of the variable to the top of the code before being executed.
 */



console.log(age); //Variable is not able to accessed befor declaring it 
//As remaining languages it output was not an error it was [undefined].
//if we had not declared the variable  (age) in the complete program then it gives an error.




var age = 19;   //variables declared with var are hoisted in global memory space. where as variables declared with let and const are hoisted in other memory space.
console.log(age);


console.log(showName); //here even function is not declared till now still it was giving the output.

showName(); //Function is invocable even befor iam declaring it.

function showName(){
    console.log("Nikhil");
}
showName();




//Lets try by assining a function to a variable and try log that variable.

console.log(hisAge); //undefined

// console.log(hisAge())   //this gives error as it is considered as variable not as a function.


var  hisAge = function showAge(){
    console.log(19);
}

console.log(hisAge);


/**    This basically happens because while executing the program JS engine divides 
  this process into two parts creation phase and execution phase during 
  inside creation phase all keys of all variables are taken and assigned undefined to them
  during execution phase that undefined replaced with the  value assined
  here are we creation phase is happend earlier when we try to execte execution phase 
  starts during that phase we are asking the value to print before it was being 
  declared to it gives undefined.
 */   