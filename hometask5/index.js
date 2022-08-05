/**
 * 1. На вход приходит массив чисел.
 * Вернуть только непарные числа.
 */

function oddNumbers(arr) {
  const result = arr.filter(UnpairedNumbers);
  function UnpairedNumbers(numbers) {
    return numbers % 2 !== 0;
  }
  return result;
}
// 2v.
// function oddNumbers(arr) {
//     let result = [];
//     arr.forEach((element) => {
//       if (element % 2 !== 0) {
//         result.push(element);
//       }
//     });
//     return result;
//   }

console.log("Непарные числа:\n");
console.log([
  oddNumbers([1, 3, 2, 4, 7, 1, 1324, 764, 234, 93459, 532]), // [1, 3, 7, 1, 93459]
  oddNumbers([
    5, 3, 78, 32, 67, 7656, 234, 867, 34, 53, 56, 87, 435, 4325, 365,
  ]), // [5, 3, 67, 867, 53, 87, 435, 4325, 365]
  oddNumbers([
    6, 345, 3, 645, 6, 6, 35, 25, 346, 325, 5634, 5, 345, 3245, 324534, 7, 52,
    7,
  ]), // [345, 3, 645, 35, 25, 325, 5, 345, 3245, 7, 7]
]);
console.log("\n");

/**
 * 2. Цена товаров.
 * Вернуть стоимость всех товаров
 * Товары приходят массивом в формате
 * {
 *  id: 123,
 *  name: 'Pool',
 *  price: 200,
 *  count: 32,
 *  currency: 'UAH'
 * }
 */

function getTotalPrice(products) {
  let result = 0;
  for (let i = 0; i < products.length; i++) {
    result += products[i].price * products[i].count;
  }
  return result;
}

const data = JSON.parse(`
[{"id":1,"name":"Foxtail Barley","price":3141.17,"count":73,"currency":"UAH"},
{"id":2,"name":"Sierra Nevada Linanthus","price":733.35,"count":78,"currency":"UAH"},
{"id":3,"name":"Hawai'i Rockwort","price":3194.49,"count":16,"currency":"UAH"},
{"id":4,"name":"Lemonyellow Rosemallow","price":3570.19,"count":69,"currency":"UAHs"},
{"id":5,"name":"Nemoca Cimarrona","price":6551.84,"count":8,"currency":"UAH"},
{"id":6,"name":"Robust Lobelia","price":5931.92,"count":36,"currency":"UAH"},
{"id":7,"name":"Arburua Ranch Jewelflower","price":1820.16,"count":90,"currency":"UAH"},
{"id":8,"name":"Centipede Grass","price":8350.33,"count":7,"currency":"UAH"},
{"id":9,"name":"San Bernardino Vervain","price":5706.0,"count":56,"currency":"UAH"},
{"id":10,"name":"Waxydogbane","price":3424.19,"count":23,"currency":"UAH"}]
`);

console.log("Цена товаров:\n");
console.log(
  [
    getTotalPrice(data.slice(0, 3)), // 337618.55
    getTotalPrice(data.slice(3, 5)), // 298757.83
    getTotalPrice(data.slice(5)), // 834108.2
  ].join("\n")
);
console.log("\n");

/**
 * 3. Проверить, есть ли в массиве разные типы данных.
 * На вход приходят примитивные типы данных либо обьект
 */

function isDifferentDataTypes(data) {
  for (let i = 1; i < data.length; i++) {
    if (typeof data[0] !== typeof data[i]) {
      return true;
    }
  }
  return false;
}

console.log("Типы данных:\n");
console.log(
  [
    isDifferentDataTypes([1, 2, 3]), // false
    isDifferentDataTypes([1, 2, 3, false]), // true
    isDifferentDataTypes([1, 2, {}, false]), // true
  ].join("\n")
);
console.log("\n");

/**
 * 4. Посчитать средний возраст людей
 * { name: 'Kateryna', age: 26 }
 */

function avg(people) {
  let totalAge = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }
  return totalAge / people.length;
}

console.log("Средний возраст:\n");
console.log(
  [
    avg([
      { name: "Kateryna", age: 26 },
      { name: "Artur", age: 18 },
      { name: "Andriy", age: 28 },
    ]), // 24
    avg([
      { name: "Ruslan", age: 21 },
      { name: "Petro", age: 22 },
      { name: "Anastasiya", age: 24 },
      { name: "Dmytro", age: 45 },
    ]), // 28
  ].join("\n")
);
console.log("\n");
//Перебрать объект при помощи деструктуризации объекта
const info = {
  name: `Kate`,
  age: 26,
  sity: `Lviv`,
  contry: `Ukraine`,
};

function newObj(oldObj) {
  const obj = {};
  for (let [key, value] of Object.entries(oldObj)) {
    obj[key] = value;
  }
  return obj;
}

console.log(newObj(info));
