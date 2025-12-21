/**
 * Sum of numbers less than 3 
 *  reduce can be used here.
 */

const arr = [1,2,3,4,5];

const output = arr.reduce((previous , current) => current<3 ? previous+current: previous  ,0);

console.log(output);