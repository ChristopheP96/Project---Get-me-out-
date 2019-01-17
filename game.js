
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
        
        if (crash === true) 
        {
            changeColor(object);
            syncBlinks(object);
        }

    return crash
}

//change color of touched

function changeColor(object){
    object.colorBlack = object.colorBlink;
}

function syncBlinks(object){

    switch (object) {
        case shape1A: 
        case shape1B:
        case shape1C: 
        case shape1D:
        case shape1E:
        case shape10A: 
        case shape10B:
        case shape10C: 
        case shape10D:
        case shape10E:

            shape1.forEach(function(shape1Item)
            {
                changeColor(shape1Item);
            });

            shape10.forEach(function(shape10Item)
            {
                changeColor(shape10Item);
            });
        break;

        case shape2A:
        case shape2B:
        case shape2C:
        case shape2D:
            shape2.forEach(function(shape2Item)
            {
                changeColor(shape2Item);
            });
        break;

        case shape3A:
        case shape3B:
        case shape4A:
        case shape4B:
        case shape6A:
        case shape6B:
        case shape8A:
        case shape8B:
        case shape9:
            shape3.forEach(function(shape3Item)
            {
                changeColor(shape3Item);
            });

            shape4.forEach(function(shape4Item)
            {
                changeColor(shape4Item);
            });

            shape6.forEach(function(shape6Item)
            {
                changeColor(shape6Item);
            });

            shape8.forEach(function(shape8Item)
            {
                changeColor(shape8Item);
            });

            changeColor(shape9);
        break;

        case shape5:
        case shape7:
            changeColor(shape5);
            changeColor(shape7);
        break;
    
        default:
            break;
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
