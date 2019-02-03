class Location {
  constructor(name, open, adjacent, items = [], interactibles = [], imageSrc = "") {
    this.name = name;
    this.open = open;
    this.adjacent = adjacent;
    this.items = items;
    this.interactibles = interactibles;
    this.imageSrc = imageSrc;
  }
  toString() {
    return this.name;
  }
  pickupItem(itemToPickup) {
    let index = this.items.indexOf(itemToPickup);
    if (index == -1) {
      return false;
    } else {
      this.items.splice(index, 1);
      return true;
    }
  }
  dropItem(itemToDrop) {
    this.items.push(itemToDrop);
  }
  image() {
    if (this.imageSrc != "") {
      return "<img src='./images/games/YCEscape/locations/" + this.imageSrc + "'></img>";
    } else {
      return "";
    }
  }
}