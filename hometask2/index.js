// let days = daysInMonth(1);
// function daysInMonth(month) {
//   const TODAY = new Date(Date.now());
//   return new Date(TODAY.getFullYear(), month, 0).getDate();
// }
// условия, циклы
/*
1. Решить квадратное уравнение 3x^2 + 7x + 10 = 0
2. Посчитать 7 факториал
3. Посчитать количество месяцев, которые имеют 31 день. Для получения количества месяцев использовать функцию daysInMonth
Например let days = daysInMonth(1) вернет количество дней в 1 месяце, тоесть в январе
4. У вражеского героя 1500 хп, спамить его тычками которые бьют рандомно в диапазоне 52-59.
Перед каждым ударом выводить сообщение "Enemy have <количество> HP, making hit."
После убийства вывести сообщение с итоговым количеством произведённых ударов в формате "Enemy hero is dead, <количество> hits were made"
Для получения случайного числа использовать функцию Math.random()
5. К врачу записаны 3 человека - Marie, Peter, John
К ресепшну подходит кто-то и говорит какое-нибудь имя
Если оно есть в записи - выводить сообщение "Hello, <имя>, take a seat"
Если же человек не записан, сообщить "Sorry, we have no such reservation"
*/
/* 1 */

const a = 3;
const b = 7;
const c = 10;
let rootOfTheQuadraticEquation1;
let rootOfTheQuadraticEquation2;
const D = Math.pow(b, 2) - 4 * a * c;

if (D > 0) {
  rootOfTheQuadraticEquation1 = (-b + Math.sqrt(D)) / (2 * a);
  rootOfTheQuadraticEquation2 = (-b - Math.sqrt(D)) / (2 * a);
  console.log(
    `Дискриминант равен  ${D}, x имеет два корня ${rootOfTheQuadraticEquation1} и ${rootOfTheQuadraticEquation2}`
  );
} else if (D === 0) {
  rootOfTheQuadraticEquation1 = (-b + Math.sqrt(D)) / (2 * a);
  console.log(
    `Дискриминант равен  ${D}, x имеет один корень ${rootOfTheQuadraticEquation1}`
  );
} else {
  console.log(`Дискриминант меньше 0, корней нет`);
}

/* 2 */
let nunberFactorial = 7;
let factorial = 1;

while (nunberFactorial > 0) {
  factorial = factorial * nunberFactorial;
  nunberFactorial -= 1;
}
console.log(`Факториал ${factorial}`);

/* 3 */
let monthNumber = 12;
let monthsWithTheSameNumberOfDays = 0;
function daysInMonth(month) {
  const TODAY = new Date(Date.now());
  return new Date(TODAY.getFullYear(), month, 0).getDate();
}
while (monthNumber > 0) {
  // monthNumber -= 1;
  let days = daysInMonth(monthNumber);
  if (days === 31) {
    monthsWithTheSameNumberOfDays++;
  }
  // switch (days) {
  //   case 31:
  //     monthsWithTheSameNumberOfDays++;
  //     break;
  //   // default:
  //   //   monthsWithTheSameNumberOfDays += 0;
  // }
  monthNumber -= 1;
}
console.log(
  `Такое количество дней имеет ${monthsWithTheSameNumberOfDays} месяцев.`
);

/* 4 */
function getRandomIntInclusive(min, max) {
  // min = Math.ceil(52);
  // max = Math.floor(59);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let heroHp = 1500;
let hit = 0;

while (heroHp >= 0) {
  console.log(`Enemy have ${heroHp} HP, making hit.`);
  heroHp -= getRandomIntInclusive(52, 59);
  hit += 1;
}

console.log(`Enemy hero is dead, ${hit} hits were made`);

/* 5 */
let clinicСlient;

clinicСlient = "Peter";

switch (clinicСlient) {
  case "Peter":
    console.log(`Hello, ${clinicСlient}, take a seat`);
    break;
  case "Marie":
    console.log(`Hello, ${clinicСlient}, take a seat`);
    break;
  case "John":
    console.log(`Hello, ${clinicСlient}, take a seat`);
    break;
  default:
    console.log("Sorry, we have no such reservation");
}

for (let i = 0; i < 10; ++i) {
  if (i === 5) {
    console.log("continue");
    continue;
  }
  console.log(i);
}
console.log("after loop");

/*
loop {
  if(book1 > book2) {
    continue;
  }
  replace()
}
*/

const person0ne = {
  name: `Bob`,
  age: 21,
};

function increasePersoneAge(person) {
  const updatePersone = Object.assign({}, person0ne);
  updatePersone.age += 1;
  return updatePersone;
}

const updatePersone = increasePersoneAge(person0ne);
console.log(person0ne.age); //21
console.log(updatePersone.age); //22
