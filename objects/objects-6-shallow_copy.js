// /**
//  * Object reference and shallow copy
//  * 
//  * SHALLOW COPY --> when we create a copy of an object if a change is done to one obj it will also effects the other
//  * DEEP COPY --> opposite to shallow copy
//  */

// const person1 = {
//     name: "Nikhil",
//     age : 19
// }

// console.log({person1});
// console.log(" ");

// const person2 = person1; //here person2 also refering to the same memory location where person1 is present


// //now changing one person details will change the details of the other person also
// //This change is happennig because objects are not copied by value they are copied by reference 
// person2.name = "Akhil";
// person1.age = 16;

// console.log({person1});
// console.log({person2});
// console.log("  ");





//To avoid this problem we can use obj.assign()

const person3 = {
    name: "kalyan",
    age : 26
}

const person4 = Object.assign({Gender : "Male"},person3)
person4.name = "harsha";


console.log({person3,person4});

//Now it was working to change values in only object
//But still this not a deep copy this is also a shallow copy 
//Because if we create another object inside that object and try to do the above change same problem will be repeated

// const person5 = {
//     name : "vamshi",
//     age  : 52 ,
//     address : {
//         city : "srikakulam",
//         state : "AP"
//     }
// }
// //try to change the values inside the address object

// const person6 = Object.assign({},person5);

// person5.address.city = "Vishakapatnam";

// console.log({person5,person6});

//here city is being changed in both the objects so till it is a shallow copy 