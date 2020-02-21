const { expect } = require("chai");
const {
  mpName,
  mpSentence
} = require("../collections/objects/object-access-1");

describe("mpName", () => {
  it("returns the name property in the object passed", () => {
    const memberOfParliament = {
      member_id: "41460",
      person_id: "10259",
      name: "David Hanson",
      party: "Labour",
      constituency: "Delyn",
      office: [
        {
          dept: "Panel of Chairs",
          position: "Member",
          from_date: "2017-06-22",
          to_date: "2017-09-11"
        },
        {
          dept: "Justice Committee",
          position: "Member",
          from_date: "2017-09-11",
          to_date: "2017-11-16"
        },
        {
          dept: "Intelligence and Security Committee of Parliament",
          position: "Member",
          from_date: "2017-11-16",
          to_date: "present"
        }
      ]
    };
    const actual = mpName(memberOfParliament);
    const expected = "David Hanson";
    expect(actual).to.eql(expected);
  });
});

describe.only("mpSentence", () => {
  it("returns string of the form My name is <name_here>, I am a member of the <party_here>, serving <constituency_name>", () => {
    const memberOfParliament = {
      member_id: "41460",
      person_id: "10259",
      name: "David Hanson",
      party: "Labour",
      constituency: "Delyn",
      office: [
        {
          dept: "Panel of Chairs",
          position: "Member",
          from_date: "2017-06-22",
          to_date: "2017-09-11"
        },
        {
          dept: "Justice Committee",
          position: "Member",
          from_date: "2017-09-11",
          to_date: "2017-11-16"
        },
        {
          dept: "Intelligence and Security Committee of Parliament",
          position: "Member",
          from_date: "2017-11-16",
          to_date: "present"
        }
      ]
    };
    const actual = mpSentence(memberOfParliament);
    const expected =
      "My name is David Hanson, I am a member of the Labour party, serving Delyn";
    expect(actual).to.eql(expected);
  });
});
