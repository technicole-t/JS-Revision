# Filter Challenges

## `getMultiplesOf10()`

Write a function `getMultiplesOf10` that takes an _array of numbers_ and returns an _array of numbers_ that are **ONLY** multiples of 10 (that is they can be divided by 10 with no remainder).

```js
getMultiplesOf10([3])
// should return [];
```

```js
getMultiplesOf10([10])
// should return [10];
```

```js
getMultiplesOf10([10, 3, 7, 50, 56, 55, 100, 9, 2])
// should return [10, 50, 100];
```

## `getMultiples()`

Write a function `getMultiples` that takes an _array of numbers and a given number_ and returns an _array of numbers_ that are **ONLY** multiples of th given number (that is they can be divided by this number with no remainder).

```js
getMultiples([3])
// should return [];
```

```js
getMultiples([6], 3)
// should return [6];
```

```js
getMultiples([10, 3, 7, 50, 56, 55, 100, 9, 2], 5)
// should return [10, 50, 55, 100];
```

## `getJSFiles()`

Write a function `getJSFiles` that takes an _array of file names_ and returns an _array of js files_ **only** (those files ending with ".js" are javascript files)

```js
getJSFiles(['README.md'])
// should return [];
```

```js
getJSFiles(['index.js'])
// should return ['index.js'];
```

```js
getJSFiles(['challenge.js', 'package.json', 'app.js', 'README.md'])
// should return ['challenge.js', 'app.js'];
```

## `getOldCats()`

Write a function `getOldCats` that takes an _array of cat objects_ and returns _an array of cat objects_ containing **only** those cats older than ten years old.

```js
getOldCats([
  { name: 'Cuthbert', age: 1 },
  { name: 'Garfield', age: 20 },
  { name: 'Felix', age: 9 }
])
/*
Should return [{ name: 'Garfield', age: 20 }];
*/
```

## `getRecentTitles()`

Write a function `getRecentTitles` that takes an _array of film objects_ and returns _an array of films_ that were released in the last year.

```js
getRecentTitles([
  { title: 'Toy Story 4', yearOfRelease: 2019 },
  { title: 'Toy Story', yearOfRelease: 1995 },
  { title: 'Coco', yearOfRelease: 2017 }
])
/*
Should return [
  { title: 'Toy Story 4', yearOfRelease: 2019 }]
*/
```
