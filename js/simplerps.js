// Variables:
let mainMenuLog = "";
let hands = [ "👊", "✋", "✌" ];
let score = 0;
let scoreOpponent = 0;

function loadIntro() {
  appendToOutput("Welcome to Rock Paper Scissors!");
  appendToOutput("<div class='hand'>👊</div>");
  appendToOutput("<div class='hand'>✋</div>");
  appendToOutput("<div class='hand'>✌</div>");
  document.getElementById("hands").innerHTML = hands.map(handToStyledHand).join(" ");
  appendDivToOutput("Pick a hand, 3, 2, 1: ");
}

function pickHand(handYours) {
  let indexHandOpponent = Math.floor(Math.random() * 3);  // A random choice of hand, with equal chance.
  let handOpponent = hands[indexHandOpponent];
  appendDivToOutput("You picked " + handYours + "! Your opponent picked " + handOpponent + "!");
  let result = whoWon(handYours, handOpponent);
  switch(result) {
    case -1:
      scoreOpponent++;
      appendDivToOutput("You lost! The score is " + score + " to " + scoreOpponent + ".");
      break;
    case 0:
      appendDivToOutput("It's a draw! The score is " + score + " to " + scoreOpponent + ".");
      break;
    case 1:
      score++;
      appendDivToOutput("You won! The score is " + score + " to " + scoreOpponent + ".");
      break;
    default:
      appendDivToOutput("Someone messed with the rulebook...");
      break;
  }
  appendDivToOutput("Pick a hand: ");
}

function whoWon(handYours, handOpponent) {
  if (handYours == handOpponent) {
    return 0; // Draw.
  } else if (handYours == "👊" && handOpponent == "✌") {
    return 1; // You win.
  } else if (handYours == "✋" && handOpponent == "👊") {
    return 1; // You win.
  } else if (handYours == "✌" && handOpponent == "✋") {
    return 1; // You win.
  } else if (handYours == "👊" && handOpponent == "✋") {
    return -1; // You lose.
  } else if (handYours == "✋" && handOpponent == "✌") {
    return -1; // You lose.
  } else if (handYours == "✌" && handOpponent == "👊") {
    return -1; // You lose.
  }
}

// Helper functions:
function appendToOutput(content) {
  mainMenuLog += content;
  document.getElementById("output-content").innerHTML = mainMenuLog;
}
function appendDivToOutput(content) {
  appendToOutput("<div>" + content + "</div>");
}
function handToStyledHand(hand) {
  return "<span class='hand' onclick='pickHand(\"" + hand + "\");'>" + hand + "</span>";
}