"use strict";
class Counter {
    constructor(counter) {
        Counter.counter = counter;
    }
    static increment() {
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 0);
    }
}
Counter.counter = 0;
console.log(Counter.increment());
console.log(Counter.increment());
