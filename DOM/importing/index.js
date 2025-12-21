let startBtn = document.getElementById("btn-start");
console.log(startBtn);

let stopBtn = document.getElementById("btn-stop");
console.log(stopBtn);

let resetBtn = document.querySelector("#btn-reset");
console.log(resetBtn);

let countBtn = document.querySelector("#btn-count");
console.log(countBtn);

let countDecrease = document.querySelector("#btn-count-decrease");
console.log(countDecrease);

let pageColorChange = document.querySelector("#btn-color-change");
console.log(pageColorChange);


//Event Listener basically used to do something when a task is done.
//Like when we click on a button, we want to do something.
//Here we are debugging when we click on a button using event listener.

resetBtn.addEventListener("click",()=>{
    console.log("Reset Button Clicked");
});



startBtn.addEventListener("click",()=>{
    console.log("Start Button Clicked");
});



function showMsg(){
    console.log("Stop Button Clicked");
}
stopBtn.addEventListener("click",showMsg);



//If we want to change the text of the button when we click on it, we can do it by using the addEventListener.
//Here when I click on the start button, the text of the button will change to "Begin" and vise versa.
function changeText(){
    if(startBtn.innerText === "Start"){
        startBtn.innerText = "Begin";
    }
    else{
        startBtn.innerText = "Start";
    }
}
startBtn.addEventListener("click",changeText);



//Counting number of times the button count is clicked.
let count = 0;
function countClicks(){
    count++;
    console.log(count);
}
countBtn.addEventListener("click",countClicks);


//Lets decrease the count that we increased till now.

countDecrease.addEventListener("click",() => {
    count--;
    console.log(count);
})


//Lets change the color of a button when button is clicked 

stopBtn.addEventListener("click",() => {
    stopBtn.classList.add("btn-red"); //there is need of dot before btn-red as we already given classList
    //the above given will add the btn-red class into the list of classes present in stopBtn.
    //      stopBtn.classList.toggle("btn-red");
    //toogle basically adds this class to stopBtn if it already have it it will remove it.
})


//Lets change the color of page when button is clicked.

pageColorChange.addEventListener("click",() =>{
    document.body.classList.add("btn-red");
})



//using change in event listerner.

let input = document.querySelector(".input");       //dot represents operating based on class , # represents operating based on id.

input.addEventListener("change",() => {
    console.log(input.value);
})
//according to this code when ever it is deviated it prints the value of input. deviation means like clicked at any other spot in the page other then input spot.






//Using input in event listener.

let input1 = document.querySelector(".input1");

input1.addEventListener("input",(event) => {
    console.log(event.target.value);                  //if we give event.value it will give undefined bcz event object ifself does contain value element.
                                     //if we give - event.target → the element that triggered the event (like your input box).
 })
//this attribute debugs every time when the input is coming even letter by letter.








//Using Mouse 

let mouseInput = document.querySelector("#hii");  // # -->  accessing with id  

mouseInput.addEventListener("mousedown", (events) => {
    console.log(events.button);
})





//Getting co-ordinates where the mouse is clicked.

mouseInput.addEventListener("mousedown", (Co_events) => {
    let xcor = Co_events.pageX;  //Gives co-ordinates according to complete page.
              //If we give clientX in place of pagex gives coordintes according to visible part.
    let ycor = Co_events.pageY;
    console.log(`X cor - ${xcor}   Y cor - ${ycor}`);
})

3



//If i want to get coordinates of any part on complete page then apply above condition to complete page.

document.body.addEventListener("mousedown", (e) => {
    let xcor1 = e.clientX;  
    let ycor1 = e.clientY;
    console.log(`X cor - ${xcor1}   Y cor - ${ycor1}`);
})