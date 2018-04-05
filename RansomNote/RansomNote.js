const sourceSet = `
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
public. The mathematician will in such cases have no difficulty in
expressing the matter under consideration in terms of his familiar
symbols.`;

const RemovePuncuation = string => {
  // Remove puncuation.
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  // Remove extra spaces leftover.
  return string.replace(/\s{2,}/g," ");
};

const RemoveNewLines = string => {
  return string.replace(/(\r\n\t|\n|\r\t)/gm,'');
}

const RansomNote = (noteText, magazineText) => {
  magazineText = RemovePuncuation(magazineText);
  magazineText = RemoveNewLines(magazineText);
  noteText = RemovePuncuation(noteText);
  noteText = RemoveNewLines(noteText);

  let note = noteText.split(' ');
  let magazine = magazineText.split(' ');
  let hashTable = {};

  magazine.forEach(word => {
    word = word.toLowerCase();
    // If the word isn't defined on the hashTable set its value to zero.
    if (hashTable[word] === undefined) {
      hashTable[word] = 0;
    }
    // Increase the value by one for every item. If it has already been
    // defined we increment it. If it has not been defined (set to 0_ it
    // just just gets a value of 1.
    hashTable[word]++
  });

  let noteIsPossible = true;
  note.forEach(word => {
    word = word.toLowerCase();
    if (hashTable[word]) {
      // Decrement each iteration of a word.
      hashTable[word]--;
      // If all our occurances are used up the note isn't possible.
      if (hashTable[word] < 0) {
        noteIsPossible = false;
      }
    }
    else {
      // If the word doesn't exist at all it isn't possible.
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

module.exports = RansomNote;
