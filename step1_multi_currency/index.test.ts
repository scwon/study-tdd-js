import Dollar from "./Dollar";

test("달러 곱셈", () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
