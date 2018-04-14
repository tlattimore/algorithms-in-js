/**
 * Sort numbers in numerical order.
 *
 * @param {arr} Array - a list of numbers to sort
 */
const BubbleSort = (arr) => {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

module.exports = BubbleSort;
