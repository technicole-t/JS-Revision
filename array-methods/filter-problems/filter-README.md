
# filter challenges

### `getMultiplesOf10()`


Write a function `getMultiplesOf10` that takes an array of numbers and returns an array of numbers that are **ONLY** multiples of 10 (that is they can be divided by 10 with no remainder).
   
@param {Array} nums

@returns {Array}


```js
getMultiplesOf10([3]);
// should return [];
```

```js
getMultiplesOf10([10]);
// should return [10];
```

```js
getMultiplesOf10([10, 3, 7, 50, 56, 55, 100, 9, 2]);
// should return [10, 50, 100];
```


### getMultiples()

Write a function `getMultiples` that takes an array of numbers and returns an array of numbers that are **ONLY** multiples of a given number (that is they can be divided by this number with no remainder).
   
@param {Array} nums
@param {number} multiple

@returns {Array}


```js
getMultiples([3]);
// should return [];
```

```js
getMultiples([10]);
// should return [10];
```

```js
getMultiples([10, 3, 7, 50, 56, 55, 100, 9, 2]);
// should return [10, 50, 100];
```

### getJSFiles()

Write a function `getJSFiles` that takes an array of file names and returns an array of js files only (those files ending with ".js" are javascript files)
   
@param {Array} fileNames

@returns {Array}


```js
getJSFiles(['README.md']);
// should return [];
```

```js
getJSFiles(['index.js']);
// should return ['index.js'];
```

```js
getJSFiles(['challlenge.js','package.json','app.js','README.md']);
// should return ['challlenge.js', 'README.md'];
```

### getOldCats()

### getRecentTitles()