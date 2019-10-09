const accessName = person => {
  // given a person object of the form { name: 'Bob', age: 42 }
  // should return 'Bob'
};

const accessObject = (obj, key) => {
  // access the value in an object using a key
  // accessObject( { fruit: 'banana' }, 'fruit') <-- returns 'banana'
  // accessObject( { hero: 'erdos' }, 'hero') <-- 'erdos'
};

const accessNestedArray = (obj, index) => {
  // object of the form { list: [] } <-- access something in this list
  // i.e. accessNestedArray({list : ['hey','whats','wrong','with','you']},3) // should return 'with'
};

const addProperty = (obj, keyValuePair) => {
  // keyValuePair is an array with a key and a value
  // e.g. ["name","mitch"]
  // use this pair to add the key value pair to a new obj with all the properties of the old obj
  // addProperty({job: 'teacher'},['name','mitch']) // should return {job: 'teacher', name: 'mitch }
};

const removeName = person => {
  // remove the age property from a person
  // do NOT use the delete operator
};

const removeProperty = (obj, key) => {
  // remove the key value pair from an object
};

module.exports = {
  accessName,
  accessObject,
  accessNestedArray,
  addProperty,
  removeName,
  removeProperty
};
