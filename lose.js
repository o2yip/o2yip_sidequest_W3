function drawLose() {
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("You Lose!", width / 2, 300);

  textSize(20);
  text("Oh no! You got eaten by a bear. Better luck next time!", width / 2, 360);
}

// Mouse input
function loseMousePressed() {
  currentScreen = "start";
}

// Keyboard input
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}