const CaeserCipher = require('./CaeserCipher');

describe('Is a caeser cipher possible', () => {
  test('can it reverse a string using a positive number', () => {
    expect(CaeserCipher('Zoo Keeper', 2)).toEqual('Bqq Mggrgt');
  });

  test('can it reverse using a negative number', () => {
    expect(CaeserCipher('Zoo Keeper', -2)).toEqual('Xmm Iccncp');
  });
});
