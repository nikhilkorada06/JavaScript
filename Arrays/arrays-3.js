/**
 * pop, slice and splice methods
 */

let courses = ['JavaScript', 'Python', 'Java', 'C++'];
console.log(courses);

// pop() method removes the last element from an array and returns it
let lastCourse = courses.pop(); //changes the original array by removing the last element    
console.log(lastCourse); // 'C++'
console.log(courses); // ['JavaScript', 'Python', 'Java']






// slice() method returns a shallow copy of a portion of an array into a new array object
let slicedCourses = courses.slice(1, 3); // delete elements from index 1 to 2 (3 is not included)(1 is included, 3 is excluded)
console.log(slicedCourses); // ['Python', 'Java']
console.log(courses); // Original array remains unchanged


// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements changes the original array
courses.splice(1,1);
console.log(courses); // ['JavaScript', 'Java']


//adding elements using splice

courses.splice(1, 0, 'Ruby', 'C#'); // at index 1, remove 0 elements and add 'Ruby' and 'C#'
console.log(courses); // ['JavaScript', 'Ruby', 'C#', 'Java']

// The typeof operator returns a string indicating the type of the unevaluated operand.
courses.splice(courses.length, 0,'DSA', 'Machine Learning'); // at the end of the array, remove 0 elements and add 'DSA' and 'Machine Learning'
console.log(courses); // ['JavaScript', 'Ruby', 'C#', 'Java', 'DSA', 'Machine Learning']





//typeof array give is object

console.log(typeof courses); // 'object'





//captalize the first letter of a given word

let userName = 'niKhIl';
firstCapitalLetter = userName[0].toUpperCase();
console.log(firstCapitalLetter);

console.log(firstCapitalLetter+userName.slice(1).toLowerCase());