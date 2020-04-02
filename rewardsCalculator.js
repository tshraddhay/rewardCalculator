function rewardsCalculator(cost) {
    if (cost >=50 && cost < 100) {
        return cost-50;
    } else if (cost >100){
        return (2*(cost-100) + 50);
    }
    return 0;
}

class Transaction {
    constructor(cost) {
        this.cost = cost;
        this.rewards = rewardsCalculator(cost);
        this.transactionDate = new Date();
    }
}

class TransactionList {
    constructor() {
        this.list = [];
    }

    getLast3MonthsList() {
        var today = new Date();
        const threeOldDate = today.setMonth(today.getMonth() - 3);
        let filteredList = this.list.filter(trans => trans.transactionDate > threeOldDate);
        return filteredList.sort((a,b) => b.transactionDate - a.transactionDate);
    }

    getAllTransactions() {
        return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
    }

    addTransaction(cost) {
        const transaction = new Transaction(cost);
        this.list.push(transaction);
    }

    getTotalRewards() {
        return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
    }

    rewardPerMonth() {
        let last3MonthRewardsInDesc = [];
        for(let i=0; i<3; i++) {
            let filteredList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
            last3MonthRewardsInDesc[i] = filteredList.reduce((acc,key)=>key.rewards+acc,0);
        }
        return last3MonthRewardsInDesc;
    }
}

let myTransactionList = new TransactionList();
myTransactionList.addTransaction(154);
myTransactionList.addTransaction(54);
myTransactionList.addTransaction(200);
myTransactionList.addTransaction(20);
myTransactionList.addTransaction(300);
let arr = myTransactionList.getAllTransactions();
