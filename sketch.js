var p = 6;
var f = 4;
var a = 207;
var z = 82;
var e = "Pb";

var speed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  fill(20);
  strokeWeight(5);
  stroke(200);
  ellipse(width/2,height/2,175);
  textAlign(CENTER,BOTTOM);
  textSize(60);
  noStroke();
  fill(255);
  text(e,width/2,height/2);
  let subTextW = width/2;
  let subTextH = height/2;
  textSize(22);
  textAlign(RIGHT,TOP);
  text(str(a-z) + " n°  ",subTextW,subTextH);
  textAlign(LEFT,TOP);
  text("  " + str(z) + " p+",subTextW,subTextH);
  textAlign(CENTER,TOP);
  text("|",subTextW,subTextH);
  let electronsLeft = z-f;
  for (let i=0; i<p; i++) {
    let d = i*50+250;
    fill(0,0);
    stroke(50);
    strokeWeight(7);
    ellipse(width/2,height/2,d);
    fill(240,255,140);
    noStroke();
    let c = d*PI;
    let angularMomentum = speed/c*360;
    let n;
    if (i == p-1) {
      n = f;
    } else if (i == p-2) {
      n = electronsLeft;
    } else {
      n = 2*(i+1)**2;
      electronsLeft -= n;
    }
    for (let j=0; j<n; j++) {
      let step = 360/n;
      let angle = angularMomentum*frameCount+j*step;
      ellipse(width/2+cos(angle)*d/2,height/2+sin(angle)*d/2,15);
    }
  }
}
