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
    percentValue = document.querySelector('.choose-value'),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

function start(){
      money  = +prompt("Ваш бюджет на месяц?")
      time =  prompt('Введите дату')

    while (isNaN(money)||money == ''||money==null){
          money = prompt("ваш бюджет ?");
    }
}

start();

let appDate= {
    budget: money,
    expenses: {},
    optionalExpenses:{},
    income:[],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i=0;i<2;i++){
            let a = prompt("Введите обязательную статью расходовв этом месяце");
            let b = prompt("Во сколько обойдется?");

            if ((typeof a) != null && (typeof (b)) != null && a != '' && b != '' && a.length <50){
                appDate.expenses[a]=b;
            }else {
                i--;
            }
        }
    },
    detectedDayBudget: function () {
        appDate.moneyPerDay = (appDate.budget/30).toFixed();
        alert('Ежедневный бюджет ' + appDate.moneyPerDay);
    },
    detectedLevel: function () {
        switch (appDate.moneyPerDay) {
            case appDate.moneyPerDay < 100:
                console.log("Минимальный уровень достатка");
                break;
            case appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000:
                console.log("Средний уровень достатка");
                break;
            case appDate.moneyPerDay > 2000:
                console.log("Высокий уровень достатка");
                break;
            default:
                alert( "Произошла ошибка" );
        }
    },
    checkSavings: function () {
        if (appDate.savings==true){

            let save = +prompt("Какова сумма накоплений?");
            percent = +prompt("Под каой процент?");

            appDate.moneyIncome = save/100/12*percent;
            alert('Доход в месяц составляет ' + appDate.moneyIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i=1;i<3;i++){
            let opt = prompt("Статья не обязательных расходов?");
            appDate.optionalExpenses[i] = opt;
        }
    },
    chooseIncome:function () {
        let items = prompt('Что принесет допольниетльный доход? (Перечислите через запятую)');
        appDate.income=items.split(', ');
        appDate.income.push(prompt("может что то еще?"));
        appDate.income.sort();
    }
};
