
const { expect } = require('chai');
const { getFirstItem } = require('../collections/array-access');

describe('getFirstItem()', () => {
    it('returns undefined for an empty array', () => {
        const input = [];
        const actual = getFirstItem(input); // <-- what it is actually returning
        const expected = undefined; // <-- what we want our function to return
        expect(actual).to.equal(expected);
    });
    it('returns first item for an array with one primitive value', () => {
        const input = [42];
        const actual = getFirstItem(input); // <-- what it is actually returning
        const expected = 42; // <-- what we want our function to return
        expect(actual).to.equal(expected);
    });
    it('returns first item for an array with one non-primitive value', () => {
        const input = [{ name: 'bob' }];
        const actual = getFirstItem(input); // <-- what it is actually returning
        const expected = { name: 'bob' }; // <-- what we want our function to return
        expect(actual).to.eql(expected);
    });
    it('returns first item for an array of multiple primitive values', () => {
        const input = [100, 3, 4];
        const actual = getFirstItem(input); // <-- what it is actually returning
        const expected = 100; // <-- what we want our function to return
        expect(actual).to.eql(expected);
    });
});

describe('getLastItem()', () => {
    it('', () => {

    });
});