
let startScreen = document.getElementById("start-screen")
startScreen.width = window.innerWidth;
startScreen.height = window.innerHeight;



let canvas = document.getElementById("game");
let c = canvas.getContext('2d');
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;


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