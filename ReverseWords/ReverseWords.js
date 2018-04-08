/**
 * Reverse every word in a string.
 */

const ReverseWords = phrase => {
  let words = phrase.split(' ');

  return words.map(word => {
    let lcword = word.toLowerCase();
    let reversedWord = '';

    // This could be done in less lines with word.split('').reverse().join('');
    // but it is nice to leave it as a string and also a good exercise in decremented loops.
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += lcword[i];
    }

    return reversedWord;
  }).join(' ');
}

module.exports = ReverseWords;
