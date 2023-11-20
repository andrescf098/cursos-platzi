const math = require("./02-math");

test("add 1 + 3 to equal 4", () => {
  const rta = math.sum(1, 3);
  expect(rta).toBe(4);
});
test("should be 4", () => {
  const rta = math.multiply(1, 4);
  expect(rta).toBe(4);
});
test("should be ", () => {
  const rta = math.divide(4, 0);
  expect(rta).toBeNull();
});
