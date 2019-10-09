# Instructions for `counting-problems` katas:

## getTotalCredit()

This function should take an array of player objects and output the total of all the player credit as a string value in pence. For example:

```js
const players = [
  { player: "Alex", credit: "10p" },
  { player: "Mitch", credit: "5p" },
  { player: "Haz", credit: "30p" }
];

getTotalCredit(players); // should return '45p'
```

## findTillTotal()

This function should take a till object in the following format `{ 1 : 4, 50 : 3 }` and output the corresponding pence value as a string. Each key in the object represents a type of coin, i.e. this object is a record of 4 1p coins, and 3 50p coins. For example:

```js
const tillObject = { 1: 4, 50: 3 };

findTillTotal(register); // should return '154p
```

- Should accept a till object in the form of `{ 1 : 4, 50 : 3 }`. If this object means 4 1p's and 3 50p's, `findTillTotal({1 : 4, 50 : 3 })` should return "154p"

## calculateShopsTotal()

This function should take an array of till objects and return the total cash as a string of pence. For example:

```js
const takings = [
  {
    shop: 'Don Luigis',
    cash: { 1: 1, 10: 2 }
  }
]

calculateShopsTotal(takings) should return '21p'

// or,

const takings = [{shop: "Don Luigis", cash: {1 : 1, 10 : 2}}, {shop: "Vertigo", cash : {1 : 3, 2 : 5, 10 : 4}}]
calculateShopsTotal(takings) should return '74p'

```

## countTreasures()

This function should take a string of treasures and return a tally object of the number of treasures found in that string. Treasures can be one of the following: 'gold-doubloon','diadem','ruby-necklace','ancient-sceptre','amulet' or 'gold-chalice'. For example:

```js
countTreasures("ruby-necklace**gold-doubloon**amulet**ancient-sceptre");

// should return {ruby-necklace: 1, gold-doubloon: 1, ancient-sceptre: 1}
```

A larger data set for your treasures can be found in the `./array-methods/counting-problems/data/buried-treasure.js` file. When using this data set, the tally object should be equivalent to `{amulet: 1661,'ancient-sceptres': 1642, 'gold-doubloon': 1654,'ruby-necklace': 1618}`.

## tallyMPs()

This function should take an array of 'MP' objects and produce a tally of the number of each MPs in each political party. For example:

```js
const MPs = [
  {
    member_id: "41797",
    person_id: "11500",
    name: "Theresa Villiers",
    party: "Conservative",
    constituency: "Chipping Barnet",
    office: [
      {
        dept: "National Security Strategy (Joint Committee)",
        position: "Member",
        from_date: "2017-10-30",
        to_date: "9999-12-31"
      }
    ]
  },
  {
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
        to_date: "9999-12-31"
      },
      {
        dept: "Justice Committee",
        position: "Member",
        from_date: "2017-09-11",
        to_date: "9999-12-31"
      },
      {
        dept: "Intelligence and Security Committee of Parliament",
        position: "Member",
        from_date: "2017-11-16",
        to_date: "9999-12-31"
      }
    ]
  }
];

tallyMPs(MPs); // should return {Conservative: 1, Labour: 1}
```

A larger data set for your MP's can be found in the `./array-methods/counting-problems/data/mps.js` file
