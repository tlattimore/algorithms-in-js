/**
 * Run a comparison of the sum of two numbers against a max value.
 *
 * @param {arr} Array - Array of numbers to add up.
 * @param {max} String - Value to check against.
 */
let TwoSum = (arr, max) => {
  let hashMap = {};
  let results = [];

  arr.forEach((item, i) => {
    if (hashMap[arr[i]]) {
      results.push([hashMap[arr[i]], arr[i]]);
    }
    else {
      hashMap[max - arr[i]] = arr[i];
    }
  });
  return results;
}

module.exports = TwoSum;
