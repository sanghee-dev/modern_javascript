class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.repaintCount();
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners() {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase = () => {
    this.count += 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count -= -1;
    this.repaintCount();
  };
  repaintCount = () => (this.counter.innerText = this.count);
}

const calculator = new Counter({
  counterId: "count",
  plusId: "plus",
  minusId: "minus",
});

const calculator1 = new Counter({
  initialNumber: 10,
  counterId: "count1",
  plusId: "plus1",
  minusId: "minus1",
});
