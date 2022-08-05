// Переменные, типы данных, операторы
/*
1. Вывести на экран число 345
2. Вывести текст "Hello, Peter" при помощи константы и переменной имени
3. Вывести площадь равностороннего треугольника со стороной 10. Формула для площади S = (a^2 * 3^(1/2))/4
4. Вывести результат. Начальная стоимость автомобиля 10000 евро, он покупается в Германии. При ввозе его на территорию Украины платиться пошлина в размере 20% от стоимости импортного товара. При этом дополнительно идут затраты на услуги перевозчика в размере 500 долларов (курс доллар/евро считать 0.96), а так же заправка полного бака в размере 100 литров стоимостью 1.875 евро/литр, плюс СТО на территории Украины стоимостью 1500 гривен. Курс гривна/евро 0.032. Сколько потратит покупатель?
5. Посчитать, сколько месяцев займёт выплата ипотеки на квартиру стоимостью 7 000 000 гривен равномерными платежами в размере 30 000 гривен. После подсчёта всех годовых и вычета базовой ставки итоговый процент равен 35%, тоесть в конечном итоге клиент заплатит 35% комиссии от заявленной стоимости банку. Результат вывести на экран.
6. Вывести уравнение 2+2*2 так, чтобы результат был равен 8.
7. Что выведет следующий кусок кода?
console.log(num)
var num = 10;

8. Что выведет следующий кусок кода?
console.log(num)
let num = 10;

9. Что выведет следующий кусок кода?
console.log(num)
const num = 10;

10. Сделать из строки "24556" число и вывести на экран. Для подтверждения так же вывести тип данных. Сделать проверку типа данных.
10*. Сделать такую операцию другим способом.

11. Сделать из строки "spoiled" число и вывести на экран. Для подтверждения так же вывести тип данных. Сделать проверку типа данных.

Для вывода использовать console.log(), для вычислений стараться придерживаться нейминга переменных и нотации. К примеру, константы по типу числа пи пишуться капсом
const PI = 3.14
*/

console.log(345); //1

const greetingsConst = `Hello, `; //2*
const name = "Peter";
console.log(greetingsConst + name);

let sidefATtiangle = 10; //3*
areaOfATtiangle = (Math.pow(sidefATtiangle, 2) * Math.pow(3, 1 / 2)) / 4;
console.log(areaOfATtiangle);

let carCost = 10000; //4
let importTax = (carCost / 100) * 20;
let dollarToEuroExchangeRate = 0.96; // DOLLAR_TO_ER...
let carrerServeces = 500 * dollarToEuroExchangeRate;
let refueling100L = 100 * 1.875;
let hryvniaToEuroExchangeRate = 32;
const expensesToTheCountryInHryvnias =
  (carCost + importTax + carrerServeces + refueling100L) *
  hryvniaToEuroExchangeRate;
let serviceStationInUkraine = 1500;
const totalCostCar = expensesToTheCountryInHryvnias + serviceStationInUkraine;
console.log(`Покупатель потратит ${totalCostCar} гривен`);

let apartmentPrice = 7000000; //5
let commissionOfTheBank = (apartmentPrice / 100) * 35;
const priceOfAnApartmentWithAMortgage = apartmentPrice + commissionOfTheBank;
let paymentPerMonth = 30000;
const mortgagePaymentTimeInMonths =
  priceOfAnApartmentWithAMortgage / paymentPerMonth;
console.log(
  `Выплата ипотеки на квартиру займёт ${mortgagePaymentTimeInMonths} месяцев`
);

console.log((2 + 2) * 2); //6

//7 Выведет "undefined" - значение неизвестно т.к "var" всегда переносится в верх документа, но переменная ей присваивается уже позже
//8 Выведет синтаксическую ошибку о том что индификатор обьявлен. Но находится на своём месте в коде, по этому его значение не известно
//9 Выведет синтаксическую ошибку "not defined" о том что индификатор не определён. Определение константы нужно писать сразу, позже её объявить нельзя, в отличии от `let`

let numberString = `24556`; //10
console.log(Number(numberString));
console.log(typeof Number(numberString));

let numberString2 = +`24556`; //10
console.log(numberString2);
console.log(typeof numberString2);

let str = `spoiled`; //11
console.log(Number(str));
console.log(typeof Number(str));
console.log(isNaN(Number(str)));
