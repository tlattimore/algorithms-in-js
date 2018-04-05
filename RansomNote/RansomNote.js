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
