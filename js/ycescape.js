// Variables:
// Input variables should be defined in "ycescapedata.js", which should be imported before this file.
if (!startLocation) {
  throw "startLocation is not defined. Make sure ycescapedata.js is imported and complete.";
}
if (!locations) {
  throw "locations is not defined. Make sure ycescapedata.js is imported and complete.";
}

let mainMenuLog = "";
let currentLocation = startLocation;

// Output functions:
function loadIntro() {
  goToLocation(currentLocation);
}
function goToLocation(shortName) {
  let newLocation = locations.find(function(location) {
    return location.shortName == shortName;
  });
  currentLocation = newLocation;
  //appendDivToOutput()
  appendDivToOutput(getDescription(currentLocation));
  showInputButtons();
  showLocationButtons();
}
function pickupItem(item) {
  if (currentLocation.removeItem(item)) {
    inventory.push(item);
    appendDivToOutput("You picked up the " + item + "!");
  } else {
    appendDivToOutput("Error: that item does not exist in the current location.");
  }
  showExamine();
}

// Input functions:
function showInputButtons() {
  document.getElementById("input").innerHTML = `
    <span class='action-button' onclick='showExamine()'>🔎</span> 
    <span class='action-button'>🖐</span> 
    <span class='action-button' onclick='showInventory()'>👋</span> 
    <span class='action-button'>🙏</span>
    <span class='action-button' onclick='showLocationButtons()'>👉</span>
  `;
}

// Menu functions:
function showExamine() {
  if (currentLocation.items.length > 0) {
    document.getElementById("menu").innerHTML = 
      currentLocation.items.map(itemToPickUpButton)
                            .reduce(function(previousValue, currentValue) {
                              return previousValue + "[" + currentValue + "] ";
                            }, "Pick up: ");
  } else {
    document.getElementById("menu").innerHTML = "There are no items here.";
  }
}
function showInventory() {
  if (inventory.length > 0) {
    document.getElementById("menu").innerHTML =
      inventory.map(itemToUseButton)
               .reduce(function(previousValue, currentValue) {
                return previousValue + "[" + currentValue + "] ";
              }, "Use: ");
  } else {
    document.getElementById("menu").innerHTML = "You don't have any items.";
  }
}
function showLocationButtons() {
  document.getElementById("menu").innerHTML = 
    currentLocation.adjacent.map(shortNameToLocation)
                            .map(locationToButton)
                            .reduce(function(previousValue, currentValue) {
                              return previousValue + "[" + currentValue + "] ";
                            }, "Go to: ");
}

// Helper functions:
function shortNameToLocation(shortName) {
  return locations.find(function(location) {
    return location.shortName == shortName;
  })
}
function shortNameToName(shortName) {
  let foundLocation = shortNameToLocation(shortName);
  return foundLocation.name;
}
function getDescription(location) {
  let adjacentNames = location.adjacent.map(shortNameToName);
  return "You are in the " + location.name + ". " + adjacentNamesToString(adjacentNames);
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
function getLocation(locations, shortName) {
  for (location in locations) {
    if (location.shortName == shortName) {
      return location;
    }
  }
  return new Location("", "Invalid shortName in getLocation", []);
}

function appendToOutput(content) {
  mainMenuLog += content;
  document.getElementById("output-content").innerHTML = mainMenuLog;
}
function appendDivToOutput(content) {
  appendToOutput("<div>" + content + "</div>");
}

function itemToPickUpButton(item) {
  return "<span class='item-button' onclick='pickupItem(\"" + item + "\");'>" + item + "</span>";
}
function itemToUseButton(item) {
  return "<span class='item-button' onclick='useItem(\"" + item + "\");'>" + item + "</span>";
}
function locationToButton(location) {
  return "<span class='location-button' onclick='goToLocation(\"" + location.shortName + "\");'>" + location.name + "</span>";
}