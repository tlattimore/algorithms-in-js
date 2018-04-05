const RansomNote = require('./RansomNote');

describe('Is a ransom note possible', () => {
  const mockSource = `
  In many cases only the mere answers are given. This leaves the beginner
  something to do on his own behalf in working out the method of solution,
  and saves space that would be wasted from the point of view of the
  advanced student. On the other hand, in particular cases where it seemed
  likely to interest, I have given rather extensive solutions and treated
  problems in a general manner. It will often be found that the notes on
  one problem will serve to elucidate a good many others in the book; so
  that the reader's difficulties will sometimes be found cleared up as he
  advances. Where it is possible to say a thing in a manner that may be
  "understanded of the people" generally, I prefer to use this simple
  phraseology, and so engage the attention and interest of a larger
  public. `;

  test('can be possible', () => {
    expect(RansomNote('something likely to interest in interest', mockSource)).toBeTruthy();
  });

  test('can be not possible', () => {
    expect(RansomNote('computer science is fun', mockSource)).toBeFalsy();
  });
});
