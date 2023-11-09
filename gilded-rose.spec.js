import { expect, describe, it } from "vitest";
import { Vest, Brie, Elixir, Sulfuras, Pass, Cake, Item, items } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("Reduces quality and sellIn of basic items by 1.", () => {
    // const testItem = new Item('basic', 10, 20);
    const testItem = new Vest('', '', '');

    items.push(testItem);
    console.log(testItem);
    testItem.updateQuality();
    console.log(testItem);

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(19);
  });

  // Once the sellIn days is less then zero, quality degrades twice as fast.
  it("Reduces quality of item by 2 when sellIn less than 0.", () => {
    const testItem = new Item("basic",-1, 3);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(1);
  });

  // The quality of an item is never negative.
  it("Quaity of item should never be less than zero.", () => {
    const testItem = new Item("basic",-1, -1);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(0);
  });

  // "Aged Brie" actually increases in quality the older it gets.
  it("Quaity of Aged Brie increases over time.", () => {
    const testItem = new Item("Aged Brie",10, 5);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(6);
  });

  // The quality of an item is never more than 50.
  it("Quaity of item should never be more than 50.", () => {
    const testItem = new Item("Aged Brie",10, 50);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(50);
  });

  // "Sulfuras, Hand of Ragnaros" being a legendary item,
  // never has to be sold nor does it decrease in quality.
  it("Quaity of Sulfuras, Hand of Ragnaros should never change.", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 0, 12);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(0);
    expect(testItem.quality).toBe(12);
  });

  // "Backstage passes to a TAFKAL80ETC concert"
  // increase in quality as it's sellIn value decreases
  it("Backstage passes to a TAFKAL80ETC concert increase in value as sellIn value decreases.", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 12);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(14);
    expect(testItem.quality).toBe(13);
  });

  // "Backstage passes to a TAFKAL80ETC concert"
  // increase in quality as it's sellIn value decreases
  //// Quality increases by 2 when there are 10 days or less left before the concert.
  it(`Quality of Backstage passes to a TAFKAL80ETC concert increases by 2\n       when there are 10 days or less left before the concert.`, () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 12);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(14);
  });

  // "Backstage passes to a TAFKAL80ETC concert"
  // increase in quality as it's sellIn value decreases
  //// Quality increases by 3 when there are 5 days or less left before the concert.
  it(`Quality of Backstage passes to a TAFKAL80ETC concert increases by 3\n       when there are 5 days or less left before the concert.`, () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 12);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(15);
  });

  // "Backstage passes to a TAFKAL80ETC concert"
  // increase in quality as it's sellIn value decreases
  //// Quality drops to 0 after the concert.
  it(`Quality of Backstage passes to a TAFKAL80ETC concert drop to 0 after the concert.`, () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 500);

    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(0);
  });
});

// console.log(items);