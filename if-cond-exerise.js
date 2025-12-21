/**
 * A program to read three strings and print the smallest string
 */

const f_s = "apple";
const s_s = "banana";
const t_s = "cherry";

if (f_s.length < s_s.length && f_s.length < t_s.length) {
    console.log("The smallest string is:", f_s);
}           
else if (s_s.length < f_s.length && s_s.length < t_s.length) 
{
    console.log("The smallest string is:", s_s);
}   
else if (t_s.length < f_s.length && t_s.length < s_s.length) {
    console.log("The smallest string is:", t_s);
} 
else if (f_s.length === s_s.length && f_s.length < t_s.length) {
    console.log("The smallest strings are:", f_s, "and", s_s);
}   
else if (f_s.length === t_s.length && f_s.length < s_s.length) 
{
    console.log("The smallest strings are:", f_s, "and", t_s);
}   
else if (s_s.length === t_s.length && s_s.length < f_s.length) {
    console.log("The smallest strings are:", s_s, "and", t_s);
}
else {
    console.log("All strings are of equal length.");
}