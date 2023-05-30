class Counter {
  static counter: number = 0;
  constructor(counter: number) {
    Counter.counter = counter;
  }

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }

  static decrement(): number {
    return (Counter.counter = Counter.counter - 0);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
