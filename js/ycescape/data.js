// Variables:
// Classes are defined in ycescapeclasses.js, make sure to import it before this one.
let inventory = [];   // Items that the user picks up go in here.
let locations = {
  "s" : new Location("the staircase", true, [ "h" ], [ "sword" ]),
  "h" : new Location("the hallway", true, [ "le", "re", "mr", "lr", "s", "w" ], [ "iron key 🗝", "note 🗒" ], [ "mensRoomDoor" ]),
  "mr" : new Location("the men's room", false, [ "h" ], [ "Deodorant 🌺" ]),
  "lr" : new Location("the ladies' room", true, [ "h" ]),
  "le" : new Location("the left elevator", true, [ "h" ],),
  "re" : new Location("the right elevator", true, [ "h" ]),
  "w" : new Location("the wardrobe", true, [ "h", "p", "m", "l" ]),
  "p" : new Location("the secret passage", true, [ "w", "t" ]),
  "m" : new Location("the meditation room", true, [ "w" ], [], [], "Zen.jpg"),
  "l" : new Location("the living room", true, [ "w", "k" ]),
  "t" : new Location("Thuis", true, [ "p", "oh" ], [], [], "Thuis.jpg"),
  "k" : new Location("the kitchen", true, [ "l", "o", "oh", "c" ]),
  "o" : new Location("the open office area", true, [ "k", "c", "oh" ]),
  "c" : new Location("the closed office area", true, [ "o", "k", "oh" ]),
  "oh" : new Location("the office hallway", true, [ "k", "o", "c", "1", "2", "3", "t" ]),
  "1" : new Location("meeting room 1", true, [ "oh" ]),
  "2" : new Location("meeting room 2", true, [ "oh" ]),
  "3" : new Location("meeting room 3", true, [ "oh" ])
};

let actions = {
  // item: {
  //   location: action 
  // }
  "iron key 🗝" : {
    "the men's room" : openMensRoom
  }
}

// Events:
function openMensRoom() {
  appendDivToOutput("You unlocked the door to the men's room.");
  locations["mr"].open = true;
}