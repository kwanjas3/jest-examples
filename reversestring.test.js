const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});
test("reverseString", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
test("reverseString with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
