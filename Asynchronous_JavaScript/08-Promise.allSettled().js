/**
 * Promise.allSettled(arrOfPromises)
 */

//Promise.all() shows resolved if all promises inside the array is fullfilled and even a rejection of single promise shows error of ultimate promise.
//Here using Promise.allSettled() we can see the status of promise elemens in that array.


let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 3000)
);
let promise2 = new Promise(( _ , reject) =>
  setTimeout(() => reject(new Error("Promise 2 reject")), 2000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 rejected"), 1000)
);

let arrOfPromises = [promise1, promise2, promise3];

let promise = Promise.allSettled(arrOfPromises);

promise
      .then((response) => Promise.all(response.map((data) => console.log(data))))
      .then((d) => console.log(d));