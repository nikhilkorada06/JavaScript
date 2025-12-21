const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let score = 0;
let tiles = [];

function initializeGame()
{
    tiles = [];
    board.innerHTML="";
    for(let i=0; i<16; i++)
    {
        let tile = document.createElement("div");
        tile.classList.add("tile");

        tile.dataset.value = 0;
        tiles.push(tile);
        board.appendChild(tile);
    }
    score=0;

    addRandomTile();
    addRandomTile();
    updateBoard();
}

function addRandomTile()
{
    const emptyTiles = tiles.filter(tile => tile.dataset.value == 0);

    if(emptyTiles.length === 0) return;

    const randomTile = emptyTiles[Math.floor(Math.random()*emptyTiles.length)];
    randomTile.dataset.value = Math.random() < 0.9  ?     2    :    4;
}


function updateBoard()
{
    tiles.forEach( tile => {
        const value = parseInt(tile.dataset.value);
        tile.textContent = value>0 ? value : '';
        tile.className = 'tile';
        if(value>0)  tile.classList.add(`tile-${value}`);
    })
    scoreDisplay.textContent = score;
}


function move(direction)
{
    let moved = false;
    console.log(`\n Moving: ${direction}`);

    // i is for rows , j is for columns

    //- - - -  if direction is up or down:  0  4 8  12      |   if direction is right or left: 0  1  2  3
    //- - - -           (i+j*4)             1  5 9  13      |                                  4  5  6  7 
    //- - - -                               2  6 10 14      |                                  8  9  10 11
    //- - - -                               3  7 11 15      |                                  12 13 14 15
    
    for (let i=0; i<4; i++)
    {
        let line = [];

        //console.log(`\n Processing ${direction == "up" || direction == "down" ? "column" : "row"} ${i}`);

        for ( let j=0; j<4; j++)
        {
            const index = direction == "up" || direction == "down" ?  i+j*4  : j+i*4 ;
            const value = parseInt(tiles[index].dataset.value);
           if(value != 0)
            {
                line.push(value);
            }
            else
            {
                // line.push(value);
            }
        }
          console.log(`Original Line : ${line}`);

        if(direction == "right" || direction == "down")
        {
            line.reverse();
            console.log(`reversed line for ${direction}: ${line}`);
        }

        //0 2 0 2  -->  2 0 2 0 (if right clicked) --> 2 2 (eleminate zeroes) --> 4 0 0 0 --> 0 0 0 4 (reverse)
        // 0 2 0 2 -->  2 2  --> 4 --> 4 0 0 0 (if left is clicked)
        
        let mergedLine = mergeLine(line);
        
        if(direction == "right" || direction == "down")
        {
            mergedLine.reverse();
        }

        for ( let j=0; j<4; j++)
        {
            const index = direction == "up" || direction == "down" ?  i+j*4  : j+i*4 ;
            const newValue = mergedLine[j] || 0;
            if (tiles[index].dataset.value != newValue)
            {
                tiles[index].dataset.value = newValue;
                moved = true;
            }
        }
    }


    if(moved)
    {
        console.log("Move Successful, adding a new tile");
        addRandomTile();
        updateBoard();
    }
    else
    {
        console.log("No tiles moved");
    }
}


function mergeLine(line)
{
    // 2 2 4 0 --> 2 2 4  (as zeroes are removed in the j or column loop in move function )
   
    for (let i=0; i<line.length ; i++) 
    { 
        if( line[i] === line[i+1])
        {
            line[i] = 2 * line[i];
            score = score + line[i];
            line.splice(i+1, 1);
        }
    }

     //above line changed to (4 4)

    while(line.length<4)
    {
        line.push(0);
    }

    // 4 4 0 0 

    return line;
}


//   ------------------KEY BOARD CONTROLS----------------------

document.addEventListener("keydown", (e) => {
    switch(e.key)
    {
        case "ArrowUp":
            move("up");
            break;

        case "ArrowDown":
            move("down");
            break;

        case "ArrowRight":
            move("right");
            break;

        case "ArrowLeft":
            move("left");
            break;
    }
})




//   -------------------Touch Controls---------------------------

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

board.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

board.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    let dx = touchEndX - touchStartX;
    let dy = touchEndY - touchStartY;

    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return; // Ignore small swipes

    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            move("right");
        } else {
            move("left");
        }
    } else {
        if (dy > 0) {
            move("down");
        } else {
            move("up");
        }
    }
}


// ==================== PULL-TO-REFRESH & SCROLL PREVENTION ====================

// Prevent pull-to-refresh and page scrolling
let lastTouchY = 0;
document.addEventListener("touchstart", (e) => {
    lastTouchY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener("touchmove", (e) => {
    let currentY = e.touches[0].clientY;
    let scrollY = window.scrollY || document.documentElement.scrollTop;

    // If at the top and swiping down → block
    if (scrollY === 0 && currentY > lastTouchY) {
        e.preventDefault();
    }
    lastTouchY = currentY;
}, { passive: false });

// Completely disable body scroll
document.body.style.overflow = "hidden";


// ==================== END OF TOUCH CONTROLS ====================

initializeGame();

restartButton.addEventListener("click", initializeGame);
