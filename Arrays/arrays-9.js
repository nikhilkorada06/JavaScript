/**
 * Copying an array --> Array Reference
 */

let arr1 = [1, 2, 3];
let arr2 = arr1; 

console.log({arr1});
console.log({arr2});

arr2.push(4);

//Here Modification of arr2 will also modify arr1 because both variables point to same Memory Location 
//SHALLOW COPY
console.log({arr1});




//Spread Operator
let arr3 = [...arr1]; // Creates a shallow copy of arr1
console.log({arr3});

arr3.push(5);

console.log({arr3}); // arr3 is modified
// But arr1 remains unchanged
console.log({arr1}); // arr1 remains unchanged
//So Use spread operator to create a new array that is a copy of the original array





//Creating a copy using a for and for of loop

let arr4 = [1,2,3,4];
let arr5 = [];
let arr6 = [];
for (let i=0;i<arr4.length;i++)
{
    arr5.push(arr4[i]); // Copying each element from arr4 to arr5
}
console.log(arr5);
for (let x of arr4)
{
    arr6.push(x); // Copying each element from arr4 to arr6
}
console.log(arr6);



//

let str = "Hello";

let arrOfAlpha = [...str]; // Spread operator converts string to array of characters
console.log(arrOfAlpha); // ['H', 'e', 'l', 'l', 'o']