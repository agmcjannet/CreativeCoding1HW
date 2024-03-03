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

// X and Y for moving obstacles
var shapes = [];

// Same character speed and thickness of maze
const characterspeed = 5;
const mazethickness = 20;

//-----------------------------   Set Up   ----------------------------------------

function setup() {
  createCanvas(720, 720);

  for (var i = 0; i < 5; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      xSpeed: generateRandomSpeed(),
      ySpeed: generateRandomSpeed()
    });
  }
}

//-----------------------------    Draw     ---------------------------------------

function draw() {
  background(51, 0, 77);

  // Create Borders
  createBorders(mazethickness);

  // Create Maze
  createMaze(mazethickness);

  // Draw Character and start movement
  characterMovement(characterspeed);
  drawCharacter(characterX, characterY);

  // Draw Moving Obstacles
  for (var i = 0; i < shapes.length; i++) {
    drawMovingObstacle(shapes[i]);
  }

  // Instructions and Text
  drawInstructions(width, height);
  drawExitText(width, height);

  // Draw X's
  drawXMarks(xMarks);

  // Check if through the exit
  checkWin(characterX, characterY, width, height);
}

//-----------------------------   Functions   ------------------------------------

// Create Borders
function createBorders(thickness) {
  noStroke();
  fill(238, 204, 255);
  rect(125, 0, width, thickness);
  rect(0, 0, thickness, height);
  rect(0, height - thickness, width, thickness);
  rect(width - thickness, 0, thickness, height - 100);
}

// Create Maze
function createMaze(thickness) {
  noStroke();
  fill(238, 204, 255);

  // Vertical Maze Pieces
  createVerticalMaze(125, 0, thickness, 125);
  createVerticalMaze(250, 0, thickness, 125);
  createVerticalMaze(575, 125, thickness, 375);
  createVerticalMaze(125, 270, thickness, 125);
  createVerticalMaze(125, 490, thickness, 125);
  createVerticalMaze(250, 250, thickness, 365);
  createVerticalMaze(370, 500, thickness, 200);
  createVerticalMaze(470, 600, thickness, 100);
  createVerticalMaze(450, 125, thickness, 125)

  // Horizontal Maze Pieces
  createHorizontalMaze(125, 0, width, thickness);
  createHorizontalMaze(250, 125, 200, thickness);
  createHorizontalMaze(575, 250, 125, thickness);
  createHorizontalMaze(125, 270, thickness);
  createHorizontalMaze(125, 490, thickness);
  createHorizontalMaze(250, 375, 325, thickness);
  createHorizontalMaze(470, 500, 125, thickness);
  createHorizontalMaze(20, 250, 125, thickness);
  createHorizontalMaze(125, 595, 125, thickness);
  createHorizontalMaze(250, 250, 125, thickness)
}

// Vertical Maze
function createVerticalMaze(x, y, w, h) {
  rect(x, y, w, h);
}

// Horizontal Maze
function createHorizontalMaze(x, y, w, h) {
  rect(x, y, w, h);
}

// Movement Function
function characterMovement(speed) {
  if (keyIsDown(upArrow)) {
    characterY -= speed;
  }
  if (keyIsDown(downArrow)) {
    characterY += speed;
  }
  if (keyIsDown(leftArrow)) {
    characterX -= speed;
    console.log("movement: " + characterX);
  }
  if (keyIsDown(rightArrow)) {
    characterX += speed;
  }
}

// Draw the circle character
function drawCharacter(x, y) {
  fill(187, 51, 255);
  stroke(221, 153, 255);
  strokeWeight(5);
  circle(x, y, 50);
}

// Draw Moving Obstacle
function drawMovingObstacle(shape) {
  noStroke();

  // Different colors of shapes
  if (shape === shapes[0]) {
    fill(255, 250, 229);               //tan
  } else if (shape === shapes[1]) {
    fill(230, 255, 230);               //mint
  } else if (shape === shapes[2]) {
    fill(221, 153, 255);               //pastel purple
  } else if (shape === shapes[3]) {
    fill(204, 229, 255);               //pastel blue
  } else if (shape === shapes[4]) {
    fill(255, 204, 229);               //pastel pink
  }

  circle(shape.x, shape.y, 30);

  shape.x += shape.xSpeed;
  shape.y += shape.ySpeed;

  if (shape.x > width) {
    shape.x = 0;
  }
  if (shape.x < 0) {
    shape.x = width;
  }
  if (shape.y > height) {
    shape.y = 0;
  }
  if (shape.y < 0) {
    shape.y = height;
  }
}

// Draw X's
function drawXMarks(marks) {
  strokeWeight(3);
  stroke(221, 153, 255);
  fill(247, 230, 255);
  textSize(50);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < marks.length; i++) {
    text('X', marks[i].x, marks[i].y);
  }
}

// Mouse Press Function
function mousePressed() {
  xMarks.push(createVector(mouseX, mouseY));
}

// Generate random speed
function generateRandomSpeed() {
  return Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}

// Instructions and Text
function drawInstructions(width, height) {
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
}

// Exit Text
function drawExitText(width, height) {
  strokeWeight(5);
  stroke(221, 153, 255);
  fill(187, 51, 255);
  textStyle(BOLD);
  textSize(36);
  textAlign(RIGHT);
  text("EXIT", width - 20, height - 50);
}

// Checking if circle has gone through the exit
function checkWin(characterX, characterY, canvasWidth, canvasHeight) {
  if (characterX > canvasWidth - 50 && characterY > canvasHeight - 100) {
    fill(221, 153, 255);
    stroke(5);
    stroke(187, 51, 255);
    textSize(40);
    textAlign(CENTER);
    text("You Win!", canvasWidth / 2 - 0, canvasHeight / 2 - 20);
  } else {
    drawCharacter(characterX, characterY);
  }
}
