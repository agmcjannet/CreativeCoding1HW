//----------------------------   Variables   ---------------------------------------

// Character variables
var characterX = 75;
var characterY = 75;

// Arrow Key codes
var upArrow = 38;
var downArrow = 40;
var leftArrow = 37;
var rightArrow = 39;

// X Marks
var xMarks = [];

// X and Y for first moving obstacle
var shapeX1;
var shapeY1;
var shapeX1Speed;
var shapeY1Speed;

// X and Y for second moving obstacle
var shapeX2;
var shapeY2;
var shapeX2Speed;
var shapeY2Speed;

// X and Y for third moving obstacle
var shapeX3;
var shapeY3;
var shapeX3Speed;
var shapeY3Speed;

// X and Y for fourth moving obstacle
var shapeX4;
var shapeY4;
var shapeX4Speed;
var shapeY4Speed;

// X and Y for fifth moving obstacle
var shapeX5;
var shapeY5;
var shapeX5Speed;
var shapeY5Speed;



//-----------------------------   Set Up   ----------------------------------------

function setup() {
  createCanvas(720, 720);
  
  shapeX1 = random(width);
  shapeY1 = random(height);
  shapeX1Speed = generateRandomSpeed();
  shapeY1Speed = generateRandomSpeed();

  shapeX2 = random(width);
  shapeY2 = random(height);
  shapeX2Speed = generateRandomSpeed();
  shapeY2Speed = generateRandomSpeed();

  shapeX3 = random(width);
  shapeY3 = random(height);
  shapeX3Speed = generateRandomSpeed();
  shapeY3Speed = generateRandomSpeed();

  shapeX4 = random(width);
  shapeY4 = random(height);
  shapeX4Speed = generateRandomSpeed();
  shapeY4Speed = generateRandomSpeed();

  shapeX5 = random(width);
  shapeY5 = random(height);
  shapeX5Speed = generateRandomSpeed();
  shapeY5Speed = generateRandomSpeed();
}

//-----------------------------    Draw     ---------------------------------------

function draw() {
  background(51, 0, 77);

  // Create Borders
  createBorders(20);

  // Create Maze
  createMaze(20);

  // Draw Character and start movement
  drawCharacter();
  characterMovement();

  // Draw X's
  drawXMarks();

  // Movement instructions
  noStroke();
  fill(221, 153, 255);
  textStyle(BOLD);
  textSize(32);
  textAlign(RIGHT);
  text("Use the arrow keys to", width - 80, height - 660);
  text("move through the maze!", width - 60, height - 625);

  // X Path instructions
  noStroke();
  fill(221, 153, 255);
  textStyle(BOLD);
  textSize(28);
  textAlign(RIGHT);
  text("Click with the mouse", width - 400, height - 70);
  text("to mark wrong paths", width - 400, height - 45);
  
  // Exit Text
  strokeWeight(5);
  stroke(221, 153, 255);
  fill(187, 51, 255);
  textStyle(BOLD);
  textSize(36);
  text("EXIT", width - 20, height - 50);
  
  
  
// Moving Obstacle 1
noStroke()
fill (255, 250, 229)
circle(shapeX1, shapeY1, 30);


shapeX1 += shapeX1Speed;
shapeY1 += shapeY1Speed;

if(shapeX1 > width)
{
shapeX1 = 0;
}
if(shapeX1 < 0)
{
shapeX1 = width;
}
if(shapeY1 > height)
{
shapeY1 = 0;
}
if(shapeY1 < 0)
{
shapeY1 = height;
}

  

// Moving Obstacle 2
noStroke()
fill (230,255,230)
circle(shapeX2, shapeY2, 30);


shapeX2 += shapeX2Speed;
shapeY2 += shapeY2Speed;

if(shapeX2 > width)
{
shapeX2 = 0;
}
if(shapeX2 < 0)
{
shapeX2 = width;
}
if(shapeY2 > height)
{
shapeY2 = 0;
}
if(shapeY2 < 0)
{
shapeY2 = height;
} 

// Moving Obstacle 3
noStroke()
fill (221,153,255)
circle(shapeX3, shapeY3, 30);


shapeX3 += shapeX3Speed;
shapeY3 += shapeY3Speed;

if(shapeX3 > width)
{
shapeX3 = 0;
}
if(shapeX3 < 0)
{
shapeX3 = width;
}
if(shapeY3 > height)
{
shapeY3 = 0;
}
if(shapeY3 < 0)
{
shapeY3 = height;
}
  
  
  
// Moving Obstacle 4
noStroke()
fill(204, 229, 255)
circle(shapeX4, shapeY4, 30);

shapeX4 += shapeX4Speed;
shapeY4 += shapeY4Speed;

if (shapeX4 > width) {
shapeX4 = 0;
}
if (shapeX4 < 0) {
shapeX4 = width;
}
if (shapeY4 > height) {
shapeY4 = 0;
}
if (shapeY4 < 0) {
shapeY4 = height;
}

  
  
// Moving Obstacle 5
noStroke()
fill(255, 204, 229)
circle(shapeX5, shapeY5, 30);

shapeX5 += shapeX5Speed;
shapeY5 += shapeY5Speed;

if (shapeX5 > width) {
shapeX5 = 0;
}
if (shapeX5 < 0) {
shapeX5 = width;
}
if (shapeY5 > height) {
shapeY5 = 0;
}
if (shapeY5 < 0) {
shapeY5 = height;
}
  
  
  
  // Check to see if through the exit
  if (characterX > width - 50 && characterY > height - 100) {
    fill(187, 51, 255);
    stroke(5);
    stroke(221, 153, 255);
    textSize(40);
    textAlign(CENTER);
    text("You Win!", width / 2 - 0, height / 2 - 20);
  } else {
    drawCharacter();
  }
}

