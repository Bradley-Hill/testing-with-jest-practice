const capitalize = require("../src/capitalize");

test("Returns a string starting with a capital letter", () => {
  expect(capitalize("rupert")).toBe("Rupert");
});

test("Returns a string with all words capitalized", () => {
  expect(capitalize("This is a string")).toBe("This Is A String");
});
