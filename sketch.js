var dots = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  textFont('arial');

}

function draw() {
  // put drawing code here
  var col1 = map (mouseX, 0, windowWidth, 255, 0);
  background (col1);

  fill(0);
  noStroke();
  textSize(15);
  text('press and drag the mouse', 50, 50);


for(var d = 0; d < dots.length; d += 5){
    dots[d].move();
    dots[d].display();
  }
}

function Dot(_x, _y, _diameter){

  this.x = _x;
  this.y = _y;
  this.diameter = _diameter

  this.move = function(){
    this.x = this.x + random(0,0);
    this.y = this.y + random(0,0);
  }

  this.display = function(){

    var col2 = map (mouseX, 0, windowWidth, 0, 255);
    noStroke();
    fill(col2);
    ellipse(this.x, this.y, this.diameter * 2);
  }
}

function mousePressed(){

  var r = random(3,20);
  var b = new Dot(mouseX, mouseY, r);
  dots.push(b);
}

function mouseDragged(){

  var r = random(3,20);
  var b = new Dot(mouseX, mouseY, r);
  dots.push(b);
}
