/**
 * Get all the prime numbers that exist up to a given number.
 *
 * @param {num} Integer - the number to count up to.
 */
const SieveOfEratosthenes = (num) => {
  let primes = [];
  for(let i = 0; i <= num; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;

  for(let i = 2; i <= Math.sqrt(num); i++) {
    for(let j = 2; j * i <= num; j++) {
      primes[j * i] = false;
    }
  }

  let results = [];
  for(i = 2; i < primes.length; i++) {
    if (primes[i] === true) {
      results.push(i);
    }
  }

  return results;
}

module.exports = SieveOfEratosthenes;
