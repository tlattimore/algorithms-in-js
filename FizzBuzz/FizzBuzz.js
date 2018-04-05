/**
 * Standard FizzBuzz challenge.
 *
 * More info: https://en.wikipedia.org/wiki/Fizz_buzz
 *
 * @param {integer} max A number to loop over.
 */
const FizzBuzz = max => {
  let results = [];
  // This can be written in shorter ways but I find breaking it
  // out like this is easier to read.
  for (let i = 1; i <= max; i++) {
    if (i % 15 === 0)  {
      results.push('FizzBuzz');
    }
    else if (i % 3 === 0) {
      results.push('Fizz');
    }
    else if (i % 5 === 0) {
      results.push('Buzz');
    }
    else {
      results.push(`${i}`);
    }
  }

  return results;
}

module.exports = FizzBuzz;
