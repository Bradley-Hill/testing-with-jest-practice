function reverseString(string: String): String {
  let reversedString = string.split("").reduce((acc, char) => char + acc, "");
  return reversedString;
}
module.exports = reverseString;
