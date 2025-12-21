let btnContainer = document.querySelector(".btn-container");


//event that we wanna use depends on child present inside the parent.

btnContainer.addEventListener("click",(event) => {
    console.log(event);
    console.log(event.target)    //event.target gives where the event been applied.

    console.log(event.target.innerText); //prints the text inside it.

    let btnText = event.target.innerText;
    if (btnText == "Red")
    {
        event.target.classList.toggle("btn-red");
    }

    let newButton = document.createElement("button");
    newButton.innerText = "New Button";
    btnContainer.appendChild(newButton);
})