/**
 *  async/await  ---> Nothing but a elegent way of writing promises.
 * 
 *     async is a keyword which will make the return value of any function into a promise.
 */



// let promise = new Promise((resolve) => resolve("done"));

// promise
//        .then((res) => console.log(res))
//        .catch((err)=> console.log(err));




// async function returnSomething()
// {
//     return "Nikhil";
// }
// const result = returnSomething();
// console.log(result);   
//output shows promise which means result is a promise.





// async function createdPromise1()
// {
//     let promise = new Promise((res) => res("done_1"));
//     return promise;
// }

// const promise = createdPromise1();
// promise.then(res => console.log(res));

//   //here there is no use of using async as we know async basically helps in using promsie without then and catch for using then and catch await is used



// async function createdPromise2()
// {
//     try
//     {
//         let promise = new Promise((res, rej) => res("done_2"));
//         let result = await promise;
//         //as we used await js engine will stop here until promise is settled means either resolved or rejected.
//         console.log(result);
//     }
//     catch(err)
//     {
//         console.log("Error Occured:: ",err);
//     }
// }

// createdPromise2();





//If we want to fetch data using try and catch..

//here insted of using .then we use await and insted of .catch we use try catch

//await cannot me used outside async function..

const getUserData = async () => {

    try
    {
        const promise = fetch(`https://api.github.com/users/nikhilkorada06`);
        console.log(promise);
        let data = await promise;
        console.log(data);
        const response = await data.json();
        console.log(response);
    }
    catch(err)
    {
        console.log("Error Occured:: ", err);
    }
}
getUserData();