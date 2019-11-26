// let btnCalc = document.getElementById("start");
//
// let budVal = document.querySelector(".budget-value");
// let dayBudVal = document.querySelector(".daybudget-value");
// let levVal = document.querySelector(".level-value");
// let expVal = document.querySelector(".expenses-value");
// let optExpVal = document.querySelector(".optionalexpenses-value");
// let income  = document.querySelector(".income-value");
// let monSav = document.querySelector(".monthsavings-value");
// let yearSav = document.querySelector(".yearsavings-value");
// let tearVal = document.querySelector(".year-value");
// let monthVal = document.querySelector(".month-value");
// let dayVal = document.querySelector(".day-value");
//
// let expensesItemClass = document.querySelectorAll('.expenses-item');
// console.log(expensesItemClass);
// let btnApprove = document.querySelector('#expenses-item-btn');
// let btnCalculate = document.querySelector('#count-budget-btn');
//
// let optionalCostField = document.querySelectorAll(".optionalexpenses-item");
// console.log(optionalCostField);
//
// let chooseIncome = document.querySelector(".choose-income");
// let checkSavings = document.querySelector("#savings");
// let chooseSum = document.querySelector(".choose-sum");
// let choosePercent = document.querySelector(".choose-percent");
// let yearValue = document.querySelector(".year-value");
// let monthValue = document.querySelector(".monthValue");
// let dayValue = document.querySelector(".day-value");

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpenseBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpenseItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener('click', function () {
    time =  prompt('Введите дату');
    money  = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money)||money == ''||money==null){
        money = prompt("ваш бюджет ?");
    }
    appDate.budget = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function () {
   let sum = 0;

    for (let i=0;i<expensesItem.length;i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof a) != null && (typeof (b)) != null && a != '' && b != '' && a.length <50){
            appDate.expenses[a]=b;
            sum += +b;
        }else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpenseBtn.addEventListener('click', function () {
    for (let i=0;i<optionalExpenseItem.length;i++){
        let opt = optionalExpenseItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i]+"  ";
    }
});

countBtn.addEventListener('click', function () {
    
    if (appDate.budget!=undefined){
        appDate.moneyPerDay = (appDate.budget/30).toFixed();
        dayBudgetValue.textContent = appDate.moneyPerDay;

        switch (appDate.moneyPerDay) {
            case appDate.moneyPerDay < 100:
                levelValue.textContent = ("Минимальный уровень достатка");
                break;
            case appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000:
                levelValue.textContent = ("Средний уровень достатка");
                break;
            case appDate.moneyPerDay > 2000:
                levelValue.textContent = ("Высокий уровень достатка");
                break;
            default:
                levelValue.textContent = ( "Произошла ошибка" );
        }
    }else{
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input',function () {
    let items = incomeItem.value;
    appDate.income=items.split(', ');
    incomeValue.textContent = appDate.income;
});

 checkSavings.addEventListener('click',function () {
     if  (appDate.savings==true){
         appDate.savings=false;
     }
     else {
         appDate.savings=true;
     }
 });

 sumValue.addEventListener('input',function () {
     if (appDate.savings == true){
         let sum = +sumValue.value,
             percent = +percentValue.value;
         appDate.moneyIncome = sum/100/12*percent;
         appDate.yearIncome = sum/100*percent;

         monthSavingValue.textContent = appDate.moneyIncome.toFixed(1);
         yearSavingValue.textContent = appDate.yearIncome.toFixed(1);
     }
 });

percentValue.addEventListener('input',function () {
    if (appDate.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appDate.moneyIncome = sum/100/12*percent;
        appDate.yearIncome = sum/100*percent;

        monthSavingValue.textContent = appDate.moneyIncome.toFixed(1);
        yearSavingValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

let appDate= {
    budget: money,
    expenses: {},
    optionalExpenses:{},
    income:[],
    timeData: time,
    savings: false,
};
