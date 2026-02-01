// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------
// Player state
// ------------------------------
let health = 3;      // start with 3 hearts
let storyNode = 0;   // current story node
const maxHealth = 3;

// ------------------------------
// Story nodes with two choices: safe vs risky
// Safe = gain heart, Risky = lose heart
// ------------------------------
const story = [
  {
    text: "You wake up in a strange forest. Two paths lie ahead.",
    safe: {
      label: "Take the sunny path",
      effect: () => {
        health = Math.min(health + 1, maxHealth); // gain a heart
        nextNode();
      },
    },
    risky: {
      label: "Take the dark path",
      effect: () => {
        health--;
        checkHealth();
        nextNode();
      },
    },
  },
  {
    text: "The forest grows quiet. You hear footsteps behind you.",
    safe: {
      label: "Hide behind a tree",
      effect: () => {
        health = Math.min(health + 1, maxHealth);
        nextNode();
      },
    },
    risky: {
      label: "Run forward quickly",
      effect: () => {
        health--;
        checkHealth();
        nextNode();
      },
    },
  },
  {
    text: "You stumble on a root and hurt yourself.",
    safe: {
      label: "Take your time to recover",
      effect: () => {
        health = Math.min(health + 1, maxHealth);
        nextNode();
      },
    },
    risky: {
      label: "Keep moving fast",
      effect: () => {
        health--;
        checkHealth();
        nextNode();
      },
    },
  },
  {
    text: "You see the edge of the forest. Freedom is close!",
    safe: {
      label: "Walk carefully",
      effect: () => {
        health = Math.min(health + 1, maxHealth);
        endJourney();
      },
    },
    risky: {
      label: "Run to the exit",
      effect: () => {
        health--;
        checkHealth();
        endJourney();
      },
    },
  },
];

// ------------------------------
// Helper: go to next story node
// ------------------------------
function nextNode() {
  if (storyNode < story.length - 1) {
    storyNode++;
  } else {
    endJourney();
  }
}

// ------------------------------
// Helper: check for zero health
// ------------------------------
function checkHealth() {
  if (health <= 0) {
    currentScreen = "lose"; // immediate lose
  }
}

// ------------------------------
// Helper: finish journey
// ------------------------------
function endJourney() {
  if (health > 0) {
    currentScreen = "win"; // player survived
  } else {
    currentScreen = "lose"; // player lost all hearts
  }
}

// ------------------------------
// Buttons for choices
// ------------------------------
const safeBtn = { x: 250, y: 550, w: 200, h: 90, label: "SAFE" };
const riskyBtn = { x: 550, y: 550, w: 200, h: 90, label: "RISKY" };

// ------------------------------
// Draw game screen
// ------------------------------
function drawGame() {
  background(240, 230, 140);

  // ---- Health display ----
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(24);
  text("Health: " + "❤️".repeat(health), 40, 40);

  // ---- Title ----
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Your Journey", width / 2, 140);

  // ---- Story text ----
  textSize(20);
  textAlign(CENTER, TOP);
  text(story[storyNode].text, width / 2, 220, 600);

  // ---- Update button labels ----
  safeBtn.label = story[storyNode].safe.label;
  riskyBtn.label = story[storyNode].risky.label;

  // ---- Draw buttons ----
  drawGameButton(safeBtn);
  drawGameButton(riskyBtn);

  // ---- Cursor feedback ----
  cursor(isHover(safeBtn) || isHover(riskyBtn) ? HAND : ARROW);
}

// ------------------------------
// Draw button helper
// ------------------------------
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(180, 220, 255) : color(200, 220, 255));
  rect(x, y, w, h, 14);

  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input
// ------------------------------
function gameMousePressed() {
  if (isHover(safeBtn)) {
    story[storyNode].safe.effect();
  } else if (isHover(riskyBtn)) {
    story[storyNode].risky.effect();
  }
}

// ------------------------------
// Keyboard input
// ------------------------------
function gameKeyPressed() {
  if (keyCode === LEFT_ARROW) {
    story[storyNode].safe.effect();
  } else if (keyCode === RIGHT_ARROW) {
    story[storyNode].risky.effect();
  }
}