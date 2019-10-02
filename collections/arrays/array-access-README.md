# array-access challenges

## `getOuterSum()`

Write a function `getOuterSum` that takes an **array of numbers** and returns a **number** that is the sum of the first item in the array and the last item in the array

- Here are some sample inputs and return values that you could use to start building your tests...

```js
getOuterSum([]);
// should return 0
```

```js
getOuterSum([10]);
// should return 10
```

```js
getOuterSum([10, 3, 6, 8, 5, 231]);
// should return 241
```

## `getItem()`

This function should take an **array** and an **index** in order to access an item in an array at a given position. If the index given is bigger than the `array length - 1` then it should wrap back around to the beginning.`

```js
getItem(["a", "b", "c", "d"], 2);
// should return 'c'
```

```js
getItem(["a", "b", "c", "d"], 3);
// should return 'd'
```

```js
getItem(["a", "b", "c", "d"], 4);
// should return 'a'  // <-- 4 is the same as the array length so back to beginning
```

```js
getItem(["a", "b", "c", "d"], 6);
// should return 'c'
```

## `findGridItem()`

Write a function `findGridItem` that takes an **array of arrays** (a 'grid') and an **array of numbers** ('coordinates') and returns whatever value is found in the grid at the coordinates provided. For example,

```js
findGridItem([["a", "b", "c"], ["c", "d", "e"], ["f", "g", "h"]], [1, 2]);
```

This call to `findGridItem` means go to the nested array and access the array at position 1, giving `['c', 'b', 'e' ]` and then go to position 2 inside this nested array which is `'e'`. You don't need a loop for this problem.

Here are some sample inputs and return values that you could use to start building your tests...

```js
findGridItem([["a"]], [0, 0]);
// should return 'a'
```

```js
findGridItem([["a"]], [1, 3]);
// should return undefined
```

```js
findGridItem([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]], [0, 2]);
// should return 'c'
```

```js
findGridItem(
  [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]],
  [3, 1]
);
// should return 'k'
```

## `calculateDeterminant()`

Work In Progress - watch this space!
