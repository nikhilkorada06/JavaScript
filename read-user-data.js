/**
 * Read data from user
 */

const readlineSync = require("readline-sync");

const userName =  readlineSync.question("What is your name?");

console.log(`Hello ${userName}! Welcome `);

