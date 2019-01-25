

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

//Draw Shapes
function Shapes (x, y, width, height, colorBlack, colorBlink){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colorBlack = colorBlack;
    this.colorBlink = colorBlink;

    this.updateShapes = function(){
    this.drawShapes();
    }

    this.drawShapes = function(){
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.colorBlack;
        c.fill();
        c.closePath();
    }
}

let black = 'rgb(0,0,0)';
let orange = 'rgb(247,141,27)';
let red = 'rgb(212,65,62)';
let blue = 'rgb(83,160,243)';
let green = 'rgb(11,186,14)';

//Shape 1
// color rgb(247,141,27)
let shape1A = new Shapes (280, 200, 40, 80,black, orange);
let shape1B = new Shapes (320, 200, 160, 40, black, orange);
let shape1C = new Shapes (440, 240, 40, 160, black, orange);
let shape1D = new Shapes (280, 360, 200, 40, black, orange);
let shape1E = new Shapes (280,320, 40, 40, black, orange);;


//Shape 2
//color rgb(212,65,62)
let shape2A = new Shapes (200, 400, 120, 40,  black, red);
let shape2B = new Shapes (200, 80, 40, 320,  black, red);
let shape2C = new Shapes (240, 80, 320, 40,  black, red);
let shape2D = new Shapes (520, 120, 40, 400,  black, red);

//shape 3
//color rgb(83,160,243)
let shape3A = new Shapes (80, 360, 40, 160,  black, blue);
let shape3B = new Shapes (120, 480, 400, 40,  black, blue);

//shape 4
//color rgb(83,160,243)
let shape4A = new Shapes (80, 80, 40, 200,  black, blue);
let shape4B = new Shapes (120, 80, 80, 40,  black, blue);


//shape 5
//color rgb(11,186,14)
let shape5 = new Shapes (40, 240, 40, 40, black, green);

//shape 6
// color rgb(83,160,243)
let shape6A = new Shapes (560, 480, 120, 40, black, blue);
let shape6B = new Shapes (680, 360, 40, 160,black, blue);


//shape 7
//color rgb(11,186,14)
let shape7 = new Shapes (720, 240, 40, 40, black, green);

//shape 8
//color rgb(83,160,243)
let shape8A = new Shapes (640, 80, 40, 40, black, blue);
let shape8B = new Shapes (680, 80, 40, 200, black, blue);

//shape 9
//color rgb(83,160,243)
let shape9 = new Shapes (560, 80, 40, 40, black, blue);


//final shape
//color rgb(247,141,27)
let shape10A = new Shapes (0, 0, 40, 160, black, orange);
let shape10B = new Shapes (40, 0, 720, 40, black, orange);
let shape10C = new Shapes (760, 0, 40, 600, black, orange);
let shape10D = new Shapes (0, 560, 760, 40, black, orange);
let shape10E = new Shapes (0, 200, 40, 360, black, orange);

let shape1 = [shape1A, shape1B, shape1C, shape1D, shape1E];
let shape2 =[shape2A, shape2B, shape2C, shape2D];
let shape3= [shape3A, shape3B];
let shape4= [shape4A, shape4B];
let shape6=[shape6A, shape6B];
let shape8=[shape8A, shape8B];
let shape10= [shape10A, shape10B, shape10C, shape10D, shape10E];
let maze1 = [
    [shape1A, shape1B, shape1C, shape1D, shape1E],
    [shape2A, shape2B, shape2C, shape2D],
    [shape3A, shape3B],
    [shape4A, shape4B],
    [shape5],
    [shape6A, shape6B],
    [shape7],
    [shape8A, shape8B],
    [shape9],
    [shape10A, shape10B, shape10C, shape10D, shape10E],
]

