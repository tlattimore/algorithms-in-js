/**
 * Reverse an array without usig Array.reverse().
 *
 * @param {arr} arrray - the array to be reversed.
 */
const ReverseArrayInPlace = arr => {
  for (let i =0; i < arr.length / 2; i++) {
    let tempItem = arr[i];
    arr[i] = arr[arr.length - 1 -i];
    arr[arr.length - 1 -i] = tempItem;
  }
  return arr;
};
module.exports = ReverseArrayInPlace;
