let song;
function setup() {
  createCanvas(900, 600);
  
}

function draw() {
  background(0);
  if (mouseIsPressed) {

    c = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  } else {
  fill(255, 150, 82);
  }
  arc(mouseX + 100, mouseY + 13, 81, 81, PI, TWO_PI, CHORD);
  noStroke();
  rect(mouseX + 65, mouseY + 10, 75, 20);
  triangle(mouseX + 60, mouseY + 5, mouseX + 60, mouseY + 55, mouseX + 100, mouseY + 10);
  triangle(mouseX + 85, mouseY + 28, mouseX + 100, mouseY + 55, mouseX + 115, mouseY + 28);
  triangle(mouseX + 120, mouseY + 28, mouseX + 140, mouseY + 55, mouseX + 140, mouseY + 28);
  fill(253);
  ellipse(mouseX + 90, mouseY, 15, 25);
  ellipse(mouseX + 120, mouseY, 15, 25);
  fill(0, 0, 255);
  circle(mouseX + 93, mouseY, 10);
  circle(mouseX + 123, mouseY, 10);

}  











