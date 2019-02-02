class Location {
  constructor(shortName, name, adjacent, items = [], description = "", imageSrc = "") {
    this.shortName = shortName;
    this.name = name;
    this.adjacent = adjacent;
    this.items = items;
    this.description = description;
    this.imageSrc = imageSrc;
  }
  removeItem(itemToRemove) {
    let index = this.items.indexOf(itemToRemove);
    if (index == -1) {
      return false;
    } else {
      this.items.splice(index, 1);
      return true;
    }
  }
}

class Item {
  constructor(name) {

  }
}