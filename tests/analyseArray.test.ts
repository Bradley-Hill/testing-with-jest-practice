const Analysis = require("../src/analyseArray");

test("Expect the function to return an object", () => {
  const result = Analysis([1, 1, 4, 5, 8, 19]);
  expect(typeof result).toBe("object");
  expect(Array.isArray(result)).toBe(false);
});

test("Expect the function to return an Object with the length property", () => {
  expect(Analysis([1, 1, 4, 5, 8, 17])).toHaveProperty("length", 6);
});

test("Expects the function to return an Object with the average of the values in the passed array", () => {
  expect(Analysis([1, 1, 4, 5, 8, 17])).toHaveProperty("average", 6);
});

test("Expects the function to return an Object with the min property", () => {
  expect(Analysis([1, 1, 4, 5, 8, 17])).toHaveProperty("min", 1);
});

test("Expects function to return an Object with the max value within the array", () => {
  expect(Analysis([1, 1, 4, 5, 8, 17])).toHaveProperty("max", 17);
});

test("To throw an error with a non-number within the array", () => {
  expect(() => Analysis([1, 1, 4, 5, 8, 17, "Barry"])).toThrow(Error);
});
