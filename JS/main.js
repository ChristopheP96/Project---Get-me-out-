


let game = document.getElementById("game");
let c = game.getContext('2d');

c.beginPath();
    c.rect(400,200,10,10);
    c.fillStyle = 'rgb(255,255,255)';
    c.fill();
    c.closePath();
