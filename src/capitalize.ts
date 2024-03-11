function capitalize(string) {
  let firstLetter = string.slice(0, 1);
  let firstLetterUpperCase = firstLetter.toUpperCase();

  const convertedString = firstLetterUpperCase + string.slice(1);
  return convertedString;
}
module.exports = capitalize;
