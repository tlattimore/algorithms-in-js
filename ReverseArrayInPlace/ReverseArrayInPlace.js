/**
 * Reverse an array without usig Array.reverse().
 *
 * @param {list} arrray - the array to be reversed.
 */
const ReverseArrayInPlace = list => {
  const total = list.length;
  const listMaxIndex = total - 1;
  const limit = total / 2;

  for (let currentIndex = 0; currentIndex < limit / 2; currentIndex++) {
    let currentItem = list[currentIndex];
    let indexToSwapWith = listMaxIndex - currentIndex;
    list[currentIndex] = list[indexToSwapWith];
    list[indexToSwapWith] = currentItem;
  }

  return list;
};

module.exports = ReverseArrayInPlace;
