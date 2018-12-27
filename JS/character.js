
c.fillStyle = 'rgb(255,255,255)';
c.fillRect(centerX, centerY, 20, 20);
c.stroke();


function move (e) {
    canvas.addEventListener('keydown', move, true);

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

    c.clearRect (0,0, canvas.width, canvas.height);
    c.fillRect(centerX, centerY, 20, 20);
}

document.onkeydown = move;