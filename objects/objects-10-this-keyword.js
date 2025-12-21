/**
 * this keyword 
 * refers to the object that is executing the function
 * Implicit binding ---> binding (this) keyword to a particualr object.
 * Explict binding -->  creating an external function that can be borrowed by an object so no need to create a same function in every object
*/

const person = {
    name  : "Nikhil",
    age   :  19,
    
    displayMsg : function()
    {
        console.log (`Hii Mr.${this.name} Welcome !!!`);  //this keyword present inside the function refers to the object itself

        console.log(this); 

        console.log(person);  //returns complete object

        console.log("Hello!! "+this.name);
    }
};

person.displayMsg();



console.log("");






//executing this keyword in a normal function

function calSum()
{
    //for a function that was not executed by a object, this keyword refers to window object

    console.log(this);
}

calSum();

console.log("");

console.log(this); //This present in global sapce refers to window object containing different useful functions 



console.log("");







//Using this keyword inside a arrow function 

//in arrow function this refers to global object it is not executed by a object

//arrow function doesnt point to the object that is excuting the function

const person2 = {
    name2 : "Akhil",
    age2 : 16,
    showName : () =>  {console.log(this.name2);}
};

 person2.showName();  //gives global window object


 const disName = () => {console.log(this);};
 disName();//similar as above refers to the global object (window object)


console.log("");








 const person3 = {
    name3 : "Teja",
    age3  :  45 ,
    Hii : function (){
        console.log("Here - "+this.name3);

        function Hello(){
            console.log(this); //return nothing because Hello() function is not linked with person3 object so cant use this keyword.
        }
        Hello();
    }
 }

 person3.Hii();