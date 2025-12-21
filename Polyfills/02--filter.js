/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//polyfill for filter....


const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.filter(num => num > 3);

// console.log(result);


function seperateNumbers(number)
{
    return (number > 3);
}

Array.prototype.createdFilter = function(seperateNumbers)
{
    let changedArr = [];
    for(let i=0; i<this.length ; i++)
    {
        if(seperateNumbers.call(this, this[i], i, this))    // condition can be seperateNumbers.call(this,this[i], i, this)  or seperateNumbers(this[i])
        {
            changedArr.push(this[i]);
        }
    }
    return changedArr;
}

const result = arr.createdFilter(seperateNumbers)
console.log(result);