const caesarCipher = require("../src/caesarCipher");

test("Expect a string to be returned", () => {
  expect(caesarCipher("boob", 1)).toBe("boob");
});

test("Expect the word to be shifted ahead by 1", () => {
  expect(caesarCipher("boob", 1)).toBe("cppc");
});
