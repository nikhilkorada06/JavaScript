/**
 * Arguments Object in Non-arrow function
 * ----arguments object is an array like object present locally inside a function
 *     and it contains values of all the arguments passed to a function.
 */

//In java script if [no. of parameters != no. of arguments] it wont give any error unlike other programming languages.


function hii()
{
    console.log(arguments); //here arguments is a built in key word.
    
    console.log(arguments[2]);   //77


    //even we can change the arguments values.
    arguments[3] =10000;
    console.log(arguments[3]);
    console.log("");


    //we can apply for of loop here
    for (let x of arguments)
    {
        console.log(x);
    }

    //just like an array we can perform any operations  on them like calculating their sum etc...
    //but all methods of array cannot be performed here liks split method, map method etc...
    //to perform we have to convert these into pure arrays.
   
    const arr = [...arguments]; //this is a pure array
     console.log(arguments);
     console.log(arr);
}

hii(22,455,77,22,1);
//here in the output we can see a object containing all the arguments.
//this is not like a normal object its like an array like object.
//these array like objects bcz we can do indexing here.

console.log("");



function cal(a=10)
{
    console.log(a);
    console.log(arguments);   //this value is directly from the point where we are calling function cal(4)
    arguments[0] = 9;
    console.log(arguments);  
    console.log(a);    //even if we change the arguments default parameter wont be changed.
}
cal(4);


console.log("");




function calTot(b)
{
    console.log(b);
    console.log(arguments);   //this value is directly from the point where we are calling function calTot(4)
    arguments[0] = 9;
    console.log(arguments);  
    console.log(b);    //even if we change the arguments parameter will be changed as it is not a default parameter.
}
calTot(4);