# map challenges

All of the following problems can be solved using the native `map` array method.
Think carefully about your TDD approach : often it is most useful in these types of situations to 

### `incrementNums()`


Write a function `increaseNums` that takes an **array of numbers** and returns a new **array of numbers** incremented by a given `num`
* If no `num` is provide, then you should return a copy of the original array with the numbers unaltered.


@param {Array} nums

@returns {Array}


Here are some sample inputs and return values that you could use to start building your tests...

```js
incrementNums([23,32,94]);
// should return [23,32,94]
```

```js
incrementNums([10,3,6,8],10)
// should return [20,13,16,18]
```


### `multiplyNums()`


Write a function `multiplyNums` that takes an array of numbers and returns a new array of numbers multiplied by a given `num`
* If no `num` is provide, then you should return a copy of the original array with the numbers unaltered.

@param {Array} nums

@returns {Array}


```js
muliplyNums([100,3,80]);
// should return [100,3,80];
```

```js
increaseNums([3,10,5],2); 
// should return [6,20,4];
```


### `extractPonyNames()`

Write a function `extractPonyNames` that takes an **array of pony objects** and returns a new **array of strings** - each string being the name of the cat in the object

@param {Array}

@returns {Array}

```js
extractPonyNames([{ name: 'Fluffy', legs: 4, age: 14, color: 'ginger' }]);
// should return [ 'Fluffy' ];
```

```js
extractPonyNames([
        { name: 'Fluffy', legs: 4, age: 14, color: 'ginger' },
        { name: 'Tabitha', legs: 4, age: 12, color: 'ginger' },
        { name: 'Giles', legs: 3, age: 3, color: 'ginger' },
        { name: 'Belinda', legs: 4, age: 6, color: 'ginger' },
        { name: 'Horace', legs: 4, age: 2, color: 'ginger' },
      ]); 
// should return ['Fluffy', 'Tabitha', 'Giles', 'Belinda', 'Horace'];
```


### `getFullNames`

Write a function `getFullNames` that takes an array of objects and returns an array of strings - each string should represent the whole name of each person.

@param {Array}

@returns {Array}


```js
getFullNames([{ firstName : 'Sam', surName : 'Caine' }])
// should return ['Sam Caine'];
```

```js
getFullNames([
    {firstName : 'Anat', surName: 'Dean' },
    {firstName : 'Sam', surName: 'Caine' },
    {firstName : 'Paul', surName: 'Copley' },
    {firstName : 'Michael', surName: 'Caine' }
    ]);
// should return ['Anat Dean', 'Sam Caine', 'Paul Copley', 'Michael Caine'];    
```


### `makeNameSentence`

Write a function `makeNameSentence` that takes an array of objects and returns an array of strings - each string should represent the whole name of each person.

@param {Array}

@returns {Array}


```js
makeNameSentence([{ firstName : 'Sam', surName : 'Caine', age: 30 }])
// should return ['Sam Caine is 30 years old'];
```

```js
makeNameSentence([
    {firstName : 'Anat', surName: 'Dean', age: 22 },
    {firstName : 'Sam', surName: 'Caine' , age: 30 },
    {firstName : 'Paul', surName: 'Copley', age: 31 },
    {firstName : 'Michael', surName: 'Caine', age: 86 }
    ]);
/** should return 
['Anat Dean is 22 years old',
 'Sam Caine is 30 years old', 
 'Paul Copley is 31 years old', 
 'Michael Caine is 86 years old'];
**/    
```

### `makeFilmDetails()`

Write a function `makeFilmDetails` that takes an array of film objects and returns an array of film titles

@param {Array}

@returns {Array}

```js
makeFilmDetails([['The Jungle Book', 1994]]);
// should return { title: 'The Jungle Book', year: 1994 }
```

```js
makeFilmDetails([
    ['The Jungle Book', 1994 ],
    ['Mary Poppins', 1964],
    ['The Sword in the Stone', 1963],
    ['Aladdin', 1992],
    ['Pocahontas', 1995 ],
    ['Muppet Treasure Island',1996]
  ]);
/** should return [
    { title: 'The Jungle Book', year: 1994 },
    { title: 'Mary Poppins', year: 1964 },
    { title: 'The Sword in the Stone', year: 1963 },
    { title: 'Aladdin', year: 1992 },
    { title: 'Pocahontas', year: 1995 },
    { title: 'Muppet Treasure Island', year: 1996 }
  ]
  **/
```

### `getMainDetails()`

Write a function `getMainDetails` that takes an array of objects and returns an object with three properties:
`"name"`,`"party"` and `"constituency"`

@param {Array}

@returns {Array}

```js
getMainDetails([
    {
      'member_id': '41797',
      'person_id': '11500',
      'name': 'Theresa Villiers',
      'party': 'Conservative',
      'constituency': 'Chipping Barnet',
      'office': [
        {
          'dept': 'National Security Strategy (Joint Committee)',
          'position': 'Member',
          'from_date': '2017-10-30',
          'to_date': '9999-12-31'
        }
      ]
    }
]);
// should return [{ 'name': 'Theresa Villiers', 'party': 'Conservative', 'constituency': 'Chipping Barnet' }]
```

```js
getMainDetails([
    {
      'member_id': '41797',
      'person_id': '11500',
      'name': 'Theresa Villiers',
      'party': 'Conservative',
      'constituency': 'Chipping Barnet',
      'office': [
        {
          'dept': 'National Security Strategy (Joint Committee)',
          'position': 'Member',
          'from_date': '2017-10-30',
          'to_date': '9999-12-31'
        }
      ]
    },
    {
      'member_id': '41460',
      'person_id': '10259',
      'name': 'David Hanson',
      'party': 'Labour',
      'constituency': 'Delyn',
      'office': [
        {
          'dept': 'Panel of Chairs',
          'position': 'Member',
          'from_date': '2017-06-22',
          'to_date': '9999-12-31'
        },
        {
          'dept': 'Justice Committee',
          'position': 'Member',
          'from_date': '2017-09-11',
          'to_date': '9999-12-31'
        },
        {
          'dept': 'Intelligence and Security Committee of Parliament',
          'position': 'Member',
          'from_date': '2017-11-16',
          'to_date': '9999-12-31'
        }
      ]
    },
    {
      'member_id': '41560',
      'person_id': '11884',
      'name': 'Greg Clark',
      'party': 'Conservative',
      'constituency': 'Tunbridge Wells',
      'office': [
        {
          'dept': '',
          'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
          'from_date': '2016-07-14',
          'to_date': '9999-12-31'
        }
      ]
    },
    {
      'member_id': '41899',
      'person_id': '25227',
      'name': 'Robert Jenrick',
      'party': 'Conservative',
      'constituency': 'Newark',
      'office': [
        {
          'dept': '',
          'position': 'The Exchequer Secretary',
          'from_date': '2018-01-09',
          'to_date': '9999-12-31'
        }
      ]
    }
])
/** should return [
        {
          'name': 'Theresa Villiers',
          'party': 'Conservative',
          'constituency': 'Chipping Barnet'},
        {
          'name': 'David Hanson',
          'party': 'Labour',
          'constituency': 'Delyn'
        },
        {
          'name': 'Greg Clark',
          'party': 'Conservative',
          'constituency': 'Tunbridge Wells'
        }
      ];
**/
```



