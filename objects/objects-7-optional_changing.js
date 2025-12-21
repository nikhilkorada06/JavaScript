/**
 * Optional Chaining
 */

const user = {
    name : "Nikhil",
    age  : 19,
    address : {
        city :  "Vishakapatnam",
        state : "AP"
    },
    likes : "Sleeping",
    getMsg : function(){
        return (`Hii ${this.name}, Are you form ${this.address.city} ??`);
    }
}



console.log(user.job); //undefined 
//  [  console.log(user.courses.institute);  ] //ERROR
console.log(user.courses);
//If a key is not found it gives undefined 
//If the complete Object is not found it gives ERROR




//SOLUTION 1
// using if statement

if (user.courses != undefined)
{
      console.log(user.courses.institute);//no chance of error 
    //Either gives the output or returns undefined
}
else 
{
    console.log("Courses not found");
}




//Soluiton 2

//using optional change 

console.log(user.courses?.institute); //Optional change 

//if works like the above if statement if user.courses is undefined then it returns undefined if user.courses is defined then it checks user.courses.institute

console.log(user.address.mandal); //undefined




console.log(user.getMsg());

//  [    console.log(user.getAddress());   ]  //Gives ERROR

//Here also we can use optional change 

console.log(user.getAddress?.());  //returns undefined
console.log(user.getMsg?.());    