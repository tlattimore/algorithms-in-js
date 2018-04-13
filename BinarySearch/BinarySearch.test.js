const BinarySearch = require('./BinarySearch.js');
let dataSet = [4, 5, 6, 8, 9, 22, 23, 24, 28, 30, 40, 42, 43, 44, 55, 56, 57, 58, 59, 72, 79, 80, 81];

describe('perform a binary search', () => {
  test(`find the number '8'`, () => {
    expect(BinarySearch(dataSet, 8)).toEqual(`The number '8' was found in 4 iterations.`);
  });
});
