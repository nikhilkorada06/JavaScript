/**
 * new keyword and constructor functions
 * 
 * constructor function is used to create an object type
 * 
 * Constructor functions are regular functions.
   They have 2 conventions though.
     They are named with capital letter first 
     They should be executed with a new operator 
 */


function user()
{
    this.name = "Nikhil",
    this.age = 19
}

//Here this a normal function but basically it creates an object that is why this working here. 

const user1 = new user();   //Output shows that user1 and user2 are objects.
const user2 = new user();

console.log(user1);
console.log (user1.name);
console.log(user1.age);


console.log(user2);
console.log (user2.name);
console.log(user2.age);





//Creating an Object type using constructor function



function inClg(rollNo, branch)
{
    this.rollNo = rollNo ;
    this.branch = branch ;
}

const student1 = new inClg(1, "CSE");
const student2 = new inClg(2, "ECE");

console.log(student1);