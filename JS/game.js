
//Turn Start Screen invisible to start the game
function closeStartScreen(){

    if (startScreen.style.display === "none") {
        startScreen.style.display = "block";
    } else {
        startScreen.style.display = "none"
    }

    return turnGameOn()
}

// turn game Canvas on
let current_obj=''

function turnGameOn(){
    if (current_obj.style) {
        current_obj.style.display='none';
    } 
    game.style.display='block';
    current_obj=game;
}

//function drawMazeAndRectangle (blocks, character){

//}

//collisions
//function collide (position) {
    //return this. {
    //  return bodyPiece.row === position.row && bodyPiece.column === position.column;
    //});
//  }