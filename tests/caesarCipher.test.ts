const caesarCipher = require("../src/caesarCipher");

test("Expect a string to be returned", () => {
  expect(caesarCipher("boob", 0)).toBe("boob");
});

test("Expect the word to be shifted ahead by 1", () => {
  expect(caesarCipher("boob", 1)).toBe("cppc");
});

test("Expect the word to be shifted ahead by 11", () => {
  expect(caesarCipher("rupert", 11)).toBe("cfapce");
});

test("Expect the word to be shifted backwards if negative number is provided", () => {
  expect(caesarCipher("boob", -1)).toBe("anna");
});
("");

test("Expect the word to be shifted backwards if large negative number is provided", () => {
  expect(caesarCipher("rupert", -11)).toBe("gjetgi");
});
