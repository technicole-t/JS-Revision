const incrementNums = (nums, increment) => {
  if (increment >= 0) {
    return nums.map(num => num + increment);
  } else {
    return nums;
  }
};

const multiplyNums = (nums, multiple) => {
  if (multiple >= 0) {
    return nums.map(num => num * multiple);
  } else {
    return nums;
  }
};

const extractPonyNames = ponies => {
  return ponies.map(pony => pony.name);
};

const getFullNames = people => {
  return people.map(person => person.firstname + " " + person.surname);
};

const makeNameSentence = people => {
  return people.map(
    person => `${person.firstName} ${person.surName} is ${person.age} years old`
  );
};

// GET HELP
const makeFilmDetails = films => {
  return films;
};

const getMainDetails = () => {};

module.exports = {
  incrementNums,
  multiplyNums,
  extractPonyNames,
  makeNameSentence,
  getFullNames,
  makeFilmDetails,
  getMainDetails
};
