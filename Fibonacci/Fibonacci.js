/**
 * Fetch a given number for the fibonancci sequence.
 *
 * @param {index} Integer - the number being retrieved
 * @param {cache} Array - an array of numbers calculated up to the current index
 */
const Fibonacci = (index, cache) => {
  cache = cache || [];

  // If there is a value for the current index in the cache
  // return it before anything else.
  if (cache[index]) {
    return cache[index];
  }
  else {
    if (index < 3) {
      return 1;
    }
    else {
      // Calculate current value based on the values of the two previous indexes.
      // And store it in the cache.
      cache[index] = Fibonacci(index - 1, cache) + Fibonacci(index - 2, cache);
    }
  }

  return cache[index];
}


module.exports = Fibonacci;
