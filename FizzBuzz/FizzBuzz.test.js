const FizzBuzz = require('./FizzBuzz');

describe('Run FizzBuzz', () => {
  const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11','Fizz','13', '14','FizzBuzz','16','17','Fizz', '19','Buzz'];

  it('FizzBuzz', () => {
    expect(FizzBuzz(20)).toEqual(
      expect.arrayContaining(expected),
    );
  });
});