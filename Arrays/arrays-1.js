let students = ["Nikhl","Akhil","Kiran","Teja"];

// console.log(students);
// console.log({students});


//we can add objects and arrays to an arary

// students.push({name: "Nikhil", age: 25});

// students.push(["1,2,3,4"]);

// console.log(students);
// console.log({students});


//we can add any type of data to an array

// students.push(100);
// students.push(true);
// students.push(null);
// students.push(undefined);
// students.push(function() {
//     console.log("Hello from the function inside the array");
// });

// console.log(students);
// console.log({students});


// //we can access the elements of an array using index
// console.log(students[10]); 


// //we can access the elements of an array using for of loop

// for (let x of students) {
//     console.log(x);
//     console.log({x});
// }


// //using for in loop

// for (let x in students) {
//     console.log(x + " : " + students[x]);
// }   

// //using forEach method
students.forEach((student, x) => {
    console.log(`Index: ${x}, Value: ${student}`);
});