/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//Polyfill for reduce...

const arr = [1, 2, 3, 4, 5, 6];

function getSum(acc, cur)
{
    return acc+cur;
}

//const total = arr.reduce(getSum, 1);
// console.log(total);   // output will be 22


Array.prototype.createdReduce = function(callback, initialValue)
{
    let acc = initialValue ? initialValue : this[0];
    for(let i = (initialValue ? 0 : 1) ; i < this.length ; i++)
    {
        acc = callback.call(this, acc, this[i], i, this);
    }
    return acc;
}

const total = arr.createdReduce(getSum, 8);
console.log(total);