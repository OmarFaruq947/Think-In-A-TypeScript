"use strict";
// bank account
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    //getter
    get balance() {
        return this._balance;
    }
    // setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(102, "omar", 800);
console.log(myAccount.balance);
myAccount.deposit = 74;
console.log(myAccount);
