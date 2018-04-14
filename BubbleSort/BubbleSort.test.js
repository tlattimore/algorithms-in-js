const BubbleSort = require('./BubbleSort.js');

describe('can sort numbers in numerical order', () => {
  test('sort a list of numbers', () => {
    expect(BubbleSort([5, 3, 10, 20, 12, 6, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 6, 8, 10, 12, 20]);
  });
});
