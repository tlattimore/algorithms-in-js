const ReverseArrayInPlace = require('./ReverseArrayInPlace');

describe('Try and reverse an array', () => {
  test('Reverse an array with with words', () => {
    expect(ReverseArrayInPlace(['one', 'two', 'three', 'four', 'five'])).toEqual(['five', 'four', 'three', 'two', 'one']);
  });
});
