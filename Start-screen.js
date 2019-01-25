
setTimeout(() => {
    document.getElementById('title').style.display = "none";
}, 5000);

setTimeout(() => {
    animate();
}, 5000);


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

//properties of randomSquarres
for (let i = 0; i < 200; i++) {
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
    
    this.draw = function() 
    {
        d.fillStyle = 'rgb(255,255,255)';
        d.fillRect(this.squarreX, this.squarreY, this.radius, this.radius);
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

//Text

let font1 = "30px Courier New";
let font2 = "40px Courier New";
let randomLine1 = "Wooow, it's so nice to be all together";
let randomLine2 = "I'm so happy to be with my friends";
let randomLine3 = "Ha ha ha ha";
const instruction1 = "So much joy in here...";
const instruction2 = "It makes you want to stop it, no?";
const instruction3 = "Select a victim clicking on him";
const instructionsX = (startScreen.width/8)*3;
const instructionY = (startScreen.height/10);
let empty = "";
let blank = "";
let nothing = "";
let empty1 = "";
let empty2 = "";
let empty3 = "";


getTitle = function (){
    d.font = "100px Courier New";
    d.fillText("GET ME OUT", 200, 200);
}

randomCharacterSpeech1 = function (){
    d.font = font1;
    d.fillText(empty, squarreArray[90].squarreX, squarreArray[90].squarreY); 
    
    setTimeout(() => {
        empty = randomLine1
    }, 4000); 
}

randomCharacterSpeech2 = function (){
    d.font = font1;
    d.fillText(blank, squarreArray[50].squarreX, squarreArray[50].squarreY)

    setTimeout(() => {
        blank= randomLine2; 
    }, 5000);
}

randomCharacterSpeech3 = function (){
    d.font = font1;
    d.fillText(nothing, squarreArray[60].squarreX, squarreArray[60].squarreY)

    setTimeout(() => {
        nothing= randomLine3; 
    }, 6000);
   
    setTimeout(() => {
        font1 = "0px Courrier New"
    }, 10000);
}

 //Instructions
instructions1 = function(){
    d.font = font2;
    d.fillText(empty1, instructionsX, instructionY)
    
    setTimeout(() => {
        empty1= instruction1; 
    }, 6000);
}
    
instructions2 = function(){
    d.font = font2;
    d.fillText(empty2, instructionsX, instructionY+40)
    
    setTimeout(() => {
        empty2= instruction2; 
    }, 8000);
}

instructions3 = function(){
    d.font = font2;
    d.fillText(empty3, instructionsX, instructionY+80)
    
    setTimeout(() => {
        empty3= instruction3; 
    }, 10000);
       
    setTimeout(() => {
        font2 = "0px Courrier New"
    }, 14000);
}

function animate(){
    requestAnimationFrame(animate);
    d.clearRect(0,0, innerWidth, innerHeight);

    for (let i = 0; i < squarreArray.length; i++) {
        squarreArray[i].update();
    }
    
    randomCharacterSpeech1();
    randomCharacterSpeech2();
    randomCharacterSpeech3();
    instructions1();
    instructions2();
    instructions3();
}



