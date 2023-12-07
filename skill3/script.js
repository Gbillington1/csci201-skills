let pattern = 1; // Variable to store the current pattern

function setup() {
  createCanvas(window.innerWidth, window.innerHeight); // Create a canvas
  background(255); // Set the background color to white
  createButtons(); // Create pattern change buttons
}

function draw() {
  // Draw different patterns based on the value of 'pattern'
  if (pattern === 1) {
    drawPattern1();
  } else if (pattern === 2) {
    drawPattern2();
  } else if (pattern === 3) {
    drawPattern3();
  } else if (pattern === 4) {
    drawPattern4();
  }
}

// Function to draw the first pattern
// random circles at random locations
function drawPattern1() {
  background(255);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 50, 50);
}

// Function to draw the second pattern
// random circles in grid form
function drawPattern2() {
  background(255);
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      fill(random(255), random(255), random(255));
      ellipse(i, j, 15, 15);
    }
  }
}

// Function to draw the third pattern
// random rectangles in grid form
function drawPattern3() {

  background(255);
  for (let i = 0; i < width; i += 30) {
    for (let j = 0; j < height; j += 30) {
      fill(random(255), random(255), random(255));
      rect(i, j, 20, 20);
    }
  }
}

// Function to draw the fourth pattern
// random triangles in grid form
function drawPattern4() {
  background(255);
  for (let i = 0; i < width; i += 40) {
    for (let j = 0; j < height; j += 40) {
      fill(random(255), random(255), random(255));
      triangle(i, j, i + 20, j, i + 10, j + 20);
    }
  }
}

// Function to create pattern change buttons
function createButtons() {
  // Button to switch to pattern 1
  let pattern1Button = createButton('Pattern 1');
  pattern1Button.position(20, 20);
  pattern1Button.mousePressed(function() {
    pattern = 1;
  });

  // Button to switch to pattern 2
  let pattern2Button = createButton('Pattern 2');
  pattern2Button.position(20, 50);
  pattern2Button.mousePressed(function() {
    pattern = 2;
  });

  // Button to switch to pattern 3
  let pattern3Button = createButton('Pattern 3');
  pattern3Button.position(20, 80);
  pattern3Button.mousePressed(function() {
    pattern = 3;
  });

  // Button to switch to pattern 4
  let pattern4Button = createButton('Pattern 4');
  pattern4Button.position(20, 110);
  pattern4Button.mousePressed(function() {
    pattern = 4;
  });
}
