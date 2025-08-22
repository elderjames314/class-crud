class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
    console.log(`Deposited ₦${amount}. New balance: ₦${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Withdrawal must be positive");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
    console.log(`Withdrew ₦${amount}. New balance: ₦${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

// Example usage:
const account = new BankAccount(5000);
account.deposit(1500);
account.withdraw(2000);
console.log("Final Balance:", account.getBalance());