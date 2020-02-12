const {
  findTillTotal,
  calculateShopsTotal,
  getTotalCredit,
  countTreasures,
  tallyMPs
} = require("../array-methods/counting-problems/challenges.js");

const { expect } = require("chai");

describe.only("getTotalCredit", () => {
  it("given an empty array with return an empty array", () => {
    const player = [];
    const actual = getTotalCredit(player);
    const expected = "0p";
    expect(actual).to.eql(expected);
  });
  it("should return the total credit of one player", () => {
    const player = [{ player: "Alex", credit: "10p" }];
    const actual = getTotalCredit(player);
    const expected = "10p";
    expect(actual).to.eql(expected);
  });
  it("should return the total of two players credit added together", () => {
    const player = [
      { player: "Alex", credit: "10p" },
      { player: "Mitch", credit: "5p" }
    ];
    const actual = getTotalCredit(player);
    const expected = "15p";
    expect(actual).to.eql(expected);
  });
});

describe("findTillTotal", () => {
  it("given an empty object should return an empty object", () => {
    const till = {};
    const actual = findTillTotal(key, value);
    const expected = {};
    expect(actual).to.eql(expected);
  });
  it("returns the value of x 1 5p coin", () => {
    const till = { 5: 1 };
    const actual = findTillTotal(key, value);
    const expected = "5p";
    expect(actual).to.eql(expected);
  });
});

describe("calculateShopsTotal", () => {
  it("given an empty array it will return an empty array", () => {
    const arr = [];
    const actual = calculateShopsTotal(arr);
    const expected = [];
    expect(actual).to.eql(expected);
  });
});
