/**
 * Promise.all([arrayOfPromise])
 * https://api.github.com/users/nikhilkorada06
 */

const users = ["prakashsakari", "nikhilkorada06"];

const arrayOfPromises = users.map(user =>
  fetch(`https://api.github.com/users/${user}`)
);

let promise = Promise.all(arrayOfPromises);

promise
  .then((responses) => {
    // Step 1: Convert all Response objects to JSON
    convertedResponses = responses.map(res => res.json())   //Just like the arrayOfPromises this is also a array of promises containing the conerted files.
    return Promise.all(convertedResponses);
  })
  .then((userDataArray) => {
    // Step 2: Now you get actual user data
    userDataArray.forEach(user => console.log(user));
  })
  .catch((err) => console.log("Error:", err.message));


// let promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 1 resolved"), 3000)
// );
// let promise2 = new Promise((_, reject) =>
//   setTimeout(() => reject("Promise 2 reject"), 2000)
// );
// let promise3 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Promise 3 rejected"), 1000)
// );

// let arrOfPromises = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromises);
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));