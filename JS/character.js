
function Character (x, y, width, height, color){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;

this.update = function(){
    this.draw();
}

this.draw = function () {
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    }
}

let character = new Character (400,200,10,10,'rgb(255,255,255)')

// moves character
function move (e) {
    game.addEventListener('keydown', move, true);

    if (e.keyCode === 39){
        character.x+=5;
        
    }
    if(e.keyCode === 37){
        character.x-=5;
    }
    if(e.keyCode === 40){
        character.y+=5;
    }
    if(e.keyCode === 38){
        character.y-=5;
    }

    c.clearRect (0,0, game.width, game.height);
    character.update();
}
document.onkeydown = move;