class Dollar {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times = (multiplier: number) => {
    return new Dollar(this.amount * multiplier);
  };
}

export default Dollar;
