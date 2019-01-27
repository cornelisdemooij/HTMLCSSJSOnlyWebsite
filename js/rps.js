// Variables:
let mainMenuLog = "";
let opponents = [ "Cornelis", "Joren" ];
let chosenOpponent = "";

// Functions:
async function loadIntro() {
  appendToMainMenuLog("<div>Welcome to Rock Paper Scissors!</div>");
  appendToMainMenuLog("<div style='font-size: 30px; line-height: 160%'>👊</div>");
  appendToMainMenuLog("<div style='font-size: 30px; line-height: 160%'>✋</div>");
  appendToMainMenuLog("<div style='font-size: 30px; line-height: 160%'>✌</div><br/>");

  loadOpponents();
}
function loadOpponents() {
  appendToMainMenuLog("<div>Please pick an opponent: </div>");
  let portraits = "<div class='portraits'>";
  for (opponent in opponents) {
    portraits += "<img src='./images/games/RPS/" + opponents[opponent] + ".png' " + 
                 "onclick='chosenOpponent = \"" + opponents[opponent] +  "\"; console.log(chosenOpponent);'>";
  }
  portraits += "</div>";
  appendToMainMenuLog(portraits);
}

async function appendToMainMenuLog(content) {
  mainMenuLog += content;
  document.getElementById("output-content").innerHTML = mainMenuLog;
  await sleep(500);
}

// Helper functions:
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}