/**
 * Propertry Existance
 */

//Using In operator to check Property Existance 

const obj = {
    name : "Nikhil",
    age : 19
}

const found = "age" in obj ;

console.log(found);

const found1 = "Course" in obj;
console.log(found1);

console.log("name" in obj);



for (let x in  obj )
{
    console.log(x + ": "+ obj[x]);
}