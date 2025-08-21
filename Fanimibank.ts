class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Deposit must be positive");
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) throw new Error("Withdraw must be positive");
        if (amount > this.balance) throw new Error("Insufficient funds");
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

export default BankAccount;

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log("Final balance:", account.getBalance());