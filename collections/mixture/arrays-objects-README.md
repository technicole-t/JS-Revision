# array and object challenges

These challenges invoke more complex data structures, so it is recommended to move onto these after completing both the array-access problems and the object-access problems.

These are designed to be done with tests.

### addGreetingToPeople

Write a function `addGreetingToPeople` that takes an **array of people objects** and adds a greeting to each person object. The greeting should be in the pattern 'Hi! I'm <name>'. This function should return an **array of the updated people objects**.

Here are some sample inputs and return values that you could use to start building your tests:

```js
const people = [{ name: "Anat" }];
addGreetingToPeople(people);
// should return [{ name: "Anat", greeting: "Hi! I'm Anat" }];
```

```js
const people = [{ name: "Anat" }, { name: "Nicki" }, { name: "David" }];
addGreetingToPeople(people);
// should return [{ name: "Anat", greeting: "Hi! I'm Anat" }, { name: "Nicki", greeting: "Hi! I'm Nicki" }, { name: "David", greeting: "Hi! I'm David" }];
```

### extractInfo

Write a function `extractInfo` that takes an **array of objects** and a **name of a key in that object** . The function should return an **array of strings** holding the values at that key in each object.

```js
const animals = [];
extractInfo(animals, "name");
// should return []
```

```js
const animals = [{ name: "Eeyore", species: "Donkey" }];
extractInfo(animals, "name");
// should return ['Eeyore']
```

```js
const animals = [{ name: "Eeyore", species: "Donkey" }];
extractInfo(animals, "species");
// should return ['Donkey']
```

```js
const animals = [
  { name: "Eeyore", species: "Donkey" },
  { name: "Piglet", species: "Pig" }
];
extractInfo(animals, "name");
// should return ['Eeyore', 'Piglet']
```

```js
const animals = [
  { name: "Eeyore", species: "Donkey" },
  { name: "Piglet", species: "Pig" }
];
extractInfo(animals, "species");
// should return ['Donkey', 'Pig']
```

### increasePizzaCount

A pizza restaurant chain slightly miscounted how many pizzas there were for each order last week across _all_ its locations. For each restaurant, we need to increase the pizza count for each order by one.

Write a function that takes an **array of restaurant objects**. Each restaurant has a **pizzasPerOrder** property holding an **array of numbers** representing count of pizzas per order (see below for examples of the data structure). The function should increase each order's pizza count by one.

```js
const restaurants = [
  {
    location: "Leeds",
    pizzasPerOrder: [3]
  }
];
increasePizzaCount(restaurants);
// should return
// [
//   {
//     location: "Leeds",
//     pizzasPerOrder: [4]
//   },
// ];
```

```js
const restaurants = [
  {
    location: "Manchester",
    pizzasPerOrder: [2, 1]
  },
  {
    location: "Leeds",
    pizzasPerOrder: [3, 3, 4]
  }
];
increasePizzaCount(restaurants);
// should return
// [
//   {
//     location: "Manchester",
//     pizzasPerOrder: [3, 2]
//   },
//   {
//     location: "Leeds",
//     pizzasPerOrder: [4, 4, 5]
//   }
// ];
```

### updateMobileNumber

Write a function `updateMobileNumber` that takes an **array of restaurant objects**. Each restaurant object has a **chefs** key holding an **array of chef objects**. This `updateMobileNumber` function should update the mobile number of each chef to start with `"+44 7"` rather than `"07"` and return the restaurants array.

```js
const restaurants = [
  {
    location: "Manchester",
    chefs: [
      { name: "Chef1", mobile: "07121212121" },
      { name: "Chef2", mobile: "07131313131" }
    ]
  }
];
updateMobileNumber(restaurants);
// should return
// [
//   {
//     location: "Manchester",
//     chefs: [
//       { name: "Chef1", mobile: "+44 7121212121" },
//       { name: "Chef2", mobile: "+44 7131313131" }
//     ]
//   }
// ];
```

```js
const restaurants = [
  {
    location: "Manchester",
    chefs: [
      { name: "Chef1", mobile: "07121212121" },
      { name: "Chef2", mobile: "07131313131" }
    ]
  },
  {
    location: "Leeds",
    chefs: [
      { name: "Chef1", mobile: "07151515151" },
      { name: "Chef2", mobile: "07161616161" },
      { name: "Chef2", mobile: "07171717171" }
    ]
  }
];
updateMobileNumber(restaurants);
// should return
// [
//   {
//     location: "Manchester",
//     chefs: [
//       { name: "Chef1", mobile: "+44 7121212121" },
//       { name: "Chef2", mobile: "+44 7131313131" }
//     ]
//   },
//   {
//     location: "Leeds",
//     chefs: [
//       { name: "Chef1", mobile: "+44 7151515151" },
//       { name: "Chef2", mobile: "+44 7161616161" },
//       { name: "Chef2", mobile: "+44 7171717171" }
//     ]
//   }
// ];
```
