/* class BankAccount {
   public id : number;
    public name : string;
  private  balance :number;

    constructor(id : number, name : string, balance : number ){
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    getBalance () {
        console.log(`my current balance ${this.balance}`);
    }
    addDeposit(amount :number) {
        this.balance = this.balance + amount;
    }
}


class StudentAccount extends BankAccount { 
    test () {
        // this.  balance not suggest
    }
}
const myAccount = new BankAccount (4, "persdisa", 444444);
// myAccount.balance = 0;
myAccount.addDeposit(400);
console.log(myAccount) */