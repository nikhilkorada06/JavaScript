const  mod = require("./utils.js");


console.log(mod);

   print(greet("Nikhil")); //Error

mod.print("Nikhil");  //This is the method to use the exported objects.


//We can use this by method of destructuring 

// for that give {name, age}  in the place of mod

const {print,greet} = require("./utils.js"); 

print(greet("Akhil"));