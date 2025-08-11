const desc = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")

let income =[]
let expense = []

function registerIncomeTransaction () {
    const description = desc.value
    const amount = Number(amountInput.value)
    let isExpense = false

    return {
        description: description,
        amount: amount,
        type: "income"
    };

}

function registerExpenseTransaction () {
    const description = desc.value
    const amount = Number(amountInput.value)
    let isExpense = true

     return {
        description: description,
        amount: amount,
        type: "expense"
    };

}

incomeBtn.addEventListener("click", () => {
    const newTransaction = registerIncomeTransaction ()
    income.push(newTransaction)
    console.log (income)
    displayIncomeTransaction()
    updateBalance()
    clearInputs()
}
 )

expenseBtn.addEventListener("click", () => {
    const newTransaction = registerExpenseTransaction ()
    expense.push(newTransaction)
    console.log (expense)
    displayExpenseTransaction ()
    updateBalance()
    clearInputs()
}
 )

 function displayIncomeTransaction (){
    incomeList.innerHTML= ""
for (const item of income){
    const li = document.createElement("li")
    li.textContent = `${item.description}, ${item.amount} kr`
    incomeList.appendChild(li)
 }  
}

 function displayExpenseTransaction (){
 expenseList.innerHTML = ""
for (const item of expense){
    const li = document.createElement("li")
    li.textContent = `${item.description}, ${item.amount} kr`
    expenseList.appendChild(li)
 }
}


function updateBalance() {
    const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0)
    const totalExpense = expense.reduce((acc, curr) => acc + curr.amount, 0)
    const total = totalIncome - totalExpense
    balance.textContent = `${total}`
}


function clearInputs() {
    desc.value = ""
    amountInput.value = ""
}

