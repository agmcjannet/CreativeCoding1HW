//----------------------------------Variables----------------------------------------

// Text Boxes
var input;
var textBoxes = [];

// Grid
var gridSize;

// Blacked-out squares
var blackedOutSquares = [
  { row: 0, col: 3 },
  { row: 0, col: 4 },
  { row: 0, col: 9 },
  { row: 1, col: 4 },
  { row: 1, col: 9 },
  { row: 2, col: 4 },
  { row: 2, col: 9 },
  { row: 3, col: 12 },
  { row: 3, col: 13 },
  { row: 3, col: 14 },
  { row: 4, col: 0 },
  { row: 4, col: 1 },
  { row: 4, col: 5 },
  { row: 4, col: 6 },
  { row: 4, col: 7 },
  { row: 4, col: 14 },
  { row: 5, col: 10 },
  { row: 6, col: 3 },
  { row: 6, col: 8 },
  { row: 6, col: 9 },
  { row: 7, col: 3 },
  { row: 7, col: 11 },
  { row: 8, col: 5 },
  { row: 8, col: 6 },
  { row: 8, col: 11 },
  { row: 9, col: 4 },
  { row: 10, col: 0 },
  { row: 10, col: 7 },
  { row: 10, col: 8 },
  { row: 10, col: 9 },
  { row: 10, col: 13 },
  { row: 10, col: 14 },
  { row: 11, col: 0 },
  { row: 11, col: 1 },
  { row: 11, col: 2 },
  { row: 12, col: 5 },
  { row: 12, col: 10 },
  { row: 13, col: 5 },
  { row: 13, col: 10 },
  { row: 14, col: 5 },
  { row: 14, col: 10 },
  { row: 14, col: 11 },
];

// Dropdown for clues
var dropdown;
var dropdownWidth = 50;
var dropdownHeight = 30;
var dropdownX = 225;
var dropdownY = 583;

// Clues
var clues = [
   "1 Across: Airer of '48 Hours' and '60 Minutes', \n1 Down: At the home of: Fr.",
  "2 Down: Benjamin Netanyahu's nickname",
  "3 Down: 'Get real for heaven's sake!'",
  "4 Across: Inscribe, as on a trophy, \n4 Down: Airline that doesn't schedule flights on Shabbat",
  "5 Down: Actress Spelling of 'Beverly Hills 90210'",
  "6 Down: Handhold for a rock climber",
  "7 Down: Genre for Cardi B and Nicki Minaj",
  "8 Across: Bottom half of a 45, 8 Down: Lawyer's document",
  "9 Down: Teenage witch of TV",
  "10 Down: '_ Superman!'",
  "11 Down: Casino cube",
  "12 Down: Long, long time",
  "13 Across: Clue for the clueless",
  "14 Down: Kind of personality a go-getter has",
  "15 Across: Actress Loughlin of 'Full House'", 
  "16 Across: 10:1, e.g.",
  "17 Across: Website with a 'Buy It Now' option",
  "18 Across: Not give _ /not care",
  "19 Across: 'A Doll's House' playwright Henrik",
  "20 Across: Butane-filled item for smokers",
  "21 Down: Brand of taco shells and salads",
  "22 Down: Profs' aides",
  "23 Across: '_ the land of the free...'",
  "24 Across: Clumsy",
  "25 Down: Someone who might say 'There, there'",
  "26 Down: Funeral vehicle",
  "27 Across: Exercises that work the glutes, quads and abs, \n27 Down: Pinch pennies",
  "28 Down: Resident of Doha",
  "29 Down: _ Tolkein, author of 'The Lord of the Rings'",
  "30 Down: Actress Thurman",
  "31 Down: Bruce Wayne's home, for one",
  "32 Across: Russian refusal",
  "33 Down: One living under a bridge, in fairy tales",
  "34 Across:'Krazy _'",
  "35 Across: 'At Wit's End' humorist Bombeck",
  "36 Across: With 44-Across, N.B.A. player once married to a Kardashian, \n36 Down: Greg _, first American winner of the Tour de France",
  "37 Across: 'Who am _ judge?'",
  "38 Across: Kind of rock for which New Hampshire is known",
  "39 Down: Wedding vow",
  "40 Down: Male turkey",
  "41 Across: Con's opposite",
  "42 Across: 'The Godfather' crowd",
  "43 Down: 'Somehow it all gets done'",
  "44 Across: See 36 Across",
  "45 Across: Communication means for the deaf, for short",
  "46 Across: Stiffly formal",
  "47 Across: Star of Broadway's 'Fiddler on the Roof', \n47 Down: Clearasil target, in slang",
  "48 Down: Went 'Hello...ello...llo...lo...'",
  "49 Down: Keep on the shelves",
  "50 Across: Tilted, as printed letters",
  "51 Down: True-blue",
  "52 Across: To the _ degree",
  "53 Across: 'Forget about it!'... \nor a clue to the starts of 20-, 27- and 47-Across",
  "54 Down: How thumbs are twiddled",
  "55 Down: Middle of the face",
  "56 Down: May or June gown wearer",
  "57 Down: Mom's mom", 
  "58 Down: Get taller",
  "59 Down: _ Perignon",
  "60 Down: Rock music subgenre",
  "61 Down: Was in first place",
  "62 Across Indicaiton that it's time to take out the trash",
  "63 Across: Old Russain ruler",
  "64 Across: Final Greek letter",
  "65 Across: Singer of 'Let it Go' in Disney's 'Frozen'",
  "66 Across: Bingo-like casino game",
  "67 Across: Runway walker",
  "68 Across: Applied Calirol to , perhaps",
  "69 Across: Crunchy, as carrots"

];

