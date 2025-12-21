/**
 * Map  --->  Map basically takes care of pushing output elements into a new array and looping(for loop) execution and also returning that array.
 * MAP is said to be a higher order function.
*/

//map and filters are the methods of an array just like push
//these are also said to be higher order functions.
//they can take function as an argument.

const arr = [1,2,3,4,5];


//genral method without using  maps.


function sqOfNums(){
    const tempArr = [];
    for (let x of arr)
    {
        tempArr.push(x**2);
    }
    console.log(tempArr);
}

sqOfNums();




//using MAPS


function getSqOfNum(num){
    return num**2;
}

const output = arr.map(getSqOfNum); //here map takes that function and calls every element inside the array to execute that function.
console.log(output);    

//map basically takes care of pushing output elements into a new array and looping(for loop) execution and also returning that array.
//map passes all the elements inside array as arguments to the mentioned function.
//and creates the array with the outputs.





//For arrow function in MAPS

const squareNums = arr.map( (number) => number**2);   //((number) => {return number**2})  similr to ((number) => number**2)
console.log(squareNums)





