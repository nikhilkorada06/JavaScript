const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");


//    //Rectangle
// ctx.fillStyle = "skyblue";     // fill color
// ctx.fillRect(50, 100, 100, 60);  // x, y, width, height

//   //Border of the rectangle
// ctx.strokeStyle = "black";
// ctx.strokeRect(50, 100, 100, 60);


// //    Circle

// ctx.fillStyle = "red";     // fill color
// ctx.beginPath();
// ctx.arc(200, 100, 40, 0, Math.PI * 2, true); // x, y, radius, startAngle, endAngle, counterclockwise
// ctx.fill();


// //   border to the circle 
// ctx.strokeStyle = "black";
// ctx.beginPath();
// ctx.arc(200, 100, 40, 0, Math.PI * 2, true); // x, y, radius, startAngle, endAngle, counterclockwise
// ctx.stroke();


// // Stright Line

// ctx.fillStyle = "blue";
// ctx.strokeStyle = "green";   //Line will be in green color
// ctx.beginPath();
// ctx.moveTo(500, 100);
// ctx.lineTo(200, 200);
// ctx.lineWidth = 5;
// ctx.stroke();


// // Writing Text

// ctx.fillStyle = "yellow";
// ctx.font = "50px Arial";
// ctx.fillText("Hello World", 200, 50);


// // Drawing an Arc

// ctx.fillStyle = "orange";
// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.arc(300, 300, 40, 0, Math.PI/2);
// ctx.fill();



// //  practice

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.arc(50, 50, 20, 0, Math.PI, true);
// ctx.closePath();
// ctx.fill();


// ctx.fillStyle = "green";
// ctx.beginPath();
// ctx.moveTo(300, 600);
// ctx.arc(300, 600, 50, 0, Math.PI/2, false);
// ctx.closePath();
// ctx.fill();
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(300, 600);
// ctx.arc(300, 600,50, Math.PI/2, Math.PI*(3/2), false);
// ctx.closePath();
// ctx.fill();
// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(300, 600);
// ctx.arc(300, 600,50, Math.PI*(3/2), 0, false);
// ctx.closePath();
// ctx.fill();



// //   Clearing the screen 

// ctx.clearRect(0, 0, 1000, 1000);





const myImage = document.getElementById("myImg");

window.onload = () => {
    ctx.drawImage(myImage, 0, 0, 50, 50);

    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.fillText("Sample Image", 100, 100);
    ctx.strokeText("Sample Image", 100, 100);
};
