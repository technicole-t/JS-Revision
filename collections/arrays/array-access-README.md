# array-access challenges



## `getOuterSum()`


- Write a function `getOuterSum` that takes an **array of numbers** and returns a number that is the sum of the first item in the array and the last item in the array

```js
/** 
@param {Array} nums

@returns {number}
**/
```

- Here are some sample inputs and return values that you could use to start building your tests...


```js
getOuterSum([])
// should return 0
```

```js
getOuterSum([10])
// should return 10
```

```js
getOuterSum([10, 15])
// should return 25
```

```js
getOuterSum([10, 3, 6, 8, 5, 231])
// should return 241
```

## `findGridItem()`


- Write a function `findGridItem` that takes a grid (a nested array) and a coordinates array and can find an item nested inside it. For example,
```js
findGridItem([
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h']],
    [1, 2]);
```
- This call to `findGridItem` means go to the nested array and access the array at position 1, giving `['c', 'b', 'e' ]` and then go to position 2 inside this nested array which is `'e'`.  You don't need a loop for this problem.

```js
/** 
@param {Array} grid
@param {Array} coordinates

@returns {number | string} 
**/
```

- Here are some sample inputs and return values that you could use to start building your tests...


```js
findGridItem([['a']],[0, 0]);
// should return 'a'
```

```js
findGridItem([['a']], [1,3])
// should return undefined
```

```js
findGridItem([
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h']],
    [0, 2]);
// should return 'c'
```

```js
findGridItem([
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h'],
    ['z', 'd', 'q']
], [3, 1]);
// should return 'd'
```

## `getItem()`

- This function should take an array and an index in order to access an item in an array at a given position.  If the index given is bigger than the array length - 1 then it should wrap back around to the beginning.

```js
/** 
@param {Array} items
@param {Array} index

@returns {number | string} 
**/
```

```js
getItem(['a','b','c','d'], 2);
// should return 'c'
```
```js
getItem(['a','b','c','d'], 3);
// should return 'd'
```
```js
getItem(['a','b','c','d'], 4);
// should return 'a'  // <-- 4 is the same as the array length so back to beginning
```

```js
getItem(['a','b','c','d'], 6);
// should return 'c'
```


## `calculateDeterminant()`

- 

```js
/** 
@param {Array} matrix

@returns {number} 
**/
```

