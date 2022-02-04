const Item = require('../src/item')

const item = new Item('item', 5, 10);
const agedBrie = new Item('Aged Brie', 5, 10);
const backStagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10);
const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 5, 10);

describe("Item", () => {
  it("has attributes", () => {
    expect(item.name).toBe('item');
    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(10);
  });

  it('knows that aged brie is special', () => {
    expect(agedBrie.isSpecial()).toBe(true);
  });
});