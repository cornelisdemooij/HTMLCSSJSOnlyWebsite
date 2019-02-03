// Variables:
// Input variables should be defined in "ycescapedata.js", which should be imported before this file.
if (!locations) {
  throw "locations is not defined. Make sure ycescapedata.js is imported and complete.";
}

let mainMenuLog = "";
let currentLocation;
let output, input, menu;

// Output functions:
function loadIntro() {
  output = document.getElementById("output-content");
  input = document.getElementById("input");
  menu = document.getElementById("menu");
  goToLocation("h");
  showInputButtons();
}
function tryToGoToLocation(shortName) {
  let newLocation = locations[shortName];
  if (newLocation.open) {
    goToLocation(shortName);
  } else {
    appendDivToOutput("The door to " + newLocation.name + " is locked.");
  }
}
function goToLocation(shortName) {
  currentLocation = locations[shortName];
  appendDivToOutput(currentLocation.image());
  appendDivToOutput(getDescription(currentLocation));
  showLocationButtons();
}
function pickupItem(item) {
  if (currentLocation.pickupItem(item)) {
    inventory.push(item);
    appendDivToOutput("You picked up the " + item + "!");
  } else {
    appendDivToOutput("Error: that item does not exist in the current location.");
  }
  showExamine();
}
function tryInteraction(item, interaction) {
  let action = actions[item][interaction];
  if (action) {
    action();
  } else {
    appendDivToOutput("That doesn't seem to work...");
  }
}

// Input functions:
function showInputButtons() {
  input.innerHTML = `
    <span class='action-button' onclick='showExamine()'>🔎</span> 
    <span class='action-button' onclick='showInventory()'>🖐</span> 
    <span class='action-button' onclick='showInteractibles()'>👋</span> 
    <span class='action-button' onclick='showHelp()'>🙏</span>
    <span class='action-button' onclick='showLocationButtons()'>👉</span>
  `;
}

// Menu functions:
function showExamine() {
  menu.innerHTML = itemsToPickupButtons(currentLocation.items);
}
function showInventory() {
  if (inventory.length > 0) {
    menu.innerHTML = inventory.map(itemToUseButton)
                              .reduce(function(previousValue, currentValue) {
                                return previousValue + "[" + currentValue + "] ";
                              }, "Use: ");
  } else {
    menu.innerHTML = "You don't have any items.";
  }
}
function showItemInteractions(item) {
  let lockedLocations = currentLocation.adjacent.map(shortNameToLocation).filter(isLocationClosed);
  let possibleInteractions = ["Yourself", ...lockedLocations.map(locationToName)];
  menu.innerHTML = interactionsToButtons(item, possibleInteractions);
}
function showInteractibles() {

}
function showHelp() {
  menu.innerHTML = "Explore, pick up and use items, interact with stuff and try to escape. Note: not finished yet, no escape possible.";
}
function showLocationButtons() {
  menu.innerHTML = adjacentToButtons(currentLocation.adjacent);
}

// Helper functions:
function getDescription(location) {
  let adjacentNames = location.adjacent.map(shortNameToLocation);
  return "You are in " + location.name + ". " + adjacentNamesToString(adjacentNames);
}
function shortNameToLocation(shortName) {
  return locations[shortName];
}
function locationToName(location) {
  return location.name;
}
function isLocationClosed(location) {
  return !location.open;
}
function adjacentNamesToString(adjacentNames) {
  if (adjacentNames.length == 0) {
    return "There is nowhere to go.";
  } else if (adjacentNames.length == 1) {
    return "Next to you is the " + adjacentNames[0] + ".";
  } else {
    return "Around you are the " + adjacentNames.slice(0,-1).join(", ") + " and " + adjacentNames[adjacentNames.length-1] + ".";
  }
}