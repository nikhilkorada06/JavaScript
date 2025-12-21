/**
 *  Promise --> Promise is an object that has the status of Async operations, and
 *              its corresponding value.
 
 * This solves the callback hell problem
 */

//When JavaScript engine sees the promise it gives this to browser and says to inform me when u get the response.
//Now we can put a callback function to handel that promise and put it in a callback queue (MicroTask Queue)

//Promise is basically a Object.
//It consists of a (state of Request, Response), Here stateRequest ispending initially.
//If the API link is not broken and server is not busy then request will be fullfilled if not it will be rejected
//Response gives a value if request is fullfilled and shows error if request is failed.


/** 
    let promise = bookHotelAPI(hotelID)
    {
        stateRequest ----> pending / fullfilled / rejected;
        response     ----> value / error
    }
*/

const URL = "https://fonts.googleapis.com/icon?family=Material+Icons";

let promise = fetch(URL);  //fetch basically fetches the data from the API
console.log(promise);

//Here in debugger we can see that promise{<pending>} actually our promise is fullfilled but still it shows pending.
//        This happens bcz whenever JS engine sees promise it asks to browser to check that promise and inform me after u check that URL.
//        But before the browser's response it continues the execution of next lines code. So at the time when it is executing console.log(promise) promise is pending.
//        so it shows pending later promise is fullfilled so it gives status a fullfilled inside the object.



//                      THEN METHOD
//this then method conists of a function that is to be executed if our promise is fullfilled.

promise
    .then(function (response) {    //the promise in .then is executed when promise is fullfilled.
        console.log(response);   // output will be a object named response.
        return response.text();    //here if our response is a structured data we use .json() && if our response is in Plain text, HTML, CSS, or XML we use .text()
                              //Fetching raw content, stylesheets, or parsing HTML -- .text()  && Working with APIs that return structured data (like REST APIs)-- .json()
    })
    .then( data => console.log(data) )  //chaining of then method, here data is the text content of the response.
    .catch( function (error) {       //The promise in .catch is executed when promise is rejected
        console.log("Error Occured", error);  //shows this console msg and also says what type of error is occured.
    });        // we can again add then and continue the chain.