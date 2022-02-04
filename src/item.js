class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isSpecial() {
    return this.name === 'Aged Brie' || this.name === 'Backstage passes to a TAFKAL80ETC concert' || this.name === 'Sulfuras, Hand of Ragnaros';
  }
}

module.exports = Item;