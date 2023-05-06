#! /usr/bin/env node
class Account {
    public balance: number;
    private owner: string;
  
    constructor(owner: string, initialBalance: number = 0) {
      this.balance = initialBalance;
      this.owner = owner;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
  
    public withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
      } else {
        console.log(`Insufficient funds. Current balance is ${this.balance}.`);
      }
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  class SavingsAccount extends Account {
    private interestRate: number;
  
    constructor(owner: string, initialBalance: number = 0, interestRate: number = 0.02) {
      super(owner, initialBalance);
      this.interestRate = interestRate;
    }
  
    public addInterest(): void {
      const interest = this.balance * this.interestRate;
      this.deposit(interest);
      console.log(`Added ${interest} in interest. New balance is ${this.balance}.`);
    }
  }
  
  class CheckingAccount extends Account {
    private overdraftLimit: number;
  
    constructor(owner: string, initialBalance: number = 0, overdraftLimit: number = 100) {
      super(owner, initialBalance);
      this.overdraftLimit = overdraftLimit;
    }
  
    public withdraw(amount: number): void {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
      } else {
        console.log(`Insufficient funds. Current balance is ${this.balance}.`);
      }
    }
  }
  
  // Example usage:
  const savingsAccount = new SavingsAccount("Alice", 1000);
  savingsAccount.deposit(500);
  savingsAccount.addInterest();
  console.log(`Savings account balance: ${savingsAccount.getBalance()}`);
  
  const checkingAccount = new CheckingAccount("Bob", 500);
  checkingAccount.withdraw(300);
  console.log(`Checking account balance: ${checkingAccount.getBalance()}`);
  checkingAccount.withdraw(400);
  console.log(`Checking account balance: ${checkingAccount.getBalance()}`);
  