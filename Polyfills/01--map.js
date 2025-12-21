/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//Polyfill for map..


const arr = [1,2,3,4,5];


//          MAP FUNCTION
// const squaredArr = arr.map(number => number**2);
// console.log({squaredArr});



function getChangedOfNum(number, power)
{
    return number**power;
}


Array.prototype.createdMap = function(receiveChangedOfNum)
{
    let changedArr = [];

    for (let i=0; i<this.length; i++)
    {
        changedArr.push(receiveChangedOfNum(this[i], 2));
    }
    return changedArr;
}

const squaredArr = arr.createdMap(getChangedOfNum);
console.log(squaredArr);


//this is polyfills creating our own map function for browsers those doesnt support modern methods..