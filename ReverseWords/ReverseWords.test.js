const ReverseWords = require('./ReverseWords');

describe('Can you reverse a phrase', () => {
  test('reverse a phrase with several words', () => {
    expect(ReverseWords('Something awesome is about to happen')).toEqual('gnihtemos emosewa si tuoba ot neppah');
  });
});
