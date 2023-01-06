import Dollar from "./Dollar";
import Franc from "./Franc";

describe("달러 계산", () => {
  test("달러 곱셈", () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  test("같은지 확인", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});

describe("프랑 계산", () => {
  test("프랑 곱셈", () => {
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBeTruthy();
    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });
});
