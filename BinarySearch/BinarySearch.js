let searchCount = 0;

/**
 * Binary search algorithm. This assumes the numbers have already been sorted into
 * numerical order from smallest to largest.
 *
 * @param {arr} Array - the array of numbers to search
 * @param {key} Integer - the integer to find
 */
const BinarySearch = (arr, key) => {
  let midIndex= Math.floor(arr.length / 2);
  let midElem = arr[midIndex];
  searchCount++;

  if (midElem === key) {
    return `The number '${key}' was found in ${searchCount} iterations.`;
  }
  else if (midElem < key && arr.length > 1) {
    return BinarySearch(arr.splice(midIndex, arr.length), key);
  }
  else if (midElem > key && arr.length > 1) {
    return BinarySearch(arr.splice(0, midIndex), key);
  }
  else {
    return `The number '${key}' was not found.`;
  }
}

module.exports = BinarySearch;
