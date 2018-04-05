const IsPalindrome = require('./IsPalindrome');

describe('Check for valid palindromes', () => {
  test('is it a palindrome?', () => {
    expect(IsPalindrome('Madam I\'m Adam')).toBeTruthy();
  });

  test('is it not a palindrom?', () => {
    expect(IsPalindrome('computer science is fun')).toBeFalsy();
  });
});
