const chunkArray = require("./chunk");

test("defined chunk", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk array of size 10 to be lengths of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
test("chunk array of size 10 to be lengths of 1", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
  ]);
});
