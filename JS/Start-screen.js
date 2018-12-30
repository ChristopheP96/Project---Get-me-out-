

let startScreen = document.getElementById('start-screen')
let d = startScreen.getContext ('2d');
startScreen.width = window.innerWidth;
startScreen.height = window.innerHeight;

var mouse = {
    x : undefined,
    y : undefined,
}

window.addEventListener('mousemove', 
    function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

let radius = 10;
let squarreArray = [];

for (let i = 0; i < 150; i++) {
    let squarreX = Math.random() * (innerWidth) + 10;
    let squarreY = Math.random() * (innerHeight) + 10;
    let dx = (Math.random() - 0.5) * 9;
    let dy = (Math.random() - 0.5) * 9;
    squarreArray.push(new Squarre(squarreX, squarreY, dx, dy));
}


function Squarre(squarreX, squarreY, dx, dy, radius) {
    this.squarreX = squarreX;
    this.squarreY = squarreY;
    this.dx = dx;
    this.dy = dy;
    this.radius = 10
    
    this.draw = function() {
        d.fillStyle = 'rgb(255,255,255)';
        d.fillRect(this.squarreX, this.squarreY, this.radius, this.radius);
        d.stroke();
    }

    this.update = function (){
        if (this.squarreX + this.radius > innerWidth || this.squarreX - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.squarreY + this.radius > innerHeight || this.squarreY - this.radius <0) {
            this.dy = -this.dy;
        }
    
        this.squarreX += this.dx;
        this.squarreY += this.dy;

        
        //interactivty with mouse
        if (mouse.x - this.squarreX <50 && mouse.x - this.squarreX > -50
            && mouse.y - this.squarreY <50 && mouse.y -this.squarreY > -50) {
            if (this.radius < 40) {
                this.radius +=1;
            }
            
        } else if (this.radius > 2) {
            this.radius -=1;
        }


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