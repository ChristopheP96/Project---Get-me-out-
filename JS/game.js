
//Turn Start Screen invisible to start the game
function closeStartScreen(){

    if (startScreen.style.display === "none") {
        startScreen.style.display = "block";
    } else {
        startScreen.style.display = "none"
    }
    return turnGameOn();
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
let character = new Character (420,340,10,10,'rgb(255,255,255)')
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

    let characterLeft = character.x;
    let characterRight = character.x+character.width;
    let characterTop = character.y;
    let characterBottom = character.y+character.height;

    let objectLeft = object.x;
    let objectRight = object.x + object.width;
    let objectTop = object.y;
    let objectBottom = object.y+object.height;

    let crash = false;

        if (characterTop === objectBottom 
            && characterLeft < objectRight 
            && characterRight > objectLeft)
        {
            crash=true;
            character.y = character.y+15;
            console.log("collision detected");
        }

        if (characterBottom === objectTop
            && characterLeft < objectRight 
            && characterRight > objectLeft)
        {
            crash=true;
            character.y = character.y-15;
            console.log("collision detected");
        }


        if (characterLeft === objectRight 
            && characterTop < objectBottom 
            && characterBottom > objectTop)
        {
            crash=true;
            character.x = character.x+15;
            console.log("collision detected");
        }
        

        if (characterRight === objectLeft 
            && characterTop < objectBottom 
            && characterBottom > objectTop)
        {
            crash=true;
            character.x = character.x-15;
            console.log("collision detected");
        }
        
        
    return crash
}


 // move character
function move (e) {
    game.addEventListener('keydown', move, true);
    
        if (e.keyCode === 39)
        {
        checkCollision(character, shape1B)
        checkCollision(character, shape1A)
        checkCollision(character, shape1C)
        checkCollision(character, shape1D)
        checkCollision(character, shape1E)
        checkCollision(character, shape2A)
        checkCollision(character, shape2B)
        checkCollision(character, shape2C)
        checkCollision(character, shape2D)
        checkCollision(character, shape3A)
        checkCollision(character, shape3B)
        checkCollision(character, shape4A)
        checkCollision(character, shape4B)
        checkCollision(character, shape5)
        checkCollision(character, shape6A)
        checkCollision(character, shape6B)
        checkCollision(character, shape7)
        checkCollision(character, shape8A)
        checkCollision(character, shape8B)
        checkCollision(character, shape9)
        checkCollision(character, shape10A)
        checkCollision(character, shape10B)
        checkCollision(character, shape10C)
        checkCollision(character, shape10D)
        checkCollision(character, shape10E)

        character.x+=5;
        }

        if(e.keyCode === 37)
        {
        checkCollision(character, shape1B)
        checkCollision(character, shape1A)
        checkCollision(character, shape1C)
        checkCollision(character, shape1D)
        checkCollision(character, shape1E)
        checkCollision(character, shape2A)
        checkCollision(character, shape2B)
        checkCollision(character, shape2C)
        checkCollision(character, shape2D)
        checkCollision(character, shape3A)
        checkCollision(character, shape3B)
        checkCollision(character, shape4A)
        checkCollision(character, shape4B)
        checkCollision(character, shape5)
        checkCollision(character, shape6A)
        checkCollision(character, shape6B)
        checkCollision(character, shape7)
        checkCollision(character, shape8A)
        checkCollision(character, shape8B)
        checkCollision(character, shape9)
        checkCollision(character, shape10A)
        checkCollision(character, shape10B)
        checkCollision(character, shape10C)
        checkCollision(character, shape10D)
        checkCollision(character, shape10E)

        character.x-=5;
        }

        if(e.keyCode === 40)
        {
        checkCollision(character, shape1B)
        checkCollision(character, shape1A)
        checkCollision(character, shape1C)
        checkCollision(character, shape1D)
        checkCollision(character, shape1E)
        checkCollision(character, shape2A)
        checkCollision(character, shape2B)
        checkCollision(character, shape2C)
        checkCollision(character, shape2D)
        checkCollision(character, shape3A)
        checkCollision(character, shape3B)
        checkCollision(character, shape4A)
        checkCollision(character, shape4B)
        checkCollision(character, shape5)
        checkCollision(character, shape6A)
        checkCollision(character, shape6B)
        checkCollision(character, shape7)
        checkCollision(character, shape8A)
        checkCollision(character, shape8B)
        checkCollision(character, shape9)
        checkCollision(character, shape10A)
        checkCollision(character, shape10B)
        checkCollision(character, shape10C)
        checkCollision(character, shape10D)
        checkCollision(character, shape10E)

        character.y+=5;
        }

        if(e.keyCode === 38)
        {
        checkCollision(character, shape1B)
        checkCollision(character, shape1A)
        checkCollision(character, shape1C)
        checkCollision(character, shape1D)
        checkCollision(character, shape1E)
        checkCollision(character, shape2A)
        checkCollision(character, shape2B)
        checkCollision(character, shape2C)
        checkCollision(character, shape2D)
        checkCollision(character, shape3A)
        checkCollision(character, shape3B)
        checkCollision(character, shape4A)
        checkCollision(character, shape4B)
        checkCollision(character, shape5)
        checkCollision(character, shape6A)
        checkCollision(character, shape6B)
        checkCollision(character, shape7)
        checkCollision(character, shape8A)
        checkCollision(character, shape8B)
        checkCollision(character, shape9)
        checkCollision(character, shape10A)
        checkCollision(character, shape10B)
        checkCollision(character, shape10C)
        checkCollision(character, shape10D)
        checkCollision(character, shape10E)

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



   //color change
/*
   changeShapeColor = function(){
    if (crash == true)
    {

    }

   }
*/