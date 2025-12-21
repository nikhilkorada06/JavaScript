/**
 * includes method for arrays
 */

const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'];

const askUser = require("readline-sync");

const userSize = askUser.question("Which size shirt you looking for : ");

if(availableSizes.includes(userSize)) {
    console.log(`Yes, we have ${userSize} size shirt available.`);
}   
else {
    console.log(`Sorry, we don't have ${userSize} size shirt available.`);
}   
