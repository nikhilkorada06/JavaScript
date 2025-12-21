/**
 * mask the last 4 charachters with #
 */

const str = "123456522332111";

const repeateChar = "#".repeat(4);

const result = str.slice (0,str.length-4) + repeateChar;

console.log(result);
