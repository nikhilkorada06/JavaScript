const newList = new Set();

newList.add(1);
newList.add(2);
newList.add(3)

console.log(newList)
console.log({newList});


// Adding a duplicate value, which will be ignored

newList.add(1); 
console.log(newList);
console.log({newList});


//clearing all values from the set
newList.clear();
console.log(newList)
console.log({newList});


//adding multiple values at once
newList.add(1).add(2).add(3);


//deleting a value
newList.delete(2);
console.log(newList)
console.log({newList});


//checking if a value exists, returns in boolean
let x = newList.has(1);
console.log(x); // true
x = newList.has(2); // false
console.log(x); // false

//for each loop to iterate over the set
newList.forEach ((value) => {
    console.log(value); // 1, 3
    console.log({value});
})



