/**
 * Reduce --> method of an array
 * It also takes a callback function and returns a single value.
 */

const arr = [1,2,3,4,5];

const reducerFn = (acc,cur) => acc+cur;

const output = arr.reduce(reducerFn, 0); //previous is called as accumulator
//0 is the initial value of accumulator //so initially acc = 0 and cur =arr[0]
//if nothing was specified means if we not mention 0 at last then acc = arr[0] and cur = arr[1]
//here initially acc=0 and cur=arr[0]=1 these acts as arguments of the function and output acc+cur=1 is given to acc again and now the cur will be arr[1] the process continous...

console.log(output);