const Shop = require('../src/shop')

let normalItemMock = {
  name: "item",
  sellIn: 5,
  quality: 10
}

let shop = new Shop([normalItemMock]);

describe("Shop", () => {
  beforeEach(() => {
    shop = new Shop([normalItemMock]);
    normalItemMock = {
      name: "item",
      sellIn: 5,
      quality: 10
    }
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
  })
})