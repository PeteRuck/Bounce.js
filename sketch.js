let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r,g,b;

function preload() {
  dvd = loadImage("khaos.png");
}

function setup() {
    createCanvas(800,600);
    x = random(width);
    y = random(height);
    xspeed = 4;
    yspeed = 4;
    pickColour();
}

function pickColour() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
    background(0);
    tint(r,g,b);
    image(dvd, x, y);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColour();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColour();
  }
  
  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColour();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColour();
  }
}
