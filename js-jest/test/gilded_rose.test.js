const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("lowersSellInAndQualityByOneForNormalItems", function () {
    const gildedRose = new Shop([new Item("item1", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("lowersSellInAndQualityByOneForNormalItems2", function () {
    const gildedRose = new Shop([new Item("item2", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("qualityDegradesTwiceAsFastOnceSellByDateHasPassed", function () {
    const gildedRose = new Shop([new Item("item1", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("qualityOfAnItemIsNeverNegative", function () {
    const gildedRose = new Shop([new Item("item1", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("agedBrieIncreasesInQualityEachDay", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("agedBrieQualityIncreasesTwiceAsFastOnceSellByDateHasPassed", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("qualityOfAnItemIsNeverMoreThan50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("sulfurasSellInDoesNotReduce", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
  });

  it("sulfurasQualityDoesNotReduce", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("backstagePassesIncreasesByTwoWhenSellInIsMoreThanFiveAndLessThanEleven1", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("backstagePassesIncreasesByTwoWhenSellInIsMoreThanFiveAndLessThanEleven1", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("backstagePassesIncreasesByThreeWhenSellInIsMoreThanZeroAndLessSix", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
  });

  it("backstagePassesIncreasesByThreeWhenSellInIsMoreThanZeroAndLessSix", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
  });

  it("backstagePassesQualityBecomesZeroWhenSellInIsZero", function () {
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

describe("Gilded Rose", function () {
  it("goldMasterTest", function () {

    const { execSync } = require('child_process');
    const output = execSync('node test/texttest_fixture.js', { encoding: 'utf-8' });
    expect(output).toBe(`OMGHAI!

-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 2, 0
Elixir of the Mongoose, 5, 7
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 49
Backstage passes to a TAFKAL80ETC concert, 5, 49
Conjured Mana Cake, 3, 6

-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest, 9, 19
Aged Brie, 1, 1
Elixir of the Mongoose, 4, 6
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 14, 21
Backstage passes to a TAFKAL80ETC concert, 9, 50
Backstage passes to a TAFKAL80ETC concert, 4, 50
Conjured Mana Cake, 2, 5

-------- day 2 --------
name, sellIn, quality
+5 Dexterity Vest, 8, 18
Aged Brie, 0, 2
Elixir of the Mongoose, 3, 5
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 13, 22
Backstage passes to a TAFKAL80ETC concert, 8, 50
Backstage passes to a TAFKAL80ETC concert, 3, 50
Conjured Mana Cake, 1, 4

-------- day 3 --------
name, sellIn, quality
+5 Dexterity Vest, 7, 17
Aged Brie, -1, 4
Elixir of the Mongoose, 2, 4
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 12, 23
Backstage passes to a TAFKAL80ETC concert, 7, 50
Backstage passes to a TAFKAL80ETC concert, 2, 50
Conjured Mana Cake, 0, 3

-------- day 4 --------
name, sellIn, quality
+5 Dexterity Vest, 6, 16
Aged Brie, -2, 6
Elixir of the Mongoose, 1, 3
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 11, 24
Backstage passes to a TAFKAL80ETC concert, 6, 50
Backstage passes to a TAFKAL80ETC concert, 1, 50
Conjured Mana Cake, -1, 1

-------- day 5 --------
name, sellIn, quality
+5 Dexterity Vest, 5, 15
Aged Brie, -3, 8
Elixir of the Mongoose, 0, 2
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 10, 25
Backstage passes to a TAFKAL80ETC concert, 5, 50
Backstage passes to a TAFKAL80ETC concert, 0, 50
Conjured Mana Cake, -2, 0

-------- day 6 --------
name, sellIn, quality
+5 Dexterity Vest, 4, 14
Aged Brie, -4, 10
Elixir of the Mongoose, -1, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 9, 27
Backstage passes to a TAFKAL80ETC concert, 4, 50
Backstage passes to a TAFKAL80ETC concert, -1, 0
Conjured Mana Cake, -3, 0

-------- day 7 --------
name, sellIn, quality
+5 Dexterity Vest, 3, 13
Aged Brie, -5, 12
Elixir of the Mongoose, -2, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 8, 29
Backstage passes to a TAFKAL80ETC concert, 3, 50
Backstage passes to a TAFKAL80ETC concert, -2, 0
Conjured Mana Cake, -4, 0

-------- day 8 --------
name, sellIn, quality
+5 Dexterity Vest, 2, 12
Aged Brie, -6, 14
Elixir of the Mongoose, -3, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 7, 31
Backstage passes to a TAFKAL80ETC concert, 2, 50
Backstage passes to a TAFKAL80ETC concert, -3, 0
Conjured Mana Cake, -5, 0

-------- day 9 --------
name, sellIn, quality
+5 Dexterity Vest, 1, 11
Aged Brie, -7, 16
Elixir of the Mongoose, -4, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 6, 33
Backstage passes to a TAFKAL80ETC concert, 1, 50
Backstage passes to a TAFKAL80ETC concert, -4, 0
Conjured Mana Cake, -6, 0

-------- day 10 --------
name, sellIn, quality
+5 Dexterity Vest, 0, 10
Aged Brie, -8, 18
Elixir of the Mongoose, -5, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 5, 35
Backstage passes to a TAFKAL80ETC concert, 0, 50
Backstage passes to a TAFKAL80ETC concert, -5, 0
Conjured Mana Cake, -7, 0

-------- day 11 --------
name, sellIn, quality
+5 Dexterity Vest, -1, 8
Aged Brie, -9, 20
Elixir of the Mongoose, -6, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 4, 38
Backstage passes to a TAFKAL80ETC concert, -1, 0
Backstage passes to a TAFKAL80ETC concert, -6, 0
Conjured Mana Cake, -8, 0

-------- day 12 --------
name, sellIn, quality
+5 Dexterity Vest, -2, 6
Aged Brie, -10, 22
Elixir of the Mongoose, -7, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 3, 41
Backstage passes to a TAFKAL80ETC concert, -2, 0
Backstage passes to a TAFKAL80ETC concert, -7, 0
Conjured Mana Cake, -9, 0

-------- day 13 --------
name, sellIn, quality
+5 Dexterity Vest, -3, 4
Aged Brie, -11, 24
Elixir of the Mongoose, -8, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 2, 44
Backstage passes to a TAFKAL80ETC concert, -3, 0
Backstage passes to a TAFKAL80ETC concert, -8, 0
Conjured Mana Cake, -10, 0

-------- day 14 --------
name, sellIn, quality
+5 Dexterity Vest, -4, 2
Aged Brie, -12, 26
Elixir of the Mongoose, -9, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 1, 47
Backstage passes to a TAFKAL80ETC concert, -4, 0
Backstage passes to a TAFKAL80ETC concert, -9, 0
Conjured Mana Cake, -11, 0

-------- day 15 --------
name, sellIn, quality
+5 Dexterity Vest, -5, 0
Aged Brie, -13, 28
Elixir of the Mongoose, -10, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 0, 50
Backstage passes to a TAFKAL80ETC concert, -5, 0
Backstage passes to a TAFKAL80ETC concert, -10, 0
Conjured Mana Cake, -12, 0

-------- day 16 --------
name, sellIn, quality
+5 Dexterity Vest, -6, 0
Aged Brie, -14, 30
Elixir of the Mongoose, -11, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, -1, 0
Backstage passes to a TAFKAL80ETC concert, -6, 0
Backstage passes to a TAFKAL80ETC concert, -11, 0
Conjured Mana Cake, -13, 0

-------- day 17 --------
name, sellIn, quality
+5 Dexterity Vest, -7, 0
Aged Brie, -15, 32
Elixir of the Mongoose, -12, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, -2, 0
Backstage passes to a TAFKAL80ETC concert, -7, 0
Backstage passes to a TAFKAL80ETC concert, -12, 0
Conjured Mana Cake, -14, 0

-------- day 18 --------
name, sellIn, quality
+5 Dexterity Vest, -8, 0
Aged Brie, -16, 34
Elixir of the Mongoose, -13, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, -3, 0
Backstage passes to a TAFKAL80ETC concert, -8, 0
Backstage passes to a TAFKAL80ETC concert, -13, 0
Conjured Mana Cake, -15, 0

-------- day 19 --------
name, sellIn, quality
+5 Dexterity Vest, -9, 0
Aged Brie, -17, 36
Elixir of the Mongoose, -14, 0
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, -4, 0
Backstage passes to a TAFKAL80ETC concert, -9, 0
Backstage passes to a TAFKAL80ETC concert, -14, 0
Conjured Mana Cake, -16, 0
`);
  });
});
