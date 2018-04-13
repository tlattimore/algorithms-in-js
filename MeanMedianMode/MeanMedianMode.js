/**
 * Get the mean of an array of numbers.
 *
 * @param {arr} Array - An array of numbers.
 */
const getMean = arr => {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });

  let mean = sum / arr.length;
  mean = parseFloat(parseFloat(mean).toFixed(2))

  return mean;
}

/**
 * Get the median from an array of numbers.
 *
 * @param {arr} Array - An array of numbers.
 */
const getMedian = arr => {
  arr.sort((a, b) => a - b);
  let median;

  if (arr.length % 2 !== 0) {
    median = Math.floor(arr.length / 2);
    median = arr[median];
  }
  else {
    let midUp = arr[(arr.length / 2) - 1]
    let midDown = arr[arr.length / 2]
    median = (midUp + midDown / 2);
  }

  return median;
}


/**
 * Get the mode from an array of numbers.
 *
 * @param {arr} Array - An array of numbers.
 */
const getMode = arr => {
  let hashTable = {};

  arr.forEach((item, i) => {
    if (hashTable[item] === undefined) {
      hashTable[item] = 1;
    }
    else {
      hashTable[item]++
    }
  });

  let largest = 0;
  let modes = [];
  for(let key in hashTable) {
    // Ensure this key
    if (hashTable.hasOwnProperty(key)) {
      if (hashTable[key] > largest) {
        modes = [key];
        largest = hashTable[key];
      }
      else if (hashTable[key] === largest) {
        modes.push(key);
      }
    }
  }

  if (modes.length === Object.keys(hashTable).length) {
    modes = [];
  }

  return modes;
}

/**
 * Get the mean, median, and mode from an array.
 *
 * @param {arr} Array - An array of numbers.
 */
const MeanMediaMode = arr => {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr),
  }
}

module.exports = MeanMediaMode;
