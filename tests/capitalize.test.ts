const capitalize = require("../src/capitalize");

test("Returns a string starting with a capital letter", () => {
  expect(capitalize("rupert")).toBe("Rupert");
});
