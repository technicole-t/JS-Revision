// ===> Array-Access <====
// =========> PART-1 <========

const getFirstItem = (arr) => {
    return arr[0];
    // write and test a function that returns the first-item in an array
};

const getLastItem = (arr) => {
    // write a function that returns the last item of any array
};

const getOuterSum = (nums) => {
    // returns the sum of the outer nums in an array
    // [10,3,4,5,6] --> returns 16
};

const getNestedItem = (arr, levelOne, levelTwo) => {
    // write a function that returns an item nested in an array
    // e.g. const nums = [ [100,7], [3,10,33], [2,2,2,5,78], [1900,3,4,17] ]
    // getNestedItem(nums,3,2) --> should return 4
};

const getItem = (arr, position) => {
    // returns the position in an array
    // if the position is greater than or equal to the array length then it will go back round
    // const arr = ['a','b','c','d'];
    // getItem(arr,2) // returns 'c'
    // getItem(arr,3) // returns 'd'
    // getItem(arr,4) // returns 'a'
};

const getMiddleItem = (arr) => {
    // write a function that returns the middle item of an array
    // if arr of odd length for time being 
    // [10,3,5]
};

const buildNewArray = (arr, positions) => {
    // returns a new array with the positions from the 
    // [100, 4, 5, 6, 8, 100, 33],[0, 1, 3] //<-- positions has max length of 3
    // return value should be [100, 4, 6] positions 0, 1 and 3 from the array
};

const accessWithString = (arr, indexString) => {
    // accessWithString([100,35,46,[100,3,[99, 36],1,2],[2]],'3->2->1');// returns 99

};

const calculateDeterminant = matrix => {
    // a matrix is an array with two arrays nested inside, each nested array has 2 numbers
    // an example of a matrix is [[10,3],[7,5]];
    // determinant is value found by multiplying the first number in the first array with the second number in the second array
    // subtract the second number in the first array multiplied by the first number in the second array
};

module.exports = { getFirstItem }
