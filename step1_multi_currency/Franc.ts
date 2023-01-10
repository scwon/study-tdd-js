import Money from "./Money";

class Franc extends Money {
  times = (multiplier: number) => {
    return new Franc(this.amount * multiplier);
  };
}

export default Franc;
