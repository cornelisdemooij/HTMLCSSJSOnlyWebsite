// Variables:
let inventory = [];   // Items that the user picks up go in here.
let startLocation = "h";
let locations = [
  new Location("s", "staircase", [ "h" ], [ "sword" ]),
  new Location("h", "hallway", [ "le", "re", "mr", "lr", "s", "w" ], [ "iron key", "note" ]),
  new Location("mr", "men's room", [ "h" ]),
  new Location("lr", "ladies' room", [ "h" ]),
  new Location("le", "left elevator", [ "h" ],),
  new Location("re", "right elevator", [ "h" ]),
  new Location("w", "wardrobe", [ "h", "p", "m", "l" ]),
  new Location("p", "secret passage", [ "w", "t" ]),
  new Location("m", "meditation room", [ "w" ]),
  new Location("l", "living room", [ "w", "k" ]),
  new Location("t", "thuis", [ "p", "oh" ], [], "", "Thuis.jpg"),
  new Location("k", "kitchen", [ "l", "o", "oh", "c" ]),
  new Location("o", "open office area", [ "k", "c", "oh" ]),
  new Location("c", "closed office area", [ "o", "k", "oh" ]),
  new Location("oh", "office hallway", [ "k", "o", "c", "1", "2", "3", "t" ]),
  new Location("1", "meeting room 1", [ "oh" ]),
  new Location("2", "meeting room 2", [ "oh" ]),
  new Location("3", "meeting room 3", [ "oh" ])
];
let actions = {
  // item: {
  //   location: action 
  // }
  "iron key" : {
    "men's room" : "open"
  }
}