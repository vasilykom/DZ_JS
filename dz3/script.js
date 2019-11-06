'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    let i = 0;
    while (i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '')
        let b = prompt("Во сколько обойдется?", '');

        if (typeof (a) === 'string' && (typeof (a)) != null &&
            (typeof (b)) === 'string' && (typeof (b) != null &&
                a != '' && b != '' & a.length < 50)) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
        i++;
    }
}

chooseExpenses();

/* let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');

    if (typeof (a) === 'string' && (typeof (a)) != null &&
        (typeof (b)) === 'string' && (typeof (b) != null &&
            a != '' && b != '' & a.length < 50)) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
    i++
}
while (i<2); */



/* for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '')
    let b = prompt("Во сколько обойдется?", '');
    
    if (typeof (a) === 'string' && (typeof (a)) != null &&
        (typeof (b)) === 'string' && (typeof (b) != null &&
            a != '' && b != '' & a.length < 50)) {
                console.log("done");
                appData.expenses[a]=b;
    } else {
        console.log ("bad result");
        i--;
    }
}; */



function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert("Ежедневный бюжет: " + appData.moneyPerDay);
    detectLevel();

}
detectDayBudget();

function chooseOptExpenses(){
    let i=0;
    while (i<3){
        let ansverExpenses=+prompt(i+1+". Статья необязательных расходов?");
        appData.optionalExpenses[i]=ansverExpenses;
        i++;
    }
}
chooseOptExpenses();

11
function checkSaving() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Процент какой?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

    }
}

checkSaving();
