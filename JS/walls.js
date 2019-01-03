/*let maze1 = [
[s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10, s10],
[s10, 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   s10],
[s10, 0,   s4,  s4,  s4,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s2,  s9,  0,   s8,  s8,  0,   s10],
[s10, 0,   s4,  0,   0,   s2,  0,   0,   0,   0,   0,   0,   0,   s2,  0,   0,   0,   s8,  0,   s10],
[s10, 0,   s4,  0,   0,   s2,  0,   0,   0,   0,   0,   0,   0,   s2,  0,   0,   0,   s8,  0,   s10],
[0,   0,   s4,  0,   0,   s2,  0,   s1,  s1,  s1,  s1,  s1,  0,   s2,  0,   0,   0,   s8,  0,   s10],
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


function Shape(body, color){
    this.body = [
        {row : 1, column :2},
        {row : 1, column: 3},
        {row : 1, column: 3},
        {row : 1, column: 3},
        {row : 1, column: 3},
        {row : 1, column: 3},
    ];
    this.color = '';
}

//Shape 1
function drawShape1 (){
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
}

//Shape 2
function drawShape2(){
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
}

//shape 3
function drawShape3(){
c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(520,480);
c.lineTo(520,520);
c.lineTo(80,520);
c.lineTo(80,360);
c.lineTo(120,360);
c.lineTo(120,480);
c.lineTo(520,480);
c.fill();
}

//shape 4
function drawShape4(){
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
}

//shape 5
function drawShape5() {
c.beginPath();
c.fillStyle = 'rgb(11,186,14)';
c.moveTo(80,270);
c.lineTo(40,270);
c.lineTo(40,230);
c.lineTo(80,230);
c.lineTo(80,270);
c.fill();
}

//shape 6
function drawShape6(){
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
}

//shape 7
function drawShape7(){
c.beginPath();
c.fillStyle = 'rgb(11,186,14)';
c.moveTo(720,280);
c.lineTo(760,280);
c.lineTo(760,240);
c.lineTo(720,240);
c.lineTo(720,280);
c.fill();
}

//shape 8
function drawShape8(){
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
}

//shape 9
function drawShape9(){
c.beginPath();
c.fillStyle = 'rgb(83,160,243)';
c.moveTo(600,120);
c.lineTo(560,120);
c.lineTo(560,80);
c.lineTo(600,80);
c.lineTo(600,120);
c.fill();
}

//final shape
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


