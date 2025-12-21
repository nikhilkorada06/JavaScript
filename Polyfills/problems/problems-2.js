/**
 * MAP to delete all the volwels from a string.
 */

const string = "Hello world";

function removingVowles(string)
{
    const vowles = ['a','e','i','o','u'];

    let result ="";

    for (let x of string)
    {
        if (!vowles.includes(x.toLowerCase()))
        {
            result += x;   
        }
    }
    return result;
}

finalStr = removingVowles(string);

console.log(finalStr);