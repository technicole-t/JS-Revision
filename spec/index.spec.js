const expect = require('chai').expect;
const {
  getEvenNums,
  applyVAT,
  capitalizeCatNames,
  extractCatNames,
  getOldCats,
  removeSnootyCats,
  getTitles,
  getRecentTitles,
  getTitlesBetween,
  allCatsAreSenior,
  allMoviesAreRecent,
  someCatsAreSnooty,
  someMoviesAreBad,
  orderBySurname,
  orderByHeight, 
  flattenArray,
  mirrorArray,
  removeArraySection,
  pluck
} = require('../index');

describe('Array Transformation Functions', function () {
  describe.only('getEvenNums', function () {
    it('returns an array', function () {
      expect(getEvenNums([])).to.be.an('array');
    });
    it('returns an array containing only even numbers', function () {
      expect(getEvenNums([1, 3, 4, 6, 8, 12, 7, 33])).to.eql([4, 6, 8, 12]);
    });
    it('ignores any strings inside the array', function () {
      expect(getEvenNums([1, 2, 4, 5, 'foo', 'bat'])).to.eql([2, 4]);
    });
  });
  describe('applyVAT', function () {
    it('returns an array', function () {
      expect(applyVAT([])).to.be.an('array');
    });
    it('returns an array of numbers with VAT (20%) added. Numbers are rounded to two decimal places.', function () {
      const prices = [44.50, 31, 20, 55.66, 102, 40.75];
      expect(applyVAT(prices)).to.eql([53.4, 37.2, 24, 66.79, 122.4, 48.9]);
    });
  });
  describe('capitalizeCatNames', function () {
    it('returns an array', function () {
      expect(capitalizeCatNames([])).to.be.an('array');
    });
    it('returns an array of capitalized cats\' names', function () {
      const cats = ['billy', 'kiko', 'penguin', 'christopher'];
      expect(capitalizeCatNames(cats)).to.eql(['Billy', 'Kiko', 'Penguin', 'Christopher']);
    });
  });
  describe('extractCatNames', function () {
    it('returns an array', function () {
      expect(extractCatNames([])).to.be.an('array');
    });
    it('extracts the cat names from a list of cat objects', function () {
      const cats = [
        { name: 'Fluffy', legs: 4, age: 14, color: 'ginger' },
        { name: 'Tabitha', legs: 4, age: 12, color: 'ginger' },
        { name: 'Giles', legs: 3, age: 3, color: 'ginger' },
        { name: 'Belinda', legs: 4, age: 6, color: 'ginger' },
        { name: 'Horace', legs: 4, age: 2, color: 'ginger' },
      ];
      expect(extractCatNames(cats)).to.eql([
        'Fluffy', 'Tabitha', 'Giles', 'Belinda', 'Horace'
      ]);
    });
  });
  describe('getOldCats', function () {
    it('returns an array', function () {
      expect(getOldCats([])).to.be.an('array');
    });
    it('returns an array that only includes senior cats (10+ years old)', function () {
      const cats = [
        { name: 'Tilly', age: 1 },
        { name: 'Peter', age: 10 },
        { name: 'Hector', age: 3 },
        { name: 'Daisy', age: 11 },
        { name: 'Whiskers', age: 4 },
        { name: 'Hilary', age: 12 },
        { name: 'Muffin', age: 5 },
      ];
      expect(getOldCats(cats)).to.eql([
        { name: 'Peter', age: 10 },
        { name: 'Daisy', age: 11 },
        { name: 'Hilary', age: 12 }
      ]);
    });
  });
  describe('removeSnootyCats', function () {
    it('returns an array', function () {
      expect(removeSnootyCats([])).to.be.an('array');
    });
    it('returns an array that only includes non-snooty cats (who wants a snooty cat?!)', function () {
      const cats = [
        { name: 'Penelope', personality: ['friendly', 'affectionate'] },
        { name: 'Miranda', personality: ['playful', 'excitable'] },
        { name: 'Hank', personality: ['snooty', 'hungry'] },
        { name: 'Leopold', personality: ['sleepy', 'snooty'] }
      ];
      expect(removeSnootyCats(cats)).to.eql([
        { name: 'Penelope', personality: ['friendly', 'affectionate'] },
        { name: 'Miranda', personality: ['playful', 'excitable'] }
      ]);
    });
  });
  describe('getTitles', function () {
    it('returns an array', function () {
      expect(getTitles()).to.be.an('array');
    });
    it('returns an array of film titles when given an array of film objects', function () {
      const films = [
        { title: 'The Jungle Book', year: 1994 },
        { title: 'Mary Poppins', year: 1964 },
        { title: 'The Sword in the Stone', year: 1963 },
        { title: 'Aladdin', year: 1992 },
        { title: 'Pocahontas', year: 1995 },
        { title: 'Muppet Treasure Island', year: 1996 }
      ];
      expect(getTitles(films)).to.eql(['The Jungle Book', 'Mary Poppins', 'The Sword in the Stone', 'Aladdin', 'Pocahontas', 'Muppet Treasure Island']);
    });
  });
  describe('getRecentTitles', function () {
    it('returns an array', function () {
      expect(getRecentTitles([])).to.be.an('array');
    });
    it('returns an array of the titles of films released from 1990 onwards', function () {
      const films = [
        { title: 'The Jungle Book', year: 1967 },
        { title: 'Mary Poppins', year: 1964 },
        { title: 'The Sword in the Stone', year: 1963 },
        { title: 'Aladdin', year: 1992 },
        { title: 'Pocahontas', year: 1995 },
        { title: 'Muppet Treasure Island', year: 1996 }
      ];
      expect(getRecentTitles(films)).to.eql(['Aladdin', 'Pocahontas', 'Muppet Treasure Island']);
    });
  });
  describe('getMoviesBetween', function () {
    it('returns an array', function () {
      expect(getTitlesBetween([])).to.be.an('array');
    });
    it('returns an array of titles of films from between the specified dates', function () {
      const films = [
        { title: 'The Jungle Book', year: 1967 },
        { title: 'Mary Poppins', year: 1964 },
        { title: 'The Sword in the Stone', year: 1963 },
        { title: 'Aladdin', year: 1992 },
        { title: 'Pocahontas', year: 1995 },
        { title: 'Cars', year: 2006 },
        { title: 'The Great Mouse Detective', year: 1986 },
        { title: 'The Little Mermaid', year: 1989 },
        { title: 'Beauty and the Beast', year: 1991 },
        { title: 'James and the Giant Peach', year: 1996 },
        { title: 'The Fox and the Hound', year: 1981 },
        { title: 'Robin Hood', year: 1973 },
        { title: 'Muppet Treasure Island', year: 1996 }
      ];
      expect(getTitlesBetween(films, 1980, 1990)).to.eql(['The Great Mouse Detective', 'The Little Mermaid', 'The Fox and the Hound']);
    });
  });
  describe('allCatsAreSenior', function () {
    it('returns true if all the cats in the array are 10+ years old', function () {
      const cats = [
        { name: 'Tilly', age: 10 },
        { name: 'Peter', age: 10 },
        { name: 'Hector', age: 13 },
        { name: 'Daisy', age: 11 },
        { name: 'Whiskers', age: 14 },
        { name: 'Hilary', age: 12 },
        { name: 'Muffin', age: 15 },
      ];
      expect(allCatsAreSenior(cats)).to.equal(true);
    });
    it('returns false if any of the cats in the array are younger than 10', function () {
      const cats = [
        { name: 'Tilly', age: 1 },
        { name: 'Peter', age: 10 },
        { name: 'Hector', age: 3 },
        { name: 'Daisy', age: 11 },
        { name: 'Whiskers', age: 4 },
        { name: 'Hilary', age: 12 },
        { name: 'Muffin', age: 5 },
      ];
      expect(allCatsAreSenior(cats)).to.equal(false);
    });
  });
  describe('allMoviesAreRecent', function () {
    it('returns true if all movies in the list are from 2000 or later', function () {
      const films = [
        { title: 'Frozen', year: 2013 },
        { title: 'Cars 2', year: 2011 },
        { title: 'Treasure Planet', year: 2002 },
        { title: 'Ratatouille', year: 2007 },
        { title: 'WALL-E', year: 2008 },
        { title: 'Inside Out', year: 2015 }
      ];
      expect(allMoviesAreRecent(films)).to.equal(true);
    });
    it('returns false if any of the movies in the list are earlier than 2000', function () {
      const films = [
        { title: 'The Jungle Book', year: 1967 },
        { title: 'Mary Poppins', year: 1964 },
        { title: 'The Sword in the Stone', year: 1963 },
        { title: 'Aladdin', year: 1992 },
        { title: 'Pocahontas', year: 1995 },
        { title: 'Muppet Treasure Island', year: 1996 }
      ];
      expect(allMoviesAreRecent(films)).to.equal(false);
    });
  });
  describe('someCatsAreSnooty', function () {
    it('returns true if any or all of the cats in the list are snooty', function () {
      const cats = [
        { name: 'Penelope', personality: ['friendly', 'affectionate'] },
        { name: 'Miranda', personality: ['playful', 'excitable'] },
        { name: 'Hank', personality: ['snooty', 'hungry'] },
        { name: 'Leopold', personality: ['sleepy', 'snooty'] }
      ];
      expect(someCatsAreSnooty(cats)).to.equal(true);
      const moreCats = [
        { name: 'Penelope', personality: ['snooty', 'affectionate'] },
        { name: 'Miranda', personality: ['snooty', 'excitable'] },
        { name: 'Hank', personality: ['snooty', 'hungry'] },
        { name: 'Leopold', personality: ['sleepy', 'snooty'] }
      ];
      expect(someCatsAreSnooty(moreCats)).to.equal(true);
    });
    it('returns false only if none of the cats are snooty', function () {
      const cats = [
        { name: 'Penelope', personality: ['friendly', 'affectionate'] },
        { name: 'Miranda', personality: ['playful', 'excitable'] },
        { name: 'Hank', personality: ['cuddly', 'hungry'] },
        { name: 'Leopold', personality: ['sleepy', 'aggressive'] }
      ];
      expect(someCatsAreSnooty(cats)).to.equal(false);
    });
  });
  describe('someMoviesAreBad', function () {
    it('returns true if some or all of the movies in a list have a rating of 5 or less', function () {
      const films = [
        { title: 'Frozen', rating: 5 },
        { title: 'Cars 2', rating: 2 },
        { title: 'Treasure Planet', rating: 9 },
        { title: 'Ratatouille', rating: 8 },
        { title: 'WALL-E', rating: 7 },
        { title: 'Inside Out', rating: 5 }
      ];
      expect(someMoviesAreBad(films)).to.equal(true);
      const moreFilms = [
        { title: 'The Jungle Book', rating: 1 },
        { title: 'Mary Poppins', rating: 2 },
        { title: 'The Sword in the Stone', rating: 4 },
        { title: 'Aladdin', rating: 3 },
        { title: 'Pocahontas', rating: 5 },
        { title: 'Muppet Treasure Island', rating: 2 }
      ];
      expect(someMoviesAreBad(moreFilms)).to.equal(true);
    });
    it('returns false only if all the films have a rating of 6 or more', function () {
      const films = [
        { title: 'The Jungle Book', rating: 10 },
        { title: 'Mary Poppins', rating: 9 },
        { title: 'The Sword in the Stone', rating: 6 },
        { title: 'Aladdin', rating: 8 },
        { title: 'Pocahontas', rating: 9 },
        { title: 'Muppet Treasure Island', rating: 10 }
      ];
      expect(someMoviesAreBad(films)).to.equal(false);
    });
  });
  describe('orderBySurname', function () {
    it('sorts people by surname in ascending order', function () {
      const tutors = [
          {forename: 'Sam', surname: 'Caine'},
          {forename: 'Mauro', surname: 'Gestoso'},
          {forename: 'Adie', surname: 'Williams'}, 
          {forename: 'Harriet', surname: 'Ryder'},
          {forename: 'Jonny', surname: 'Rathbone'}, 
          {forename: 'Mitch', surname: 'Lloyd'},
          {forename: 'Jonny', surname: 'Dunsby'}
        ];
      const sorted = [
        {forename: 'Sam', surname: 'Caine'},
        {forename: 'Jonny', surname: 'Dunsby'},
        {forename: 'Mauro', surname: 'Gestoso'},
        {forename: 'Mitch', surname: 'Lloyd'},
        {forename: 'Jonny', surname: 'Rathbone'}, 
        {forename: 'Harriet', surname: 'Ryder'},
        {forename: 'Adie', surname: 'Williams'}
      ];
      expect(orderBySurname(tutors)).to.eql(sorted);
    });
    it('returns a new array', function () {
      const arr = [];
      expect(orderBySurname(arr)).to.not.equal(arr);
    });
    it('does not mutate the original array', function () {
      const tutors = [
        {forename: 'Mauro', surname: 'Gestoso'},
        {forename: 'Sam', surname: 'Caine'}
      ];
      expect(orderBySurname(tutors)).to.not.eql(tutors);
    });
  });
  describe('orderByHeight', function () {
    it('sorts in ascending order by default when no boolean specified', function () {
      const tutors = [
        {name: 'Sam', height: 176},
        {name: 'Mauro', height: 187},
        {name: 'Adie', height: 183}, 
        {name: 'Harriet', height: 160},
        {name: 'Jonny', height: 180}, 
        {name: 'Mitch', height: 170},
        {name: 'JD', height: 177}
      ];
      const sorted = [
        {name: 'Harriet', height: 160},
        {name: 'Mitch', height: 170},
        {name: 'Sam', height: 176},
        {name: 'JD', height: 177},
        {name: 'Jonny', height: 180}, 
        {name: 'Adie', height: 183},
        {name: 'Mauro', height: 187}
      ];
      expect(orderByHeight(tutors)).to.eql(sorted);
    });
    it('sorts in ascending order when the boolean is specified as false', function () {
      const tutors = [
        {name: 'Sam', height: 176},
        {name: 'Mauro', height: 187},
        {name: 'Adie', height: 183}, 
        {name: 'Harriet', height: 160},
        {name: 'Jonny', height: 180}, 
        {name: 'Mitch', height: 170},
        {name: 'JD', height: 177}
      ];
      const sorted = [
        {name: 'Harriet', height: 160},
        {name: 'Mitch', height: 170},
        {name: 'Sam', height: 176},
        {name: 'JD', height: 177},
        {name: 'Jonny', height: 180}, 
        {name: 'Adie', height: 183},
        {name: 'Mauro', height: 187}
      ];
      expect(orderByHeight(tutors, false)).to.eql(sorted);
    });
    it('sorts in descending order when the boolean is true', function () {
      const tutors = [
        {name: 'Sam', height: 176},
        {name: 'Mauro', height: 187},
        {name: 'Adie', height: 183}, 
        {name: 'Harriet', height: 160},
        {name: 'Jonny', height: 180}, 
        {name: 'Mitch', height: 170},
        {name: 'JD', height: 177}
      ];
      const sorted = [
        {name: 'Mauro', height: 187},
        {name: 'Adie', height: 183},
        {name: 'Jonny', height: 180}, 
        {name: 'JD', height: 177},
        {name: 'Sam', height: 176},
        {name: 'Mitch', height: 170},
        {name: 'Harriet', height: 160}
      ];
      expect(orderByHeight(tutors, true)).to.eql(sorted);
    });
    it('returns a new array', function () {
      const original = [];
      expect(orderByHeight(original, true)).to.not.equal(original);
      expect(orderByHeight(original)).to.not.equal(original);
    });
    it('doesn\'t mutate the original array', function () {
      const original = [{name: 'Sam', height: 176}, {name: 'Mauro', height: 187}];
      expect(orderByHeight(original, true)).to.not.eql(original);
    });
  });
  describe('flattenArray', function () {
    it('removes single nesting of arrays', function () {
      expect(flattenArray([[1, 2, 3], ['a', 'b', 'c']])).to.eql([1, 2, 3, 'a', 'b', 'c']);
    });
  });
  describe('mirrorArray', function () {
    it('mirrors an array', function () {
      expect(mirrorArray([1, 2, 3])).to.eql([3, 2, 1]);
    });
    it('returns a new array', function () {
      const arr = [1, 2, 3];
      expect(mirrorArray(arr)).to.not.equal(arr);
    });
    it('does not mutate original array', function () {
      const arr = [1, 2, 3];
      mirrorArray(arr);
      expect(arr).to.eql([1, 2, 3]);
    });
  });
  describe('removeArraySection', function () {
    it('removes section of an array between two specified points', function () {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const names = ['Sam', 'Mauro', 'Adie', 'Harriet'];
      expect(removeArraySection(nums, 2, 6)).to.eql([1, 2, 8, 9]);
      expect(removeArraySection(names, 1, 2)).to.eql(['Sam', 'Harriet']);
    });
    it('does not mutate the original array', function () {
      const arr = [1, 2, 3, 4, 5];
      expect(removeArraySection(arr, 1, 2)).to.not.equal(arr);
    });
  });
  describe('pluck', function () {
    it('plucks values from objects and puts them in an array', function () {
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
      ];
      expect(pluck(tutors, 'name')).to.eql(['Sam', 'Adie', 'Mauro']);
      expect(pluck(tutors, 'age')).to.eql([29, 34, 28]);
    });
  });
  it('returns a new array', function () {
    const arr = [];
    expect(pluck(arr, 'hello')).to.not.equal(arr);
  });
});
