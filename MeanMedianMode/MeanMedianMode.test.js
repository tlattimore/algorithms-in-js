const MeanMedianMode = require('./MeanMedianMode');

describe('check the mean, median and mode', () => {
  const MMM = MeanMedianMode([1, 8, 2, 2, 3, 4, 1, 3, 5, 5, 5, 8, 9]);
  test('can get the mean', () => {
    expect(MMM.mean).toEqual(4.31);
  });
  test('can get the median', () => {
    expect(MMM.median).toEqual(4);
  });
  test('can get the mode', () => {
    expect(MMM.mode).toEqual(['5']);
  });
});
