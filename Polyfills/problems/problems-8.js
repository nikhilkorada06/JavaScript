/**
 * Given an array write a function that returns an object with sum of both even and odd numbers.
 
 */

const arr = [1,2,3,4,5,6,7,8,9];

const result = arr.reduce((acc,cur) => cur%2===0 ? {...acc,even :  acc.even+cur} : {...acc ,odd : acc.odd+cur},{even : 0 , odd : 0})

console.log(result.even);

console.log (result.odd);