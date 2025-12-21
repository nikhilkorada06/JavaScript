/**
 * Function Borrowing -- Call, Apply and Bind
 * 
 *If multiple objects are using same function the we can apply function borrowing method. 
 *binding done by using methods -- call , apply and bind is known as explict binding
 */

const user1 = {
    name : "Nikhil",
    age  : 19,
    displayMsg(){
        //Implict Binding 
        console.log(this.age);
    }
};

const user2 = {
    name : "Akhil",
    age  : 16
}
const user3 = {
    name : "Kalyan",
    age  : 18
}



//creating a function that can be used any of the above objects is known as explict binding

function sayHii(){

   //Explict Binding or  function borrowing

    console.log(`Hii!! ${this.name}`); //Here this value varies based on calling of function
}

//This explict binding can be done by call,apply and binding the function





//calling

sayHii.call(user1);  //I need to call the function from user1 object so user1 is given in brackets.
sayHii.call(user2);
sayHii.call(user3);
console.log("");
sayHii.call(user1, user2);


//including parameters of the function

function hello(degree,year){
    console.log (this.name+"-"+degree+"-"+year);  //[this] keyword is not needed for degree and year objects because they are not the properties of the object they are just parameters.
}

//calling
hello.call(user1,"B.TECH(ECE)",2028);





//Applying
//apply and call are almost same the only differnce is how the parameters are given

hello.apply(user1,["B.Tech(ECE)",2028]);  //both are same 







//binding

//by using binding it returns a function.

const result1 = hello.bind(user1,"B.Tech(ECE)",2028);
result1();

const result2 = hello.bind(user1,"B.Tech(ECE)");
result2(2028);

const result3 = hello.bind(user1,2028);
result3("B.Tech(ECE)");