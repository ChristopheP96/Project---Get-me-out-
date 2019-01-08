
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

//function creates character
let character = new Character (400,300,10,10,'rgb(255,255,255)')
let object = shape1A;

//Text

//"Wha.. wha... what? Where am I?"
characterIsSurprised = function() {
    c.font = "20px courrier new"
    c.fillStyle = "rgb(255,255,255)"
    c.fillText ("Wha.. wha... what? Where am I?", 400, 300)
}
characterIsSurprised();

characterIsSurprised2 = function() {
    c.font = "20px courrier new"
    c.fillText ("Please, let me join my friends again!", 400, 300)
}
characterIsSurprised2();

//check collision

function checkCollision(character, object){
 
       if (character.y >= object.y && character.y <= object.height)
       {
           if(character.x <= object.x)
                character.x = object.x-character.width;
           else if(character.x >= object.x)
                character.x = object.x + object.width;
       }

       else if (character.x >= object.x && character.x <= object.x + object.width)
       {
           if (character.y <= object.y)
            character.y = object.y - character.height;
           else if (character.y >= object.y)
            character.y = object.y + object.height;
       }
    }      


   // move character
function move (e) {
    game.addEventListener('keydown', move, true);
    
        if (e.keyCode === 39){
            checkCollision(character, shape1A)
            checkCollision(character, shape1B)
            checkCollision(character, shape1C)
            checkCollision(character, shape1D)
            checkCollision(character, shape1E)

            character.x+=5;
            
        }
        if(e.keyCode === 37){
            checkCollision(character, shape1A)
            checkCollision(character, shape1B)
            checkCollision(character, shape1C)
            checkCollision(character, shape1D)
            checkCollision(character, shape1E)
            character.x-=5;
        }
        if(e.keyCode === 40){
            checkCollision(character, shape1A)
            checkCollision(character, shape1B)
            checkCollision(character, shape1C)
            checkCollision(character, shape1D)
            checkCollision(character, shape1E)
            character.y+=5;
        }
        if(e.keyCode === 38){
            checkCollision(character, shape1A)
            checkCollision(character, shape1B)
            checkCollision(character, shape1C)
            checkCollision(character, shape1D)
            checkCollision(character, shape1E)
            character.y-=5;
        }
    
    c.clearRect (0,0, game.width, game.height);
    character.update();
    shape1A.updateShapes();
    shape1B.updateShapes();
    shape1C.updateShapes();
    shape1D.updateShapes();
    shape1E.updateShapes();
    shape2A.updateShapes();
    shape2B.updateShapes();
    shape2C.updateShapes();
    shape2D.updateShapes();
    shape3A.updateShapes();
    shape3B.updateShapes();
    shape4A.updateShapes();
    shape4B.updateShapes();
    shape5.updateShapes();
    shape6A.updateShapes();
    shape6B.updateShapes();
    shape7.updateShapes();
    shape8A.updateShapes();
    shape8B.updateShapes();
    shape9.updateShapes();
    shape10A.updateShapes();
    shape10B.updateShapes();
    shape10C.updateShapes();
    shape10D.updateShapes();
    shape10E.updateShapes();
    }
   document.onkeydown = move;