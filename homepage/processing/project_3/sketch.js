function setup() {
  createCanvas(800, 600);
  }

function draw() {
  c = color(100, 100, 200);
  background(0);
  strokeJoin(ROUND);
  fill(255, 255, 0);
  arc(190, 60, 80, 80, 26, radians(325));
  fill(253);
  ellipse(200, 40, 10, 10);
  fill(253, 0, 0);
  arc(390, 60, 80, 80, radians(45), radians(225));
  strokeWeight(3);
  
  
 
  }
  