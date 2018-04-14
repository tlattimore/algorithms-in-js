const Fibonacci = require('./Fibonacci.js');

describe('calculate the Fibonacci sequence', () => {
  test('find the 50th number in the Fibonacci sequence', () => {
    expect(Fibonacci(50)).toEqual(12586269025);
  });
  test('find the 2nd number in the Fibonacci sequence', () => {
    expect(Fibonacci(2)).toEqual(1);
  });
});
