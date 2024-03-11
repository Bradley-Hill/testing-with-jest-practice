const calculator = require("../src/calculator");

test("Expect calculator.add(1,2) to return 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Expect calculator.subtract(3,2) to return 1", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Expect calculator.subtract(2,3) to return -1", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Expect calculator.multiply(5,5) to return 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("Expect calculator.multiply(3,0) to return 0", () => {
  expect(calculator.multiply(3, 0)).toBe(0);
});

test("Expect calculator.divide(20,2) to return 10", () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test("Expect calculator.divide(20,0) to return Infinity", () => {
  expect(calculator.divide(20, 0)).toBe(Infinity);
});
