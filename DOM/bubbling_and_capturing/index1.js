/**
 * Event bubbling and capturing.
 * 
 * Actually this event listener takes 3 arguments third one is for bubbling and capturing.
 * 
 * By default third argument is false ---> bubbling.
 * if we give true then it occurs capturing. which goes from grand parents to child
 */



//BUBBLING --> goes from child to grand parents.(bubbles up)


let form = document.querySelector("#form");     //selecting based on id so # is used.
                                              
let div = document.querySelector("#div");

let para = document.querySelector("#p");


para.addEventListener("click",() => {
    alert(" Hey!! You clicked para (child) ");
})

div.addEventListener("click",() => {
    alert(" Hey!! You clicked div (parent) ");
})

form.addEventListener("click",() => {
    alert(" Hey!! You clicked form (grand parent) ");
})

//so here when i click on para the alerts of para will appear later events of its parents will also appear.
//when i clicked on para it bubbles up and triggers div and form.

//Actually this event listener takes 3 arguments third one is for bubbling and capturing.







//CAPTURING --> here if we click para  alerts of form appears later alert of div and at last alert of para(child).

let form1 = document.querySelector("#form1");     //selecting based on id so # is used.
                                              
let div1 = document.querySelector("#div1");

let para1 = document.querySelector("#p1");


para1.addEventListener("click",() => {
    alert(" Hey!! You clicked para (child) ");
},true)

div1.addEventListener("click",() => {
    alert(" Hey!! You clicked div (parent) ");
},true)

form1.addEventListener("click",() => {
    alert(" Hey!! You clicked form (grand parent) ");
},true)