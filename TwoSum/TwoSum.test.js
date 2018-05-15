const TwoSum = require('./TwoSum.js');

describe('some of two numbers', () => {
  let sampleData = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51];
  const checker = [[1, 99], [100, 0 ], [10, 90 ], [50, 50],[51, 49]];
  test('calculate and compare some of two numbers', () => {
    expect(TwoSum(sampleData, 100)).toEqual(checker);
  });
});
