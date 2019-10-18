function setup() {
  createCanvas(400, 400);
}

function draw() {
  c = color(100, 100, 200);
  background(c);
  ellipse(200,200, 58,50);
  // fill(c);
  ellipse(200,300, 66,98);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
}