var correctAnswers = [
  ['C', 'B', 'S', '', '', 'E', 'T', 'C', 'H', '', 'B', 'S', 'I', 'D', 'E'],
  ['H', 'I', 'N', 'T', '', 'L', 'O', 'R', 'I', '', 'R', 'A', 'T', 'I', 'O'],
  ['E', 'B', 'A', 'Y', '', 'A', 'R', 'A', 'P', '', 'I', 'B', 'S', 'E', 'N'],
  ['Z', 'I', 'P', 'P', 'O', 'L', 'I', 'G', 'H', 'T', 'E', 'R', '', '', ''],
  ['', '', 'O', 'E', 'R', '', '', '', 'O', 'A', 'F', 'I', 'S', 'H', ''],
  ['S', 'Q', 'U', 'A', 'T', 'J', 'U', 'M', 'P', 'S', '', 'N', 'Y', 'E', 'T'],
  ['K', 'A', 'T', '', 'E', 'R', 'M', 'A', '', '', 'L', 'A', 'M', 'A', 'R'],
  ['I', 'T', 'O', '', 'G', 'R', 'A', 'N', 'I', 'T', 'E', '', 'P', 'R', 'O'],
  ['M', 'A', 'F', 'I', 'A', '', '', 'O', 'D', 'O', 'M', '', 'A', 'S', 'L'],
  ['P', 'R', 'I', 'M', '', 'Z', 'E', 'R', 'O', 'M', 'O', 'S', 'T', 'E', 'L'],
  ['', 'I', 'T', 'A', 'L', 'I', 'C', '', '', '', 'N', 'T', 'H', '', ''],
  ['', '', '', 'N', 'O', 'T', 'H', 'I', 'N', 'G', 'D', 'O', 'I', 'N', 'G'],
  ['D', 'E', 'L', 'A', 'Y', '', 'O', 'D', 'O', 'R', '', 'C', 'Z', 'A', 'R'],
  ['O', 'M', 'E', 'G', 'A', '', 'E', 'L', 'S', 'A', '', 'K', 'E', 'N', 'O'];
  ['M', 'O', 'D', 'E', 'L', '', 'D', 'Y', 'E', 'D', '', '', 'R', 'A', 'W']
];

//----------------------------------Set Up----------------------------------------


