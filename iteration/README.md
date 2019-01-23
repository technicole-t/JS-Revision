# Collections

In this one-day sprint, you will work through some array transformation exercises, including `map`, `filter`, `every` and `some`.

Make sure the reference the MDN documentation:

[.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

[.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

[.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

[.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

Consider carefully which method will be most appropriate to implement each function. You may even need to use two methods inside the function to achieve the desired transformation.

## Testing

A test suite has been provided for you to see whether your functions are working.

Run it by typing:

`$ npm test`

By reading the test descriptions and inspecting `index.spec.js` you will see clearly how each function is supposed to work.

You can run a single `describe` block at a time with the `.only` method. For example, when you first open the `index.spec.js` file you will see that the test block for the first function, `getEvenNums`, has a `.only`. You can move the `.only` to whichever function you are working on at a given time.

## Comitting

Add and commit your work whenever you successfully implement a function.

After your tests pass, NPM will automatically lint your code (check it for stylistic and formatting errors). You will not be able to commit until you fix any linting errors you have.

This ensures you push high quality, readable code.

## Instructions

### getEvenNums()

Should take an array of items and return a new array of just the even numbers.

### applyVAT()

Should take an array of numbers and return a new array of prices with VAT (20%) applied.

### capitalizeCatNames()

Should take an array of strings and return a new array with the first letter of each capitalised.

### extractCatNames()

Should take an array of cat objects and return a new array of the cat object names. 

### getOldCats()

Should take an array of cat objects and return a new array of senior cat objects (cats at least 10 years old).

### removeSnootyCats()

Should take an array of cat objects and return a new array of cat objects whose personality arrays do not contain 'snooty'. 

###  getTitles()

Should take an array of film objects and return a new array of film titles. 

### getRecentTitles()

Should take an array of film objects and return a new array of film titles of films that have were made in 1990 or afterwards.

### getTitlesBetween() 

Should take an array of film objects, a start number and an end number. It should return a new array of film titles made between the start and end number. 

### allCatsAreSenior()

Should take an array of cats objects and return true if all the cats are 10 or older. Otherwise returns false.

### allMoviesAreRecent()

Should take an array of film objects and return true if all the films are from 2000 or later. Otherwise returns false.

### someCatsAreSnooty()

Should take an array of cat objects and return true if any of cats' personality arrays contain 'snooty' as a trait. Otherwise returns false. 

### someMoviesAreBad()

Should take an array of film objects and return true if any of the films' ratings are 5 or less. Otherwise returns false. 

### orderBySurname()

Should take an array of people objects and return a new array of people objects sorted alphabetically on their surname property. 

### orderByHeight()

Should take an array of people objects and an optional boolean. If the boolean is not specified it should default to false. If the boolean is false it should return a new array, with the people in ascending order of height. Otherwise it should return a new array with the people sorted in descending order of height. 

### flattenArray()

Should take an array of arrays and return a new, flattened array. There are many ways of doing this, although we'd like you to do it with `.forEach`.

```javascript

flattenArray([[1,2,3],['a','b','c']]) // [1,2,3,'a','b','c']

```

### mirrorArray() 

Should take an array and return a new array in reverse order. You should not use a for loop. 

### removeArraySection() 

Should take an array, a start number and an end number, and return a new array with the section between the two indices removed (inclusive). 

```javascript
removeArraySection([1,2,3,4],1,2) // [1,4];
```

### pluck()

Should take an array of objects, and a key name. Should return a new array of the values for the key name in each object. 

```javascript
const tutors = [
  {
    name: 'Sam', 
    age: 29 
  },
  {
    name: 'Adie',
    age: 34
  },
  {
    name: 'Mauro',
    age: 28
  }
]
pluck(tutors, 'name') // returns ['Sam', 'Adie', 'Mauro']

```

