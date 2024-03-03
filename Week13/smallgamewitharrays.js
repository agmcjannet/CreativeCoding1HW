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

// Maze pieces
var verticalMazePieces = [];
var horizontalMazePieces = [];

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

  // Vertical maze pieces in the array
  verticalMazePieces = [
    { x: 125, y: 0, w: mazethickness, h: 125 },
    { x: 250, y: 0, w: mazethickness, h: 125 },
    { x: 575, y: 125, w: mazethickness, h: 375 },
    { x: 125, y: 270, w: mazethickness, h: 125 },
    { x: 125, y: 490, w: mazethickness, h: 125 },
    { x: 250, y: 250, w: mazethickness, h: 365 },
    { x: 370, y: 500, w: mazethickness, h: 200 },
    { x: 470, y: 600, w: mazethickness, h: 100 },
    { x: 450, y: 125, w: mazethickness, h: 125 }
  ];

  // Horizontal maze pieces in the array
  horizontalMazePieces = [
    { x: 125, y: 0, w: width, h: mazethickness },
    { x: 250, y: 125, w: 200, h: mazethickness },
    { x: 575, y: 250, w: 125, h: mazethickness },
    { x: 125, y: 270, w: mazethickness },
    { x: 125, y: 490, w: mazethickness },
    { x: 250, y: 375, w: 325, h: mazethickness },
    { x: 470, y: 500, w: 125, h: mazethickness },
    { x: 20, y: 250, w: 125, h: mazethickness },
    { x: 125, y: 595, w: 125, h: mazethickness },
    { x: 250, y: 250, w: 125, h: mazethickness }
  ];
}

//-----------------------------    Draw     ---------------------------------------

function draw() {
  background(51, 0, 77);

  // Create Borders
  createBorders(mazethickness);

  // Draw Vertical Maze Pieces
  drawMazePieces(verticalMazePieces);

  // Draw Horizontal Maze Pieces
  drawMazePieces(horizontalMazePieces);

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

// Draw Maze Pieces
function drawMazePieces(mazePieces) {
  noStroke();
  fill(238, 204, 255);

  for (var i = 0; i < mazePieces.length; i++) {
    rect(mazePieces[i].x, mazePieces[i].y, mazePieces[i].w, mazePieces[i].h);
  }
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

