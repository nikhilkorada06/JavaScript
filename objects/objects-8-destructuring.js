/**
 * Destructuring Objects 
 */

let obj = {
    name : "Nikhil",
    age  :  19,
    address : {
        city : "Srikakulam",
        state : "AP"
    },
    courses : ['HTML','C','C++','JS']
}

let {name, address, course} = obj;

console.log(address);

console.log(name);  //no need to write obj.name
//This works only when key name are same



//     let {userName, userAddress, userCourse} =obj;
//         console.log(userName);  //Undefined 




//we can also take only one key's value

let {age} = obj ;
console.log(age);





//Assigning one name to name and remaining to rest 
//...

let obj1  = {
    name1      : "Akhil",
    age1       :  16,
    adderss1   : {
        city1  : "Hyd",
        state1 : "Telangana"
    },
    courses1   : ['HTML','C','C++','JS']
}

let {name1,...rest}  = obj1 ;

console.log(name1);
console.log(rest);





//If we definitely want to change key name use this method


let {name : userName,address : userAddress} = obj;
console.log(userName , userAddress);


// let {name ,age , address : {state , city}, courses} = obj ;   
//     console.log(address);       //ERROR


let {address : {state , city}} = obj;
console.log(address);   //as the address object present inside obj is destructured so cannot be used as a whole with name , age ...


console.log(state , city) ;







const employees = {

    engineers : {
        em1 : {
            name2 : "nikhil",
            age2 : 19
        },
        em2 : {
            name2 : "akhil",
            age2 : 16
        }
    },
    placement : {
        em3 : {
            name2 : "kalyan",
            age2 : 18
        }
    },
    youtube  : {
        em4 : {
            name2 : "chaitanya",
            age2 : 20
        }
    }
}


//     let {engineers : {em2:{name2 , age2 } }} = employees;

//      console.log(name2,age2); //gives em2 details

// console.log(em2);   //ERROR

let {youtube : {em4 : {name2 , age2 }}}= employees;
//     console.log(em4 );   //ERROR
console.log(name2);
