/**
 * FILTER --> Basically refers to filtering out something.
 * 
 * example -- taking out the numbers that are greater than 5 from an array of numbers.
 * 
 * Just like map filter is also a higher order function.
 */


//General method without using Filters.

const arr =[1,2,3,4,5,6,7,8,9];

function filterNums(arr){
    const tempArr=[];
    for (let x of arr)
    {
        if (x > 5)
        {
            tempArr.push(x);
        }
    }
     console.log(tempArr);
}

filterNums(arr);



//Using FILTERS for arrow function.

const output = arr.filter((number) => number>5);

console.log(output);