/**
 * Run a comparison of the sum of two numbers against a max value.
 *
 * @param {arr} Array - Array of numbers to add up.
 * @param {max} String - Value to check against.
 */
let TwoSum = (numList, max) => {
  let possibleCases = {};
  let listOfSums= [];

  numList.forEach((number) => {
    if (possibleCases[number]) {
      listOfSums.push([possibleCases[number], number]);
    }
    else {
      let keyForRow = max - number;
      let valueForRow = number;
      possibleCases[keyForRow] = valueForRow;
    }
  });

  return listOfSums;
}

module.exports = TwoSum;
