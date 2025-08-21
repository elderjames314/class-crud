"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Deposit must be positive");
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= 0)
            throw new Error("Withdraw must be positive");
        if (amount > this.balance)
            throw new Error("Insufficient funds");
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
exports.default = BankAccount;
var account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log("Final balance:", account.getBalance());
