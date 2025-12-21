const read_user = require("readline-sync");

const number = read_user.question("Enter a number: ");
if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
}
else{
    console.log("The number is zero.");
}