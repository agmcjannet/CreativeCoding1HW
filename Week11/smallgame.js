// Character variables
var characterX = 75;
var characterY = 75;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

function setup() {
  createCanvas(720, 720);
}

function draw() {
  background(51, 0, 77);

  // Create Borders
  createBorders(20);

  // Create Maze
  createMaze(20);

  // Draw Character and handle movement
  drawCharacter();
  characterMovement();

  // Exit Text
  strokeWeight(5);
  stroke(221, 153, 255);
  fill(187, 51, 255);
  textStyle(BOLD);
  textSize(36);
  text("EXIT", width - 110, height - 50);

  // Check for victory condition
  if (characterX > width - 50 && characterY > height - 100) {
    fill(187, 51, 255);
    stroke(5);
    stroke(221, 153, 255);
    textSize(40);
    text("You Win!", width / 2 - 50, height / 2 - 20);
  }
}

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

function characterMovement() {
  // handle the keys
  if (keyIsDown(w)) {
    characterY -= 10;
  }
  if (keyIsDown(s)) {
    characterY += 10;
  }
  if (keyIsDown(a)) {
    characterX -= 10;
    console.log("movement: " + characterX);
  }
  if (keyIsDown(d)) {
    characterX += 10;
  }
}

function drawCharacter() {
  fill(187, 51, 255);
  stroke(221, 153, 255);
  strokeWeight(5);
  circle(characterX, characterY, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    characterX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    characterX += 10;
  } else if (keyCode === UP_ARROW) {
    characterY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    characterY += 10;
  }
}
