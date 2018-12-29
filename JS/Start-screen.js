
let startScreen = document.getElementById('start-screen')
let d = startScreen.getContext ('2d');
startScreen.width = window.innerWidth;
startScreen.height = window.innerHeight;

let radius = 10;

let squarreArray = [];

for (let i = 0; i < 150; i++) {
    let squarreX = Math.random() * (innerWidth) + 10;
    let squarreY = Math.random() * (innerHeight) + 10;
    let dx = (Math.random() - 0.5) * 9;
    let dy = (Math.random() - 0.5) * 9;
    squarreArray.push(new Squarre(squarreX, squarreY, dx, dy));
}


function Squarre(squarreX, squarreY, dx, dy) {
    this.squarreX = squarreX;
    this.squarreY = squarreY;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        d.fillStyle = 'rgb(255,255,255)';
        d.fillRect(this.squarreX, this.squarreY, 10, 10);
        d.stroke();
    }

    this.update = function (){
        if (this.squarreX + radius > innerWidth || this.squarreX - radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.squarreY + radius > innerHeight || this.squarreY - radius <0) {
            this.dy = -this.dy;
        }
    
        this.squarreX += this.dx;
        this.squarreY += this.dy;

        this.draw();
    }
}


function animate(){
    requestAnimationFrame(animate);
    d.clearRect(0,0, innerWidth, innerHeight);

    for (let i = 0; i < squarreArray.length; i++) {
        squarreArray[i].update();
    }
}

animate();