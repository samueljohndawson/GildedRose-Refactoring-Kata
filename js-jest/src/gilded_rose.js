class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]

      if (this.notBrieOrBackStagePass(item)) {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality--;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality++;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (this.qualityIsLessThan50(item)) {
                      item.quality++;
              }
            }
            if (item.sellIn < 6) {
              if (this.qualityIsLessThan50(item)) {
                item.quality++;
              }
            }
          }
        }
      }
      this.reduceSellInByOne(item);
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality--;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
    }

    return this.items;
  }

  notBrieOrBackStagePass(anItem) {
    return anItem.name != 'Aged Brie' && anItem.name != 'Backstage passes to a TAFKAL80ETC concert';
  }

  qualityIsLessThan50(anItem) {
    return anItem.quality < 50 ? true : false;
    // if (item.quality < 50) {
    //   item.quality++;
    // }
  }

  reduceSellInByOne(anItem) {
    if (anItem.name != 'Sulfuras, Hand of Ragnaros') {
      anItem.sellIn--;
    }
  }
}

module.exports = {
  Item,
  Shop
}
