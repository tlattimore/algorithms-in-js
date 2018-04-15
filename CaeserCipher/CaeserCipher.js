/**
 * Convert text using Caeser Cipher
 *
 * @param {phrase} string - the string to convert.
 * @param {phrase} number - the number to shift the letters by.
 */
const CaeserCipher = (phrase, num) => {
  // Split the phrase into an array.
  let phrasetWithCase = phrase.split('');
  let phraseSplit = phrase.toLowerCase().split('');
  // Split the alphabet into an array.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  num = num % alphabet.length;

  // Array to store our updated letters
  let updatedPhrase = [];
  let alphabetLength = alphabet.length;
  // Populate a the new array based on each items index and the `num`.
  phraseSplit.forEach((char, i) => {
    // Check to make sure the word isn't a space.
    if (char === ' ') {
      updatedPhrase.push(char);
      return;
    }

    // The new letter position.
    let newIndex = alphabet.indexOf(char) + num;
    // If the new index is larger than the alphabet loop
    // the background to the beginning or end.
    if (newIndex >= alphabetLength) {
      newIndex = newIndex - alphabetLength;
    }
    else if (newIndex < 0) {
      newIndex = newIndex + alphabetLength;
    }
    // The charecter based on the newly calculated index.
    let newChar = alphabet[newIndex];

    // Retain casing of original phrase
    if (char.toUpperCase() === phrasetWithCase[i]) {
      newChar = newChar.toUpperCase();
    }

    updatedPhrase.push(newChar);
  });

  let newPhrase = updatedPhrase.join('');
  return newPhrase;
}

module.exports = CaeserCipher;
