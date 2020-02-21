const { expect } = require("chai");
const {
  accessName,
  accessObject,
  accessNestedArray,
  addProperty,
  removeName,
  removeProperty
} = require("../collections/objects/object-access-2");

describe("accessName", () => {
  it("returns the name when passed one person object", () => {
    const person = { name: "Bob", age: 42 };
    const actual = accessName(person);
    const expected = "Bob";
    expect(actual).to.equal(expected);
  });
});

describe("accessObject", () => {
  it("when passed an object and key, returns the value of the key", () => {
    const object = { fruit: "banana" };
    const key = "fruit";
    const actual = accessObject(object, key);
    const expected = "banana";
    expect(actual).to.equal(expected);
  });
  it("given an object of multiple key value pairs return the value of the key passed in as a second argument", () => {
    const object = { fruit: "banana", name: "Nicole", holiday: "Thailand" };
    const key = "holiday";
    const actual = accessObject(object, key);
    const expected = "Thailand";
    expect(actual).to.equal(expected);
  });
});

describe("accessNestedArray", () => {
  it("returns an empty string when passed an object with an empty list", () => {
    const obj = { list: [] };
    const index = 1;
    const actual = accessNestedArray(obj, index);
    const expected = "";
    expect(actual).to.eql(expected);
  });
  it("returns an empty string when passed an object in which the index passed does not exist", () => {
    const obj = { list: ["dog"] };
    const index = 2;
    const actual = accessNestedArray(obj, index);
    const expected = "";
    expect(actual).to.eql(expected);
  });
  it("returns the value of the list object passed when given a valid index position to search", () => {
    const obj = { list: ["dog", "cat", "pig", "snake", "rat"] };
    const index = 3;
    const actual = accessNestedArray(obj, index);
    const expected = "snake";
    expect(actual).to.eql(expected);
  });
});

describe.only("addProperty", () => {
  it("when passed an empty array returns the object passed", () => {
    const obj = { job: "teacher" };
    const keyValuePair = [];
    const actual = addProperty(obj, keyValuePair);
    const expected = { job: "teacher" };
    expect(actual).to.eql(expected);
  });
  //   it("when passed an array, adds it to the existing object as a key value pair', () => {
  //     const obj = { job: "teacher" };
  //     const keyValuePair = ['name','mitch'];
  //   });
});

// write your tests for the object-problems here
