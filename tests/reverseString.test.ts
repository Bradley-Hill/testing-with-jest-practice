const reverseString = require("../src/reverseString");

test("Returns the string in reversed order", () => {
  expect(reverseString("bradley")).toBe("yeldarb");
});
