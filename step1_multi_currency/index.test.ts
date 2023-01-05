import Dollar from "./Dollar";

describe("화폐 계산", () => {
  test("달러 곱셈", () => {
    const five = new Dollar(5);
    const product = five.times(2);
    expect(product.amount).toEqual(10);
  });

  test("달러 곱셈 여러번", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test("같은지 확인", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