function setup() {
  createCanvas(655, 680);
  gridSize = 455 / 15;

  // Text Boxes
  for (var i = 0; i < 15; i++) {
    textBoxes[i] = [];
    for (var j = 0; j < 15; j++) {
      if (!BlackedOut(i, j)) {
        // Set initial text as the placeholder
        var placeholderText = getInitialText(i, j);
        crosswordTextBoxes(i, j, placeholderText);
      }
    }
  }

  // Dropdown for clues
  dropdown = createSelect();
  dropdown.position(dropdownX, dropdownY);
  dropdown.size(dropdownWidth, dropdownHeight);
  dropdown.elt.style.fontSize = '22px';
  for (var i = 1; i <= 69; i++) {
    dropdown.option(i);
  }

  // Button for checking answers
  checkButton = createButton('Check Answers');
  checkButton.position(430, 590);
  checkButton.mousePressed(checkAnswers);
}

function crosswordTextBoxes(i, j, placeholderText) {
  textBoxes[i][j] = createInput('');
  textBoxes[i][j].position(110 + j * gridSize + 2, 110 + i * gridSize + 2);
  textBoxes[i][j].size(gridSize - 0.5, gridSize - 0.5);
  textBoxes[i][j].style('font-size', '20px');
  textBoxes[i][j].style('text-align', 'center');
  textBoxes[i][j].attribute('placeholder', placeholderText);

  textBoxes[i][j].input(function () {
    textBoxes[i][j].value(textBoxes[i][j].value().toUpperCase());
  });
}



//------------------------------------Draw-----------------------------------------


function draw() {
  background(200);

  // Title Text
  drawTitleText();

  // Black-out square
  fill(1);
  rect(100, 100, 457, 457);

  // Crossword Border
  drawCrosswordBorder();

  // Select value from dropdown
  var selectedValue = dropdown.value();

  // Display the clue
  displayClue(selectedValue);
}


//----------------------------------Functions----------------------------------------

// Function to check answers and highlight incorrect boxes
function checkAnswers() {
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      if (!BlackedOut(i, j)) {
        var userAnswer = textBoxes[i][j].value().toUpperCase();
        var correctAnswer = getCorrectAnswer(i, j);

        // Compare the user's answer with the correct answer
        if (userAnswer !== correctAnswer) {
          // If incorrect, change background color to red
          textBoxes[i][j].style('background-color', 'salmon');
        } else {
          // If correct, reset background color
          textBoxes[i][j].style('background-color', '');
        }
      }
    }
  }
}

// Function to get correct answers based on position
function getCorrectAnswer(row, col) {
  return correctAnswers[row][col];
}


function drawTitleText() {
  textStyle(BOLD);
  textSize(45);
  text('Crossword', 20, 60);
  textSize(16);
  textStyle(NORMAL);
  text('based off The New York Times crossword puzzle', 290, 40);
  text('by Andrea Carla Micheals', 452, 55);
  text('no. 0302', 573, 70);
  textSize(24);
  text('Clues:', 135, 598);
}

function drawCrosswordBorder() {
  strokeWeight(5);
  line(100, 100, 100, 562); // right
  line(562, 100, 562, 562); // left
  line(100, 100, 562, 100); // top
  line(100, 562, 560, 562); // bottom
}

// Display the clue
function displayClue(selectedValue) {
  textSize(20);
  fill(0);

  // Check if a value is selected
  if (selectedValue) {
    var index = int(selectedValue) - 1;
    if (index >= 0 && index < clues.length) {
      // Display the clue
      text(clues[index], 16, 635);
      

    }
  }


}

// Blacked out squares
function BlackedOut(row, col) {
  for (var i = 0; i < blackedOutSquares.length; i++) {
    if (blackedOutSquares[i].row === row && blackedOutSquares[i].col === col) {
      return true;
    }
  }
  return false;
}

