interface Calculator {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
  multiply(x: number, y: number): number;
  divide(x: number, y: number): number;
}

const calculator: Calculator = {
  add(x: number, y: number): number {
    return x + y;
  },
  subtract(x: number, y: number) {
    return x - y;
  },
  multiply(x: number, y: number) {
    return x * y;
  },
};
module.exports = calculator;
