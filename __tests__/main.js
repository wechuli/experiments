const { add } = require("../app/adder");
const { expect } = require("@jest/globals");

test("should add two integers correctly", () => {
  expect(add(1, 2)).toBe(3);
});
