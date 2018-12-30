

// draws character
c.fillStyle = 'rgb(255,255,255)';
c.fillRect(centerX, centerY, 10, 10);
c.stroke();

// moves character
function move (e) {
    game.addEventListener('keydown', move, true);

    if (e.keyCode === 39){
        centerX+=5;
        
    }
    if(e.keyCode === 37){
        centerX-=5;
    }
    if(e.keyCode === 40){
        centerY+=5;
    }
    if(e.keyCode === 38){
        centerY-=5;
    }

    c.clearRect (0,0, game.width, game.height);
    c.fillRect(centerX, centerY, 10, 10);
}
document.onkeydown = move;