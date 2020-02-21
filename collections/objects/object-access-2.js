const accessName = person => {
  return person.name;
  // given a person object of the form { name: 'Bob', age: 42 }
  // should return 'Bob'
};

const accessObject = (obj, key) => {
  return obj[key];
  // access the value in an object using a key
  // accessObject( { fruit: 'banana' }, 'fruit') <-- returns 'banana'
  // accessObject( { hero: 'erdos' }, 'hero') <-- 'erdos'
};

const accessNestedArray = (obj, index) => {
  if (Object.values(obj) < index) return "";
  let array = Object.values(obj);
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < index) {
      return "";
    } else if (array[i].length > index) {
      return array[i][index];
    }
  }
};
// object of the form { list: [] } <-- access something in this list
// i.e. accessNestedArray({list : ['hey','whats','wrong','with','you']},3) // should return 'with'

const addProperty = (obj, keyValuePair) => {
  if (keyValuePair.length === 0) return obj;
  // keyValuePair is an array with a key and a value
  // e.g. ["name","mitch"]
  // use this pair to add the key value pair to a new obj with all the properties of the old obj
  // addProperty({job: 'teacher'},['name','mitch'])
  // should return {job: 'teacher', name: 'mitch }
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
