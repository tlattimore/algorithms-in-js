/**
 * Sort numbers in numerical order.
 *
 * @param {list} Array - a list of numbers to sort
 */
const BubbleSort = list => {
  let runAgain = false;
  const limit = list.length;
  const defaultNextValue = Number.POSITIVE_INFINITY;

  for (let i = 0; i < limit; i++) {
    let currentValue = list[i];
    let nextValue = i + 1 < limit ? list[i + 1] : defaultNextValue;

    if (nextValue < currentValue) {
      list[i] = nextValue;
      list[i + 1] = currentValue;
      runAgain = true;
    }
  }

  if (runAgain === true) {
    BubbleSort(list);
  }

  return list;
}

module.exports = BubbleSort;
