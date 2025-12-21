/**
 * Pure functions
 *  1. It takes an argument.
 *  2. It should return something.
 *  3. For same input we should get same output.
 *  4. The result should not be influenced but outer parameter.
 *  5. It should not mutate(changing) the original argument.
 */

const x=4;

function doubleValue(num){return num*2}; //Pure function

function doubleValue1(num){return num*2*x};  //Impure  function as result depends on outer value x.


const result = doubleValue(10);
const result1 = doubleValue1(10);


console.log(result);
console.log(result1);



//mutating

function numbers(Arr){
    const newArr = [];
    const newArr2 =[];
    newArr2.push(Arr,5,6); //Array containing another array   //  [[1,2,3,4],5,6]
    newArr.push(...Arr,5,6);   //...Arr indicates spreading of Arr
    return newArr;
}

const result2 = numbers([1,2,3,4]);
console.log(result2);