/**
 * Higher Order Functions
 * 
 * A function that accepts another function as an argument or returns a function or does both is called an H.O.F
 */

function welcome(){
    return "Welcome to gfg";
}
function hii(welcome,name){
     console.log(`Hii ${name}`,welcome())
}


hii(welcome,"Nikhil");

//In the above process hii() function is a higher order function anf the function welcome() is a first class function.



//A function that returns another function is also a higher order function

function displayMsg()
{
    return (() => {
        console.log("Hello from inner function.");
    })
}

const output = displayMsg();

output();







const arr = [1, 2, 3, 4];

function sqOfNums(arr){
    let sqNums = [];
    for(let x of arr)
    {
        sqNums.push(x**2);
    }
    console.log( sqNums);
}


function cubeOfNums(arr){
    let cubeNums = [];
    for(let x of arr)
    {
        cubeNums.push(x**3);
    }
    console.log(cubeNums);
}

sqOfNums(arr);
cubeOfNums(arr);

//Here in the above code for square ,for cube and all only one thing is changing thst is the value given for pushing for square (x**2) for cube (x**3)
//So we can replace it with a first class function. which makes out task easier.


function powering(x, power){
    return (x**power);
}


function powers(arr,power){
    let poweredNums = [];
    for (let x of arr)
    {
        poweredNums.push(powering(x,power));
    }
    console.log(poweredNums);
}

powers(arr,5);
//Here powers is a higher order function and powering is a first class function.