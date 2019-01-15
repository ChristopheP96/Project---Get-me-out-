
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
        
        if (crash === true) {
        changeColor(object);
    }
    return crash
}

//change color 

function changeColor(object){

    object.colorBlack = object.colorBlink;
    
    if (object === shape1A) {
        shape1B.colorBlack = shape1B.colorBlink;
        shape1C.colorBlack = shape1C.colorBlink;
        shape1D.colorBlack = shape1D.colorBlink;
        shape1E.colorBlack = shape1E.colorBlink;
    }
}

 // move character
function move (e) {

    game.addEventListener('keydown', move, true);
    
        if (e.keyCode === 39)
        {
            maze1.forEach(function(shapeItem)
            {
                shapeItem.forEach(function(item)
                {checkCollision(character, item);
                });
            });
        

        character.x+=5;
        }

        if(e.keyCode === 37)
        {
        
            maze1.forEach(function(shapeItem)
            {
                shapeItem.forEach(function(item)
                {checkCollision(character, item);
                });
            });

        
        character.x-=5;
        }

        if(e.keyCode === 40)
        {
        
            maze1.forEach(function(shapeItem)
            {
                shapeItem.forEach(function(item)
                {checkCollision(character, item);
                });
            });
        

        character.y+=5;
        }

        if(e.keyCode === 38)
        {
        
            maze1.forEach(function(shapeItem)
        {
            shapeItem.forEach(function(item)
            {checkCollision(character, item);
            });
        });
       

        character.y-=5;
        }
    

    //clear Rect
    c.clearRect (0,0, game.width, game.height);
    
    //Redraw character after each clear rect
    character.update();

    
    // redraw all shapes at each clear rect
    maze1.forEach(function(shapeItem)
        {
            shapeItem.forEach(function(item)
            {item.updateShapes();
            });
        });
    
}
   document.onkeydown = move;
