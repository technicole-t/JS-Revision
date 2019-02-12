
const accessName = (person) => {
    // given a person object of the form {name: 'Bob', age: 42}
    // should return 'Bob'
};


const accessObject = (obj,key) => {
    // access the value in an object using a key
    // accessObject( { fruit: 'banana' }, 'fruit') <-- returns 'banana'
    // accessObject( { hero: 'erdos' }, 'hero') <-- 'erdos' 
};

const accessNestedArray = (obj,index) => {
    // object of the form { list: [] } <-- access something in this list
    // i.e. accessNestedArray({list : ['hey','whats','wrong','with','you']},3) // should return 'with'
};

const accessValueInArray = (arr,index,key) => {
    // an array of objects are given find the array at the given index and then access the property inside

    // e.g. accessValueInArray([{name: 'Sam'},{fruit: 'apple'}, {animal: 'rabbit', name: 'floppy'}, {hat: 'panama'}, {language: 'haskell',review: 'its cool'}, {'cat' : 'charlie'} ],4,'language'); //<-- should return 'haskell'
    // e.g. accessValueInArray([{name: 'Sam'},{fruit: 'apple'}, {animal: 'rabbit', name: 'floppy'}, {hat: 'panama'}, {language: 'haskell',review: 'its cool'}, {'cat' : 'charlie'} ],2,'name'); //<-- should return 'floppy'
};

const addProperty = (obj,keyValuePair) => {
    // keyValuePair is an array with a key and a value
    // e.g. ["name","mitch"]
    // use this pair to add the key value pair to a new obj with all the properties of the old obj
    // addProperty({job: 'teacher'},['name','mitch']) // should return {job: 'teacher', name: 'mitch }
};

const removeName = (person) => {
    // remove the age property from a person
    // do NOT use the delete operator
};

const removeProperty = (obj,key) => {
    // remove the key value pair from an object
};

const findNestedItem = (map,route) => {
    // {
    //     "bush" : {
    //         "hatch" : {
    //          "vault" : "faberge egg"
    //            }
    //     }
    // }
    // path would be a string with 'bush->hatch->vault'
    // create a function that will use the route string to 
    // access the nested object -> the map object will always be nested at 2 levels 
    // the map could be have whatever keys you like
};

