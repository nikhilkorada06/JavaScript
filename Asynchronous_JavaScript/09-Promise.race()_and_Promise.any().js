/**
 * Promise.race(arrOfPromises)
 */

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 3000)   //This promise settles after 3 secs
);
let promise2 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Promise 2 reject")), 1000)    //This promise settles aftre 9 secs
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 4000)   //This promise settles after 4 secs
);

let arrOfPromises = [promise1, promise2, promise3];


                 ///Promise.race()

let promise = Promise.race(arrOfPromises);   //It shows the first setteled promise
                                             //If first setteled promise has error then it shows total promise state as rejected and shows error.
                                             //If the first setteled promise is resolved then it shows total promise state as resolved and shows output
// console.log(promise);
// promise.then((res) => console.log(res));


                 ///Promise.any()

let promiseAny = Promise.any(arrOfPromises);    //It waits for the for resolvable promise element
                                                //It shows promiseAny's state as resolved even another promise is rejected first.
                                                //It just need a reslovable promise irrespective of time.
console.log(promiseAny);
promiseAny.then((res) => console.log(res));