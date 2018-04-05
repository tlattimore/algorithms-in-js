/**
 * Checks a string for whether it is a valid palindrome.
 *
 * @param {string} phrase - The phrase to check against.
 */
const IsPalindrome = phrase => {
  phrase = phrase.toLowerCase();
  let chars = phrase.split('');
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let phraseLetters = [];
  chars.forEach(char => {
    if(validChars.indexOf(char) > -1) {
      phraseLetters.push(char);
    }
  });

  if (phraseLetters.join('') === phraseLetters.reverse('').join('')) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = IsPalindrome;
