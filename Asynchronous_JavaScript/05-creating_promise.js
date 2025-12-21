/**
 * Promise
 */
// creating our own promise without using fetch.

const isRequestSuccessful = true;

const database = [
    {id: 1, name: "Akhil"},
    {id: 2, name: "Nikhil"}
]

let promise  = new Promise((resolve, reject) => {
    if(isRequestSuccessful)
    {
        // resolve("promise resolved");   //In this case output will be Promise {<fulfilled>: 'promise resolved'}

       // setTimeout(() => resolve("promise resolved"), 3000)     //Here we can see pending for 3 seconds

       setTimeout(() => resolve(database), 2000);   //shows that array as an output.
    }
    else 
    {
        const error = new Error("Something went wrong");     //In this case we can see an error in debugger showing this statement.
        reject(error);             //if we give reject(error)  this shows the error object containig message, stack where we can also check the stack or place where error occured.
        // reject(error.message)        //if we give reject(error.message) only shows "Something went wrong"
    }
});

 console.log(promise);   //Here we cant see pending bcz we are not using the Async operations like DOM API or set time out..
//If we use fetch its a async operator 
//the operators we are using( Promise, resolve, Error, reject ) are not async. So web API is not involved request is not sent to web API so no pending.


promise
       .then((response) => console.log(response))
       .catch(function (error){
        console.log(error);
       });