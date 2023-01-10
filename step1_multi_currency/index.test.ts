import Dollar from "./Dollar";
import Franc from "./Franc";
import Money from "./Money";

test("같은지 확인", () => {
  expect(new Money(5).equals(new Money(5))).toBeTruthy();
  expect(new Money(5).equals(new Money(6))).toBeFalsy();
  expect(new Dollar(5).equals(new Franc(5))).toBeFalsy();
});

describe("달러 계산", () => {
  test("달러 곱셈", () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });
});

describe("프랑 계산", () => {
  test("프랑 곱셈", () => {
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBeTruthy();
    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });
});