//-----------------------------   Functions   ------------------------------------


// Create the borders
function createBorders(thickness) {
  noStroke();
  fill(238, 204, 255);
  // top border
  rect(125, 0, width, thickness);
  // left border
  rect(0, 0, thickness, height);
  // bottom border
  rect(0, height - thickness, width, thickness);
  // right upper border
  rect(width - thickness, 0, thickness, height - 100);
}


// Create the Maze
function createMaze(thickness) {
  noStroke();
  fill(238, 204, 255);
  rect(125, 0, thickness, 125);
  rect(250, 0, thickness, 125);
  rect(250, 125, 200, thickness);
  rect(450, 125, thickness, 125);
  rect(575, 125, thickness, 375);
  rect(575, 250, 125, thickness);
  rect(125, 270, thickness, 125);
  rect(20, 250, 125, thickness);
  rect(125, 490, thickness, 125);
  rect(125, 595, 125, thickness);
  rect(250, 250, thickness, 365);
  rect(250, 250, 125, thickness);
  rect(250, 375, 325, thickness);
  rect(470, 500, 125, thickness);
  rect(370, 500, thickness, 200);
  rect(470, 600, 125, thickness);
  rect(470, 600, thickness, 100);
}


//Movement Function
function characterMovement() {
  // handle the keys
  if (keyIsDown(upArrow)) {
    characterY -= 5;
  }
  if (keyIsDown(downArrow)) {
    characterY += 5;
  }
  if (keyIsDown(leftArrow)) {
    characterX -= 5;
    console.log("movement: " + characterX);
  }
  if (keyIsDown(rightArrow)) {
    characterX += 5;
  }
}


// Draw the circle character
function drawCharacter() {
  fill(187, 51, 255);
  stroke(221, 153, 255);
  strokeWeight(5);
  circle(characterX, characterY, 50);
}


//Mouse X Marks
function drawXMarks() {
  strokeWeight(3);
  stroke (221, 153, 255)
  fill(247,230,255);
  textSize(50);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < xMarks.length; i++) {
    text('X', xMarks[i].x, xMarks[i].y);
  }
}


//Mouse Press Function
function mousePressed() {
  xMarks.push(createVector(mouseX, mouseY));
}

// Generate random speed
function generateRandomSpeed() {
  return Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}

