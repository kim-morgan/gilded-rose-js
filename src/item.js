class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isSpecial() {
    return this.name === 'Aged Brie'
  }
}

module.exports = Item;