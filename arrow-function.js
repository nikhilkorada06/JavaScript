/**
 * Arrow functions
 */

const add = function(x,y) {
    return x+y ;
}

const addArrow = (x,y) => x+y;

const addArrow2 = (x,y) => {
    return x+y;
}

const sub  = (x,y) =>  x > y ? x-y : y-x;

let r1 = add(2,3);

let r2 = addArrow(2,3);

let r3 = addArrow2(2,3);

let r4 = sub(2,3);
let r5 = sub(3,2);

console.log(r1);

console.log(r2);

console.log(r3); 

console.log(r4 , r5);