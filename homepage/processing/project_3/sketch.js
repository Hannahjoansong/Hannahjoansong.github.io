function setup() {
  createCanvas(800, 200);
  }

function draw() {
  c = color(100, 100, 200);
  background(20);
  strokeJoin(ROUND);

  fill(253, 0, 0);
  arc(300, 53, 83, 83, PI, TWO_PI, CHORD);
  noStroke();
  rect(265, 50, 75, 20);
  triangle(260, 50, 260, 95, 300, 50);
  triangle(285, 70, 300, 95, 315, 70);
  triangle(320, 70, 340, 95, 340, 70);
  fill(253);
  ellipse(290, 40, 15, 25);
  ellipse(320, 40, 15, 25);
  fill(0, 0, 255);
  circle(293, 40, 10);
  circle(323, 40, 10);

  fill(255, 184, 82);
  arc(400, 53, 81, 81, PI, TWO_PI, CHORD);
  noStroke();
  rect(365, 50, 75, 20);
  triangle(360, 50, 360, 95, 400, 50);
  triangle(385, 70, 400, 95, 415, 70);
  triangle(420, 70, 440, 95, 440, 70);
  fill(253);
  ellipse(390, 40, 15, 25);
  ellipse(420, 40, 15, 25);
  fill(0, 0, 255);
  circle(393, 40, 10);
  circle(423, 40, 10);

  fill(255, 184, 255);
  arc(500, 53, 81, 81, PI, TWO_PI, CHORD);
  noStroke();
  rect(465, 50, 75, 20);
  triangle(460, 50, 460, 95, 500, 50);
  triangle(485, 70, 500, 95, 515, 70);
  triangle(520, 70, 540, 95, 540, 70);
  fill(253);
  ellipse(490, 40, 15, 25);
  ellipse(520, 40, 15, 25);
  fill(0, 0, 255);
  circle(493, 40, 10);
  circle(523, 40, 10);

  fill(0, 255, 255);
  arc(600, 53, 81, 81, PI, TWO_PI, CHORD);
  noStroke();
  rect(565, 50, 75, 20);
  triangle(560, 50, 560, 95, 600, 50);
  triangle(585, 70, 600, 95, 615, 70);
  triangle(620, 70, 640, 95, 640, 70);
  fill(253);
  ellipse(590, 40, 15, 25);
  ellipse(620, 40, 15, 25);
  fill(0, 0, 255);
  circle(593, 40, 10);
  circle(623, 40, 10);



  strokeWeight(3);
  fill(255, 255, 0);
  arc(200, 60, 80, 80, 26, radians(325));
  stroke(0);
  fill(253);
  ellipse(200, 40, 10, 10);
  
  
 
  }
  