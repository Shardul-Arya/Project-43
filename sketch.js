var hr, mn, sc

function setup() {
  createCanvas(1200,700);
}

function draw() {
  background(255,255,255);  

  camera.position.x = 0
  camera.position.y = 50

  angleMode(DEGREES);
  sc = second();
  mn = minute();
  hr = hour();

  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

  push();
  rotate(scAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  
  push();
  rotate(mnAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,250,0);
  pop();

  push();
  rotate(hrAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  textSize(50);
  text(hr + ":" + mn + ":" + sc, -100, 300);

  drawSprites();
}