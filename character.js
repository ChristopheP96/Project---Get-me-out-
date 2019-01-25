
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
        characterIsSurprised1();
        characterIsSurprised2();
    }
}

let character = new Character (420,340,10,10,'rgb(255,255,255)')


let sentence1 = "Wha.. wha... what? Where am I?";
let sentence2 = "Please, let me join my friends again!";
let font3 = "20px courrier new"
let font4 = "20px courrier new"
g = "";

characterIsSurprised1 = function() {
    c.font = font3;
    c.fillText(sentence1, 400, 300);
    c.globalCompositeOperation = 'destination-over';
    
    setTimeout(() => {
        font3 = "0px courier new"
    }, 22000);   
}

characterIsSurprised2 = function (){
    c.font = font4;
    c.fillText(g, 400, 300);
    c.globalCompositeOperation = 'destination-over';

    setTimeout(() => {
        g = sentence2;    
    }, 23000);

    setTimeout(() => {
       font4 = "0px courier new"
    }, 25000);
}
