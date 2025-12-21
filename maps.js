//set is almost similar to an array it's like advance version of an array

//similarly map is an advanced version of an object
// Map is a collection of key-value pairs

const newMap = new Map();

// Adding key-value pairs
newMap.set (10,'apples');
newMap.set ('bananas', 20); 
newMap.set ('oranges', 30);

console.log(newMap);
console.log("  ");
console.log({newMap}); 
console.log("  ");

// Accessing values by key
console.log(newMap.get('apples')); 
console.log(newMap.get('bananas')); 
console.log(newMap.get(10));
console.log("  ");

//for each loop to iterate over the map
newMap.forEach((key,value) => {
    console.log(key+" = "+ value);
    console.log({value});
    console.log("  ");
})
console.log("  ");

// Checking if a key exists
console.log(newMap.has(10)); 
