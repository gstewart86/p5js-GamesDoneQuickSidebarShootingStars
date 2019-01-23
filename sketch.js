
// Purple stars shooting up
// https://www.youtube.com/watch?v=GAK9b4zlg_Q

// TODO: maybe make the square outline a beginshape/endshape so I can
// randomly modulate the height of each vertex, to give it some fuzziness

// TODO: try something like this
// https://www.deviantart.com/denorelli/art/Visual-effects-for-glorious-Blubber-Busters-Game-699880557
// Specifically either the shooting star with tails or rapidly appearing circles

// for either of these, use : https://p5js.org/reference/#/p5/beginShape

// or also try any of these: https://www.deviantart.com/mexpiratered/favourites/67646313/FX


var debug = true;
var looping = true;

// stars
var segments = 5;
// cross lines
var linebeat = 0;
var lineHearbeat;
var lineFreq=150;
var ALPHA = 50;
var COLOR = (255, 0, 255, ALPHA);

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  shooting = new starstorm()
}

function altLine(x, y, angle, length) {
  var x2 = x + (length * cos(angle));
  var y2 = y + (length * sin(angle));
  line(x, y, x2, y2);
}

// I want to be able to modify the resolution of a line such
// that the number of segments can increase with a slidebar
function altLineTest(x, y, angle, length, resolution=1) {
  for (var i = 0; i < resolution; i++) {
    var x2 = x + (length * cos(angle));
    var y2 = y + (length * sin(angle));
    line(x, y, x2, y2);
  }

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (looping){
    noLoop();
    looping = false;
  } else {
    loop();
    looping = true;
  }
}

function draw() {
  background(0,0,0);
  if (debug){
    push();
    fill(255);
    text('framerate: ' + frameRate().toFixed(3), 50, 50);
    text("looping: " + looping, 60, 60);
    // text("line angle: " + lineHearbeat, 70, 70);
    pop();
  }
  shooting.animate();

  strokeWeight(1);
  strokeCap(ROUND);
  stroke(255, 0, 255, 150);
  noFill();
  rect(5,5, width-10,height-10);

  // plaid lines
  var c = color(255, 0, 255, ALPHA);
  // for (var i = 0; i <= width+500; i++) {
  //   line(this.x, this.y, this.x,this.y+this.height+(i*10));
  // }


  // cross-lines
  // for (var i = -500; i < width+500; i+=lineFreq) {
  //
  //   lineHearbeat = map(sin(linebeat), -1, 1, -10, 10);
  //   linebeat += .001
  //   altLine(i*lineHearbeat, 0, radians(45), 800);
  // }
  stroke(255, 0, 255, 25);
  strokeWeight(1);
  strokeCap(NORMAL);
  for (var i = -500; i < width+500; i+=lineFreq+mouseX) {
    altLine(i, 0, radians(45), height*2);
  }

  for (var i = width + 500; i > -500; i-=lineFreq) {
    altLine(i, 0, radians(135), height*2);
  }

}
