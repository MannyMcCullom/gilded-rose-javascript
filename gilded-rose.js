export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Vest extends Item {
  constructor() {
    super();
    this.name = "+5 Dexterity Vest";
    this.sellIn = 10;
    this.quality = 20;
  }
}

class Brie extends Item {
  constructor() {
    super();
    this.name = "Aged Brie";
    this.sellIn = 2;
    this.quality = 0;
  }
}

class Elixir extends Item {
  constructor() {
    super();
    this.name = "Elixir of the Mongoose";
    this.sellIn = 5;
    this.quality = 7;
  }
}

class Sulfuras extends Item {
  constructor() {
    super();
    this.name = "Sulfuras, Hand of Ragnaros";
    this.sellIn = 0;
    this.quality = 80;
  }
}

class Pass extends Item {
  constructor() {
    super();
    this.name = "Backstage passes to a TAFKAL80ETC concert";
    this.sellIn = 15;
    this.quality = 20;
  }
}

class Cake extends Item {
  constructor() {
    super();
    this.name = "Conjured Mana Cake";
    this.sellIn = 3;
    this.quality = 6;
  }
}

export let items = [];

items.push(new Vest("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged zzzBrie", 2, 0));
items.push(new Elixir("Elixir of the Mongoose", 5, 7));
items.push(new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Pass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Cake("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
  }
};

console.log(items);