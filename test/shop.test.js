const Shop = require('../src/shop')

let normalItemMock = {
  name: "item",
  sellIn: 5,
  quality: 10
}

let agedBrieMock = {
  name: "Aged Brie",
  sellIn: 5,
  quality: 10
}

let sulfurasMock = {
  name: 'Sulfuras, Hand of Ragnaros',
  sellIn: 5,
  quality: 10,
}

let shop = new Shop([normalItemMock]);

describe("Shop", () => {
  beforeEach(() => {
    normalItemMock = {
      name: "item",
      sellIn: 5,
      quality: 10
    }
    agedBrieMock = {
      name: "Aged Brie",
      sellIn: 5,
      quality: 10
    }
    sulfurasMock = {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 5,
      quality: 10,
    }
    shop = new Shop([normalItemMock, agedBrieMock, sulfurasMock]);
  });

  it("decreases the quality by one with an update", () => {
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(9);
  });

  it("decreases the sellIn by one with an update", () => {
    shop.updateQuality();
    expect(shop.items[0].sellIn).toBe(4);
  });

  it("quality degrades twice as fast after sellIn has passed", () => {
    for(let i = 0; i < 6; i++) {
      shop.updateQuality();
    }
    expect(shop.items[0].quality).toBe(3);
  });

  it('the quality of an item is never negative', () => {
    for(let i = 0; i < 10; i++) {
      shop.updateQuality();
    }
    expect(shop.items[0].quality).toBe(0);
  });

  it('AgedBrie increases in quality the older it gets', () => {
    shop.updateQuality();
    expect(shop.items[1].quality).toBe(11);
  });

  it('The quality of an item is never more than 50', () => {
    for ( let i = 0; i < 50; i++ ) {
      shop.updateQuality();
    }
    expect(shop.items[1].quality).toBe(50);
  });

  it('Sulfuras never has to be sold', () => {

  })
});