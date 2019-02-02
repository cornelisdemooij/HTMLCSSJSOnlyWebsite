// Variables:
let mainMenuLog = "";
let opponents = [ "Cornelis", "Joren" ];
let indexOpponent = -1;
let chosenOpponent = "";
let hands = [ "👊", "✋", "✌" ];
let winMatrix = [ [  0, -1, +1 ],   // Rock, ...
                  [ +1,  0, -1 ],   // Paper, ...
                  [ -1, +1,  0 ] ]; // Scissors!
let indexPreviousHandOpponent = Math.floor(Math.random() * 3);  // Needed for Joren's strategy.
let score;
let scoreOpponent;

// Output functions:
async function loadIntro() {
  appendToOutput("Welcome to Rock Paper Scissors!");
  await sleep(800);
  appendToOutput("<div class='hand'>👊</div>");
  await sleep(400);
  appendToOutput("<div class='hand'>✋</div>");
  await sleep(400);
  appendToOutput("<div class='hand'>✌</div>");
  await sleep(400);
  loadOpponents();
  showMenu();
}
function loadOpponents() {
  appendToOutput("<br/><div>Please pick an opponent: </div>");
  let portraits = "<div class='portraits'>";
  for (opponent in opponents) {
    portraits += "<img src='./images/games/RPS/" + opponents[opponent] + ".png' " + 
                 "onclick='beginGame(" + opponent + ");'>";
  }
  portraits += "</div>";
  appendToOutput(portraits);
}
function beginGame(opponent) {
  if (indexOpponent == -1) {
    indexOpponent = opponent;
    chosenOpponent = opponents[opponent];
    score = 0;
    scoreOpponent = 0;
    appendDivToOutput("You have chosen: " + chosenOpponent);
    showHands();
    appendDivToOutput("Pick a hand, 3, 2, 1: ");
  } else {
    appendDivToOutput("You already picked " + chosenOpponent + "!");
    appendDivToOutput("Pick a hand, 3, 2, 1: ");
  }
}

// Hands functions:
function showHands() {
  document.getElementById("hands").innerHTML = hands.map(handToStyledHand).join(" ");
}
function hideHands() {
  document.getElementById("hands").innerHTML = "";
}
function pickHand(indexHand) {
  let hand = hands[indexHand];
  let indexHandOpponent = pickHandOpponent(chosenOpponent);
  let handOpponent = hands[indexHandOpponent];
  appendDivToOutput("You picked " + hand + "! " +
                     chosenOpponent + " picked " + handOpponent + "!");
  let result = winMatrix[indexHand][indexHandOpponent];
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
}
function pickHandOpponent(name) {
  let nHands = hands.length;
  switch(name) {
    default:
    case "Cornelis":
      // Return a random choice of hand, with equal chance:
      return Math.floor(Math.random() * nHands);
    case "Joren":
      // Return a random choice between the hands that Joren didn't pick the last round:
      let oneOrTwo = Math.floor(Math.random() * (nHands-1)) + 1;
      indexPreviousHandOpponent = (indexPreviousHandOpponent + oneOrTwo) % nHands;
      return indexPreviousHandOpponent;
  }
}

// Menu functions:
function showMenu() {
  document.getElementById("menu").innerHTML = `
    <span class='menu-item'>OPTIONS</span> 
    <span class='menu-item' onclick='restart()'>RESTART</span>
  `;
}
function restart() {
  indexOpponent = -1;
  chosenOpponent = "";
  loadOpponents();
  hideHands();
}

// Helper functions:
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function appendToOutput(content) {
  mainMenuLog += content;
  document.getElementById("output-content").innerHTML = mainMenuLog;
}
function appendDivToOutput(content) {
  appendToOutput("<div>" + content + "</div>");
}
function handToStyledHand(value, index) {
  return "<span class='hand' onclick='pickHand(" + index + ");'>" + value + "</span>";
}