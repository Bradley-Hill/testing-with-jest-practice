function capitalize(string): String {
  let arrayOfWords: String[] = string.match(/\b\w+\b/g);
  let convertedArrayOfWords: String[] = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    let firstLetter: String = arrayOfWords[i].slice(0, 1);
    let firstLetterUpperCase: String = firstLetter.toUpperCase();
    let convertedWord: String = firstLetterUpperCase + arrayOfWords[i].slice(1);
    convertedArrayOfWords.push(convertedWord);
  }

  return convertedArrayOfWords.join(" ");
}
module.exports = capitalize;
