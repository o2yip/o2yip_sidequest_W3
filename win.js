function drawWin() {
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("You Win!", width / 2, 300);

  textSize(20);
  text("Congratulations! You escaped the forest safely!", width / 2, 360);
}

// Mouse input
function winMousePressed() {
  currentScreen = "start";
}

// Keyboard input
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}