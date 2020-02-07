const { expect } = require("chai");
const {
  getMultiplesOf10,
  getJSFiles,
  getOldCats,
  getRecentTitles,
  getMultiples
} = require("../array-methods/filter-problems/challenges");

describe("getMultiplesOf10", () => {
  it("given an empty array should return an empty array", () => {
    const nums = [];
    const actual = getMultiplesOf10(nums);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array with 1 multiple of 10 returns that number", () => {
    const nums = [10];
    const actual = getMultiplesOf10(nums);
    const expected = [10];
    expect(actual).to.eql(expected);
  });
  it("given an array with a number that is not a multiple of 10 return an empty array", () => {
    const nums = [7];
    const actual = getMultiplesOf10(nums);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given a mixed array of numbers returns only the multiples of 10", () => {
    const nums = [10, 20, 32, 50, 77, 100];
    const actual = getMultiplesOf10(nums);
    const expected = [10, 20, 50, 100];
    expect(actual).to.eql(expected);
  });
});

describe("getMultiples", () => {
  it("given an empty array returns an empty array", () => {
    const nums = [];
    const actual = getMultiples(nums);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of 1 number that is a multiple of the given number return that number", () => {
    const nums = [4];
    const multiple = 2;
    const actual = getMultiples(nums, multiple);
    const expected = [4];
    expect(actual).to.eql(expected);
  });
  it("given an array of 1 number that is not a multiple of the given multiple number return an empty array", () => {
    const nums = [3];
    const multiple = 2;
    const actual = getMultiples(nums, multiple);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of mixed numbers, return only the numbers which are a multiple of the given multiple number", () => {
    const nums = [3, 5, 10, 15, 22, 44, 87, 100];
    const multiple = 2;
    const actual = getMultiples(nums, multiple);
    const expected = [10, 22, 44, 100];
    expect(actual).to.eql(expected);
  });
});

describe("getJSFiles", () => {
  it("given an empty array returns an empty array", () => {
    const files = [];
    const actual = getJSFiles(files);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array with 1 .js file return that one file", () => {
    const files = ["index.js"];
    const actual = getJSFiles(files);
    const expected = ["index.js"];
    expect(actual).to.eql(expected);
  });
  it("given an array with 1 file that is not a .js file return an empty array", () => {
    const files = ["selfie.jpeg"];
    const actual = getJSFiles(files);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of mixed files returns only the files ending in .js", () => {
    const files = [
      "thailand.jpeg",
      "index.js",
      "workdoc.md",
      "spec.js",
      "selfie.png"
    ];
    const actual = getJSFiles(files);
    const expected = ["index.js", "spec.js"];
    expect(actual).to.eql(expected);
  });
});

describe("getOldCats", () => {
  it("given an empty array return an empty array", () => {
    const cats = [];
    const actual = getOldCats(cats);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of cat objects whose age is less than 10 returns an empty array", () => {
    const cats = [
      { name: "Cuthbert", age: 1 },
      { name: "Garfield", age: 2 },
      { name: "Felix", age: 3 }
    ];
    const actual = getOldCats(cats);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of mixed cat objects returns only the cats over 10", () => {
    const cats = [
      { name: "Cuthbert", age: 11 },
      { name: "Garfield", age: 2 },
      { name: "Felix", age: 99 },
      { name: "Mocha", age: 8 },
      { name: "Chai", age: 9 },
      { name: "Array", age: 18 }
    ];
    const actual = getOldCats(cats);
    const expected = [
      { name: "Cuthbert", age: 11 },
      { name: "Felix", age: 99 },
      { name: "Array", age: 18 }
    ];
    expect(actual).to.eql(expected);
  });
});
describe.only("getRecentTitles", () => {
  it("given an empty array returns an empty array", () => {
    const films = [];
    const actual = getRecentTitles(films);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of one film released in the past year it returns that film", () => {
    const films = [{ title: "Toy Story 4", yearOfRelease: 2019 }];
    const actual = getRecentTitles(films);
    const expected = [{ title: "Toy Story 4", yearOfRelease: 2019 }];
    expect(actual).to.eql(expected);
  });
  it("given an array of one film that was not released in the last year returns an empty array", () => {
    const films = [{ title: "Toy Story", yearOfRelease: 1995 }];
    const actual = getRecentTitles(films);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given an array of mixed films it returns only films released in the last year", () => {
    const films = [
      { title: "Toy Story 4", yearOfRelease: 2019 },
      { title: "Toy Story", yearOfRelease: 1995 },
      { title: "Coco", yearOfRelease: 2017 }
    ];
    const actual = getRecentTitles(films);
    const expected = [{ title: "Toy Story 4", yearOfRelease: 2019 }];
    expect(actual).to.eql(expected);
  });
});
