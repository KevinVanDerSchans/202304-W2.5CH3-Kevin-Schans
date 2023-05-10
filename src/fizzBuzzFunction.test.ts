import { fizzBuzzRule } from "./fizzBuzz.js";

describe("Given the FizzBuzz function", () => {
  describe("When it receives as parameters, 2 and 6", () => {
    test("Then it should return [2, 'fizz', 4, 'buzz', 'fizz']", () => {
      const firstArgument = 2;
      const secondArgument= 6;

      const expected = [2, 'fizz', 4, 'buzz', 'fizz'];
      const result = fizzBuzzRule(firstArgument, secondArgument);

      expect(result).toStrictEqual(expected);
    });
  });
});
