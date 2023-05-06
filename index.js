#! /usr/bin/env node
class Account {
    balance;
    owner;
    constructor(owner, initialBalance = 0) {
        this.balance = initialBalance;
        this.owner = owner;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
        else {
            console.log(`Insufficient funds. Current balance is ${this.balance}.`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends Account {
    interestRate;
    constructor(owner, initialBalance = 0, interestRate = 0.02) {
        super(owner, initialBalance);
        this.interestRate = interestRate;
    }
    addInterest() {
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
        console.log(`Added ${interest} in interest. New balance is ${this.balance}.`);
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(owner, initialBalance = 0, overdraftLimit = 100) {
        super(owner, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
        else {
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
export {};
