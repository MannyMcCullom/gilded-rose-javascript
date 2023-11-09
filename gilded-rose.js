export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality () {
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
}

class Vest extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "+5 Dexterity Vest";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 10;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 20;
    } else {
      quality;
    }
  }
}

class Brie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "Aged Brie";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 2;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 0;
    } else {
      quality;
    }
  }
}

class Elixir extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "Elixir of the Mongoose";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 5;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 7;
    } else {
      quality;
    }
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "Sulfuras, Hand of Ragnaros";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 0;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 80;
    } else {
      quality;
    }
  }
}

class Pass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "Backstage passes to a TAFKAL80ETC concert";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 15;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 20;
    } else {
      quality;
    }
  }
}

class Cake extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    
    if (!name) {
      this.name = "Conjured Mana Cake";
    } else {
      name;
    }

    if (!sellIn) {
      this.sellIn = 3;
    } else {
      sellIn;
    }

    if (!quality) {
      this.quality = 6;
    } else {
      quality;
    }
  }
}

export let items = [];

items.push(new Vest());
items.push(new Brie());
items.push(new Elixir());
items.push(new Sulfuras());
items.push(new Pass());
items.push(new Cake());

export { Vest, Brie, Elixir, Sulfuras, Pass, Cake };