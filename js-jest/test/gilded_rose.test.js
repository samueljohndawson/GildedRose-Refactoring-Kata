const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("lowersSellInAndQualityByOneForNormalItems", function() {
    const gildedRose = new Shop([new Item("item1", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("lowersSellInAndQualityByOneForNormalItems2", function() {
    const gildedRose = new Shop([new Item("item2", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("qualityDegradesTwiceAsFastOnceSellByDateHasPassed", function() {
    const gildedRose = new Shop([new Item("item1", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("qualityOfAnItemIsNeverNegative", function() {
    const gildedRose = new Shop([new Item("item1", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("agedBrieIncreasesInQualityEachDay", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("agedBrieQualityIncreasesTwiceAsFastOnceSellByDateHasPassed", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("qualityOfAnItemIsNeverMoreThan50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("sulfurasSellInDoesNotReduce", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
  });

  it("sulfurasQualityDoesNotReduce", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("backstagePassesIncreasesByTwoWhenSellInIsMoreThanFiveAndLessThanEleven1", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("backstagePassesIncreasesByTwoWhenSellInIsMoreThanFiveAndLessThanEleven1", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("backstagePassesIncreasesByThreeWhenSellInIsMoreThanZeroAndLessSix", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
  });

  it("backstagePassesIncreasesByThreeWhenSellInIsMoreThanZeroAndLessSix", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
  });

  it("backstagePassesQualityBecomesZeroWhenSellInIsZero", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  // it("conjuredItemsQualityDegradesTwiceAsFast", function() {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 11)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });





});
