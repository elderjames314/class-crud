var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited: ".concat(amount, ", New Balance: ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        }
        else {
            this.balance -= amount;
            console.log("Withdrawn: ".concat(amount, ", New Balance: ").concat(this.balance));
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
// Example usage
var account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(150);
