const MaxProfit = require('./MaxProfit.js');

describe('calculate the maximum profit possible for a stock for a day', () => {
  test('calculate the max profit of x stock', () => {
    expect(MaxProfit([50, 57, 98, 70, 22, 34])).toEqual('The maximum profit is 48.');
  });
});
