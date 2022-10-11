class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  BRIE: 'Aged Brie',
  PASS: 'Backstage passes to a TAFKAL80ETC concert',
  HAND: 'Sulfuras, Hand of Ragnaros',
  CONJURED: 'Conjured Mana Cake'
};



function updateBrie(item) {

  if (item.quality < 50) {
    item.quality++;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality++;
  }
}
function updateHand(item) {
  item.quality = 80;
}
function updatePass(item) {

  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
}
function updateConjured(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 2;
  }

  item.sellIn--;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 2;
  }

  if (item.quality < 0) {
    item.quality = 0
  }

}
function updateNormal(item) {

  if (item.quality > 0) {
    item.quality--;
  }
  item.sellIn--;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality--;
  }
}


class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {

    for (const item of this.items) {

      switch (item.name) {
        case ItemTypes.BRIE:
          updateBrie(item);
          continue;
        case ItemTypes.HAND:
          updateHand(item);
          continue;
        case ItemTypes.PASS:
          updatePass(item);
          continue;
        case ItemTypes.CONJURED:
          updateConjured(item);
          continue;
        default:
          updateNormal(item);
          continue;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
