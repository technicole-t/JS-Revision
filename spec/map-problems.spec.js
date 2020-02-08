const { expect } = require("chai");
const {
  incrementNums,
  multiplyNums,
  extractPonyNames,
  makeNameSentence,
  getFullNames,
  makeFilmDetails,
  getMainDetails
} = require("../array-methods/map-problems/challenges");

describe("incrementNums", () => {
  it("if passed an empty array returns an empty array", () => {
    const nums = [];
    const actual = incrementNums(nums);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("given one number and no increment returns the num", () => {
    const nums = [5];
    const actual = incrementNums(nums);
    const expected = [5];
    expect(actual).to.eql(expected);
  });
  it("given one number and an increment returns the number incremented by that number", () => {
    const nums = [5];
    const actual = incrementNums(nums, 5);
    const expected = [10];
    expect(actual).to.eql(expected);
  });
  it("given multiple numbers return the numbers incremented by the given increment", () => {
    const nums = [5, 10, 44, 55, 67, 190];
    const actual = incrementNums(nums, 7);
    const expected = [12, 17, 51, 62, 74, 197];
    expect(actual).to.eql(expected);
  });
});

describe("multiplyNums", () => {
  it("returns empty when passed an empty array", () => {
    const nums = [];
    const actual = multiplyNums(nums);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("returns an array of one number when no multiple is passed", () => {
    const nums = [10];
    const actual = multiplyNums(nums);
    const expected = [10];
    expect(actual).to.eql(expected);
  });
  it("returns an array of one number multiplied by the second argument passed", () => {
    const nums = [10];
    const actual = multiplyNums(nums, 10);
    const expected = [100];
    expect(actual).to.eql(expected);
  });
  it("returns an array of more than one number multiplied by the passed number", () => {
    const nums = [10, 11, 35, 75, 100];
    const actual = multiplyNums(nums, 10);
    const expected = [100, 110, 350, 750, 1000];
    expect(actual).to.eql(expected);
  });
});

describe("extractPonyNames", () => {
  it("returns an empty array when passed an empty array", () => {
    const ponies = [];
    const actual = extractPonyNames(ponies);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("returns an array with one ponies name when passed an array with one pony object", () => {
    const ponies = [{ name: "Fluffy", legs: 4, age: 14, color: "ginger" }];
    const actual = extractPonyNames(ponies);
    const expected = ["Fluffy"];
    expect(actual).to.eql(expected);
  });
  it("returns an array of multiple pony names when passed an array of more than one pony object", () => {
    const ponies = [
      { name: "Fluffy", legs: 4, age: 14, color: "ginger" },
      { name: "Tabitha", legs: 4, age: 12, color: "ginger" },
      { name: "Giles", legs: 3, age: 3, color: "ginger" }
    ];
    const actual = extractPonyNames(ponies);
    const expected = ["Fluffy", "Tabitha", "Giles"];
    expect(actual).to.eql(expected);
  });
});

describe("getFullNames", () => {
  it("returns empty when passed an empty array", () => {
    const people = [];
    const actual = getFullNames(people);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("returns an array with a full name when passed one person object", () => {
    const people = [{ firstname: "Sam", surname: "Caine" }];
    const actual = getFullNames(people);
    const expected = ["Sam Caine"];
    expect(actual).to.eql(expected);
  });
  it("returns an array of full names when passed multiple people objects", () => {
    const people = [
      { firstname: "Anat", surname: "Dean" },
      { firstname: "Sam", surname: "Caine" },
      { firstname: "Paul", surname: "Copley" },
      { firstname: "Michael", surname: "Caine" }
    ];
    const actual = getFullNames(people);
    const expected = ["Anat Dean", "Sam Caine", "Paul Copley", "Michael Caine"];
    expect(actual).to.eql(expected);
  });
});

describe("makeNameSentence", () => {
  it("returns empty when passed an empty array", () => {
    const people = [];
    const actual = makeNameSentence(people);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("returns a string <name> is <number> years old when passed one person object", () => {
    const people = [{ firstName: "Sam", surName: "Caine", age: 30 }];
    const actual = makeNameSentence(people);
    const expected = ["Sam Caine is 30 years old"];
    expect(actual).to.eql(expected);
  });
  it("returns a string <name> is <number> years old when passed multiple person objects", () => {
    const people = [
      { firstName: "Anat", surName: "Dean", age: 22 },
      { firstName: "Sam", surName: "Caine", age: 30 },
      { firstName: "Paul", surName: "Copley", age: 31 },
      { firstName: "Michael", surName: "Caine", age: 86 }
    ];
    const actual = makeNameSentence(people);
    const expected = [
      "Anat Dean is 22 years old",
      "Sam Caine is 30 years old",
      "Paul Copley is 31 years old",
      "Michael Caine is 86 years old"
    ];
    expect(actual).to.eql(expected);
  });
});

describe.only("makeFilmDetails", () => {
  it("returns an empty array when passed an empty array", () => {
    const films = [];
    const actual = makeFilmDetails(films);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("takes one nested array and returns an object with key values pairs for the title and year of release", () => {
    const films = [["The Jungle Book", 1994]];
    const actual = makeFilmDetails(films);
    const expected = [{ title: "The Jungle Book", year: 1994 }];
    expect(actual).to.eql(expected);
  });
});

describe("getMainDetails", () => {
  it("", () => {});
});

// write your tests for the map-problems here
