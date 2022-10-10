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
      this.updateQualityForItemsWithoutMinOrMaxQuality(item);
      this.reduceSellIn(item);
      this.updateQualityIfSellByDateGone(item);
    }
    return this.items;
  }

  updateQualityForItemsWithoutMinOrMaxQuality(item) {
    if (!this.isBrie(item) && !this.isBackstagePass(item) && !this.hasZeroQuality(item)) {
      if (!this.isLegendary(item)) {
        item.quality--;
      }

    } else {
      if (!this.hasMaxQuality(item)) {
        item.quality++;
        if (this.isBackstagePass(item)) {
          this.increaseQualityForBackstagePasses(item);
        }
      }
    }
  }

  updateQualityIfSellByDateGone(item) {
    if (this.sellByDateHasGone(item)) {
      if (!this.isBrie(item)) {
        if (!this.isBackstagePass(item)) {
          if (!this.hasZeroQuality(item)) {
            if (!this.isLegendary(item)) {
              item.quality--;
            }
          }
        } else {
          item.quality = 0;
        }
      } else {
        if (!this.hasMaxQuality(item)) {
          item.quality++;
        }
      }
    }
  }

  increaseQualityForBackstagePasses(item) {
    if (!this.hasMaxQuality(item)) {
      if (item.sellIn < 11) {
        item.quality++;
      }
      if (item.sellIn < 6) {
        item.quality++;
      }
    }
  }

  sellByDateHasGone(anItem) {
    return anItem.sellIn < 0;
  }

  reduceSellIn(anItem) {
    if (!this.isLegendary(anItem)) {
      anItem.sellIn--;
    }
  }

  hasMaxQuality(anItem) {
    return anItem.quality >= 50;
  }

  hasZeroQuality(anItem) {
    return anItem.quality == 0;
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
