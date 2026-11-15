//Create a private variable using closures without using classes.

function BankAccount(initialBalance){
    let balance = initialBalance;

    return{
        deposit: function(amount){
            balance +=amount
            return balance

        },
        withdraw: function(amount){
            if(amount >balance){
                return " Insufficent Balance"
            }
              balance -= amount;
            return balance;

        },
        getBalance: function(){
            return balance
        }
    }
}
const account = BankAccount(1000);

console.log(account.getBalance()); // 1000

console.log(account.deposit(500)); // 1500

console.log(account.withdraw(200)); // 1300

console.log(account.balance); // undefined