// Clue number placeholder
function getInitialText(row, col) {
if (row === 0 && col === 0) {
    return '1';
  } else if (row === 0 && col === 1) {
    return '2';
  } else if (row === 0 && col === 2) {
  return '3';
  } else if (row === 0 && col === 5) {
    return '4';
  } else if (row === 0 && col === 6) {
  return '5';     
  } else if (row === 0 && col === 7) {
    return '6';
  } else if (row === 0 && col === 8) {
  return '7'; 
  } else if (row === 0 && col === 10) {
    return '8';
  } else if (row === 0 && col === 11) {
  return '9';     
  } else if (row === 0 && col === 12) {
    return '10';
  } else if (row === 0 && col === 13) {
  return '11'; 
  } else if (row === 0 && col === 14) {
  return '12';
    
  } else if (row === 1 && col === 0) {
    return '13';
  } else if (row === 1 && col === 3) {
  return '14';
  } else if (row === 1 && col === 5) {
    return '15';
  } else if (row === 1 && col === 10) {
  return '16';    
    
  } else if (row === 2 && col === 0) {
    return '17';
  } else if (row === 2 && col === 5) {
  return '18'; 
  } else if (row === 2 && col === 10) {
    return '19';
    
  } else if (row === 3 && col === 0) {
  return '20';     
  } else if (row === 3 && col === 4) {
    return '21';
  } else if (row === 3 && col === 9) {
  return '22'; 
 
  } else if (row === 4 && col === 2) {
  return '23';     
  } else if (row === 4 && col === 9) {
    return '24';
  } else if (row === 4 && col === 12) {
  return '25'; 
  } else if (row === 4 && col === 13) {
  return '26'; 
    
   } else if (row === 5 && col === 0) {
  return '27';     
  } else if (row === 5 && col === 1) {
    return '28';
  } else if (row === 5 && col === 5) {
  return '29'; 
  } else if (row === 5 && col === 6) {
  return '30';
   } else if (row === 5 && col === 7) {
    return '31';
  } else if (row === 5 && col === 11) {
  return '32'; 
  } else if (row === 5 && col === 14) {
  return '33';
    
  } else if (row === 6 && col === 0) {
    return '34';
  } else if (row === 6 && col === 4) {
  return '35';
  } else if (row === 6 && col === 10) {
  return '36';
    
  } else if (row === 7 && col === 0) {
  return '37'; 
  } else if (row === 7 && col === 4) {
  return '38';
   } else if (row === 7 && col === 8) {
    return '39';
  } else if (row === 7 && col === 9) {
  return '40'; 
  } else if (row === 7 && col === 12) {
  return '41';
    
  } else if (row === 8 && col === 0) {
  return '42';
  } else if (row === 8 && col === 3) {
    return '43';
  } else if (row === 8 && col === 7) {
  return '44'; 
  } else if (row === 8 && col === 12) {
  return '45';
    
  } else if (row === 9 && col === 0) {
  return '46';
  } else if (row === 9 && col === 5) {
    return '47';
  } else if (row === 9 && col === 6) {
  return '48'; 
  } else if (row === 9 && col === 11) {
  return '49';
    
  } else if (row === 10 && col === 1) {
    return '50';
  } else if (row === 10 && col === 4) {
  return '51'; 
  } else if (row === 10 && col === 10) {
  return '52';
    
  } else if (row === 11 && col === 3) {
    return '53';
  } else if (row === 11 && col === 7) {
  return '54'; 
  } else if (row === 11 && col === 8) {
  return '55';
  } else if (row === 11 && col === 9) {
    return '56';
  } else if (row === 11 && col === 13) {
  return '57'; 
  } else if (row === 11 && col === 14) {
  return '58';
    
  } else if (row === 12 && col === 0) {
  return '59'; 
  } else if (row === 12 && col === 1) {
  return '60';
  } else if (row === 12 && col === 2) {
    return '61';
  } else if (row === 12 && col === 6) {
  return '62'; 
  } else if (row === 12 && col === 11) {
  return '63';  
    
  } else if (row === 13 && col === 0) {
    return '64';
  } else if (row === 13 && col === 6) {
  return '65'; 
  } else if (row === 13 && col === 11) {
  return '66'; 
    
  } else if (row === 14 && col === 0) {
    return '67';
  } else if (row === 14 && col === 6) {
  return '68'; 
  } else if (row === 14 && col === 12) {
  return '69'; 
    
  } else {
    return ''; 
  }
  
  
}

