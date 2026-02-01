function drawStart() {
  background(150, 200, 255);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(48);
  text("Welcome to the Forest Adventure!", width / 2, 300);

  textSize(24);
  text("Click to start your journey", width / 2, 400);
}

// Mouse input
function startMousePressed() {
  health = 3;        // reset health
  storyNode = 0;     // reset story
  round = 0;         // reset rounds
  currentScreen = "game";
}

// Keyboard input
function startKeyPressed() {
  if (keyCode === ENTER) {
    health = 3;
    storyNode = 0;
    round = 0;
    currentScreen = "game";
  }
}