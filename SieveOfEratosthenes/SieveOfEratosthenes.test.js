const SieveOfEratosthenes = require('./SieveOfEratosthenes.js');

describe('can find all the prime numbers up to given number', () => {
  test('can find the prime numbers between 0 and 20', () => {
    expect(SieveOfEratosthenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
