/**
 * Run a comparison of the sum of two numbers against a max value.
 *
 * @param {arr} Array - Array of numbers to add up.
 * @param {max} String - Value to check against.
 */
let TwoSum = (numList, sum = 100) => {
  let possibleCases = {};
  let results = [];
  let usedPairs = [];

  numList.forEach((number) => {
    if (typeof possibleCases[number] !== 'undefined') {
      let currentPair = [possibleCases[number], number];
      let currentPairAsString = currentPair.toString();

      if (usedPairs.indexOf(currentPairAsString)) {
        results.push([possibleCases[number], number]);
      }
    }
    else {
      let keyForRow = sum - number;
      let valueForRow = number;

      possibleCases[keyForRow] = valueForRow;
    }
  });

  return results;
};

module.exports = TwoSum;
