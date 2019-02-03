// Single buttons:
function itemToPickUpButton(item) {
  return "<span class='item-button' onclick='pickupItem(\"" + item + "\");'>" + item + "</span>";
}
function itemToUseButton(item) {
  return "<span class='item-button' onclick='showItemInteractions(\"" + item + "\");'>" + item + "</span>";
}
function locationToButton(shortName, location) {
  return "<span class='location-button' onclick='tryToGoToLocation(\"" + shortName + "\");'>" + location.name + "</span>";
}
function interactionToButton(item, interaction) {
  return '<span class="location-button" onclick="tryInteraction(\'' + item.replace(/'/g, "\\'") + '\', \'' + interaction.replace(/'/g, "\\'") + '\');">' + interaction + '</span>';
}

// Multiple buttons:
function itemsToPickupButtons(items) {
  if (items.length > 0) {
    let result = "Pick up: ";
    for (index in items) {
      let item = items[index];
      result += "[" + itemToPickUpButton(item) + "] ";
    }
    return result;
  } else {
    return "There are no items here.";
  }
}
function adjacentToButtons(adjacent) {
  if (adjacent.length > 0) {
    let result = "Go to: ";
    for (index in adjacent) {
      let shortName = adjacent[index];
      result += "[" + locationToButton(shortName, shortNameToLocation(shortName)) + "] ";
    }
    return result;
  } else {
    return "There is nowhere to go!";
  }
}
function interactionsToButtons(item, interactions) {
  let result = "Use " + item + " on: ";
  for (index in interactions) {
    let interaction = interactions[index];
    result += "[" + interactionToButton(item, interaction) + "] ";
  }
  return result;
}