

/*let maze1 = [
[s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10],
[s10, 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   s10],
[s10, 0,   s4,  s4,  s4,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s9,  0,   s8,  s8,  0,   s10],
[s10, 0,   s4,  0,   0,   s2,  0,   0,   0,   0,   0,   0,   0,   s2,  0,   0,   0,   s8,  0,   s10],
[0,   0,   s4,  0,   0,   s2,  0,   0,   0,   0,   0,   0,   0,   s2,  0,   0,   0,   s8,  0,   s10],
[s10, 0,   s4,  0,   0,   s2,  0,   s1,  s1,  s1,  s1,  s1,  0,   s2,  0,   0,   0,   s8,  0,   s10],
[s10, s5,  s4,  0,   0,   s2,  0,   s1,  0,   0,   0,   s1,  0,   s2,  0,   0,   0,   s8,  s7,  s10],
[s10, 0,   0,   0,   0,   s2,  0,   0,   0,   0,   0,   s1,  0,   s2,  0,   0,   0,   0,   0,   s10],
[s10, 0,   0,   0,   0,   s2,  0,   s1,  0,   0,   0,   s1,  0,   s2,  0,   0,   0,   s6,  0,   s10],
[s10, 0,   s3,  0,   0,   s2,  0,   s1,  s1,  s1,  s1,  s1,  0,   s2,  0,   0,   0,   s6,  0,   s10],
[s10, 0,   s3,  0,   0,   s2,  s2,  s2,  0,   0,   0,   0,   0,   s2,  0,   0,   0,   s6,  0,   s10],
[s10, 0,   s3,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   s2,  0,   0,   0,   s6,  0,   s10],
[s10, 0,   s3,  s3,  s3,  s3,  s3,  s3,  s3,  s3,  s3,  s3,  s3,  s2,  s6,  s6,  s6,  s6,  0,   s10],
[s10, 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   s10],
[s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10],
];
*/

function Shapes (x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.updateShapes = function(){
    this.drawShapes();
    }

    this.drawShapes = function(){
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}


//Shape 1
let shape1A = new Shapes (280, 200, 40, 80,'rgb(247,141,27)')
let shape1B = new Shapes (320, 200, 160, 40,'rgb(247,141,27)')
let shape1C = new Shapes (440, 240, 40, 160,'rgb(247,141,27)')
let shape1D = new Shapes (280, 360, 200, 40,'rgb(247,141,27)')
let shape1E = new Shapes (280,320, 40, 40,'rgb(247,141,27)')

/*function drawShape1(){
    c.beginPath();
    c.rect(280,280,40,80);
    c.fillStyle = 'rgb(247,141,27)';
    c.fill();
    c.closePath();
}
*/

/*
c.beginPath();
c.fillStyle = 'rgb(247,141,27)';
c.moveTo(280,200);
c.lineTo(480,200);
c.lineTo(480,400);
c.lineTo(280,400);
c.lineTo(280,320);
c.lineTo(320,320);
c.lineTo(320,360);
c.lineTo(440,360);
c.lineTo(440,240);
c.lineTo(320,240);
c.lineTo(320,280);
c.lineTo(280,280);
c.lineTo(280,200);
c.fill();
*/

//Shape 2


let shape2A = new Shapes (200, 400, 120, 40, 'rgb(212,65,62)')
let shape2B = new Shapes (200, 80, 40, 320, 'rgb(212,65,62)')
let shape2C = new Shapes (240, 80, 320, 40, 'rgb(212,65,62)')
let shape2D = new Shapes (520, 120, 40, 400,'rgb(212,65,62)')


/*
let shape2 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(212,65,62)';
c.moveTo(320,400);
c.lineTo(320,440);
c.lineTo(200,440);
c.lineTo(200,80);
c.lineTo(560,80);
c.lineTo(560,520);
c.lineTo(520,520);
c.lineTo(520,120);
c.lineTo(240,120);
c.lineTo(240,400);
c.lineTo(320,400);
c.fill();
*/

//shape 3

let shape3A = new Shapes (80, 360, 40, 160, 'rgb(83,160,243)') 
let shape3B = new Shapes (120, 480, 400, 40, 'rgb(83,160,243)');


/*c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(520,480);
c.lineTo(520,520);
c.lineTo(80,520);
c.lineTo(80,360);
c.lineTo(120,360);
c.lineTo(120,480);
c.lineTo(520,480);
c.fill();
*/

//shape 4
let shape4A = new Shapes (80, 80, 40, 200, 'rgb(83,160,243)') 
let shape4B = new Shapes (120, 80, 80, 40, 'rgb(83,160,243)');

/*
let shape4 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(83,160,243))';
c.moveTo(200,80);
c.lineTo(200,120);
c.lineTo(120,120);
c.lineTo(120,270);
c.lineTo(80,270);
c.lineTo(80,80);
c.lineTo(280,80);
c.fill();
*/

//shape 5
let shape5 = new Shapes (40, 240, 40, 40, 'rgb(11,186,14)')

/*
let shape5 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(11,186,14)';
c.moveTo(80,270);
c.lineTo(40,270);
c.lineTo(40,230);
c.lineTo(80,230);
c.lineTo(80,270);
c.fill();
*/

//shape 6
let shape6A = new Shapes (560, 480, 120, 40, 'rgb(83,160,243)') 
let shape6B = new Shapes (680, 360, 40, 160, 'rgb(83,160,243)');
/*
let shape6 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(560,480,);
c.lineTo(680,480);
c.lineTo(680,360);
c.lineTo(720,360);
c.lineTo(720,520);
c.lineTo(560,520);
c.lineTo(560,480);
c.fill();
*/

//shape 7
let shape7 = new Shapes (720, 240, 40, 40, 'rgb(11,186,14)')

/*
let shape7 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(11,186,14)';
c.moveTo(720,280);
c.lineTo(760,280);
c.lineTo(760,240);
c.lineTo(720,240);
c.lineTo(720,280);
c.fill();
*/

//shape 8
let shape8A = new Shapes (640, 80, 40, 40, 'rgb(83,160,243)') 
let shape8B = new Shapes (680, 80, 40, 200, 'rgb(83,160,243)');
/*
let shape8 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(720,280);
c.lineTo(680,280);
c.lineTo(680,120);
c.lineTo(640,120);
c.lineTo(640,80);
c.lineTo(720,80);
c.lineTo(720,280);
c.fill();
*/

//shape 9

let shape9 = new Shapes (560, 80, 40, 40, 'rgb(83,160,243')

/*
let shape9 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(600,120);
c.lineTo(560,120);
c.lineTo(560,80);
c.lineTo(600,80);
c.lineTo(600,120);
c.fill();
*/

//final shape
let shape10A = new Shapes (0, 0, 40, 160,'rgb(247,141,27)')
let shape10B = new Shapes (40, 0, 720, 40,'rgb(247,141,27)')
let shape10C = new Shapes (760, 0, 40, 600,'rgb(247,141,27)')
let shape10D = new Shapes (0, 560, 760, 40,'rgb(247,141,27)')
let shape10E = new Shapes (0, 200, 40, 360,'rgb(247,141,27)')


/*
let shape10 = new Shapes ();
c.beginPath();
c.fillStyle = 'rgb(247,141,27)';
c.moveTo(0,0);
c.lineTo(800,0);
c.lineTo(800,600);
c.lineTo(0,600);
c.lineTo(0,200);
c.lineTo(40,200);
c.lineTo(40,560);
c.lineTo(760,560);
c.lineTo(760,40);
c.lineTo(40,40);
c.lineTo(40,160);
c.lineTo(0,160);
c.lineTo(0,0);
c.fill();
*/

