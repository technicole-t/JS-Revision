const getMultiplesOf10 = nums => {
  return nums.filter(num => num % 10 === 0);
};

const getMultiples = (nums, multiple) => {
  return nums.filter(num => num % multiple === 0);
};

const getJSFiles = files => {
  return files.filter(file => file.includes(".js"));
};

const getOldCats = cats => {
  return cats.filter(cat => cat.age > 10);
};

const getRecentTitles = films => {
  return films.filter(film => film.yearOfRelease >= 2019);
};

module.exports = {
  getMultiplesOf10,
  getJSFiles,
  getOldCats,
  getRecentTitles,
  getMultiples
};
