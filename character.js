
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

let character = new Character (420,340,10,10,'rgb(255,255,255)')

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
