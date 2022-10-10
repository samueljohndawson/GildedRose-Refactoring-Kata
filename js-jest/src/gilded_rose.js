class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }


  updateQuality() {
    for (let item of this.items) {
      if (!this.isBrie(item) && !this.isBackstagePass(item) && this.hasZeroQuality(item)) {
        if (!this.isLegendary(item)) {
          item.quality--
        }

      } else {
        if (!this.hasMaxQuality(item)) {
          item.quality++
          if (this.isBackstagePass(item)) {
            if (!this.hasMaxQuality(item)) {
              if (item.sellIn < 11) {
                item.quality++
              }
              if (item.sellIn < 6) {
                item.quality++
              }
            }
          }
        }
      }
      if (!this.isLegendary(item)) {
        item.sellIn--
      }
      if (item.sellIn < 0) {
        if (!this.isBrie(item)) {
          if (!this.isBackstagePass(item)) {
            if (item.quality > 0) {
              if (!this.isLegendary(item)) {
                item.quality--
              }
            }
          } else {
            item.quality = 0
          }
        } else {
          if (!this.hasMaxQuality(item)) {
            item.quality++
          }
        }
      }
    }

    return this.items;
  }

  hasMaxQuality(anItem) {
    return anItem.quality >= 50;
  }

  hasZeroQuality(anItem) {
    return anItem.quality > 0;
  }

  isBackstagePass(anItem) {
    return anItem.name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  isBrie(anItem) {
    return anItem.name == 'Aged Brie';
  }

  isLegendary(anItem) {
    return anItem.name == 'Sulfuras, Hand of Ragnaros';
  }
}

module.exports = {
  Item,
  Shop
}
