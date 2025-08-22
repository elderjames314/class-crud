class BankAccount {
  private balance: number;
 
  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
    }
  }

  getBalance(): number {
    return this.balance;
  }
}




const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(150);
