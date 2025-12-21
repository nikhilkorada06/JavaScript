/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//Polyfill for flat..

const arr = [1, 2, 3, 4, [5, 6], [7, [8, 9]]];

// const result_1 = arr.flat();
// const result_2 = arr.flat(2);     //The value inside bracket refers to depth upto which array is flattened.By defalut its value is 1 and Infinity is also possible to give.
// const result_3 = arr.flat(Infinity);
// console.log(result_1);   //output--[1, 2, 3, 4, 5, 6, 7, [8, 9]]
// console.log(result_2);   //output--[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(result_3);   //output--[1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.createdFlat = function (depth = 1) //here depth = 1 is given bcz default vaule of depth is 1 so here also it will take depth as 1 if nothing mentioned in argument..
{
    let flattenedArray = [];

    function getFlattenedArr(array, depth)
    {
        for(let element of array)
        {
            if(Array.isArray(element) && depth)
            {
                getFlattenedArr(element, depth-1);
            }
            else
            {
                flattenedArray.push(element);
            }
        }
    }
    getFlattenedArr(this, depth);
    return flattenedArray;
}

const flatArray = arr.createdFlat();
console.log(flatArray);