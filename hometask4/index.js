/**
 * 1. Работник.
 * На вход приходит имя и фамилия работника, а так же его почасовая ставка
 * Вернуть информацию про работника, в которую входит:
 * - имя
 * - фамилия
 * - месячная зарплата грязная
 * - месячная зарплата чистая
 * Работник платит 20% НДС и 1.5% военный сбор, работает 8 часов 20 дней в месяц
 */

function getEmployeeInfo(name, surname, rate) {
  const gross = rate * (8 * 20);
  const VATAndMilitaryLevy = (gross / 100) * 21.5; //грабёж
  const netSalary = gross - VATAndMilitaryLevy;
  return {
    name: name,
    surname: surname,
    gross: gross,
    net: netSalary,
  };
}

// {
//   let gross = rate * (8 * 20);
//   let VATAndMilitaryLevy = (gross / 100) * 21.5; //грабёж
//   let netSalary = gross - VATAndMilitaryLevy;
//   console.log(
//     `name: \'${name}\', surname: \'${surname}\', gross: ${gross}, net: ${netSalary}`
//   );
// }

console.log("Работник:\n");
console.log([
  getEmployeeInfo("Ivan", "Pavliv", 250), // { name: 'Ivan', surname: 'Pavliv', gross: 40000, net: 31400 }
  getEmployeeInfo("Petro", "Romaniv", 150), // { name: 'Petro', surname: 'Romaniv', gross: 24000, net: 18840 }
  getEmployeeInfo("Andriy", "Starko", 100), // { name: 'Andriy', surname: 'Starko', gross: 16000, net: 14000 }
]);
console.log("\n");

/**
 * 2. HTTP запрос.
 * Обработать входной ответ от сервера и вернуть информацию о товаре
 * Данные приходят в формате
 * {
 *  success: true,
 *  code: 200,
 *  data: {
 *      name: 'some name',
 *      count: 10,
 *      price: 149.99,
 *      discount: 0,
 *  }
 * }
 *
 * Вернуть следующие параметры
 * - название
 * - присутствие в наличии
 * - количество в наличии
 * - цена
 * - цена со скидкой (только если скидка присутствует)
 */

function transform(response) {
  const name = response.data.name; //название
  let availability; //наличие
  if (response.data.count > 0) {
    availability = `В наличии`;
  } else {
    availability = `Нет в наличии`;
  }
  const quantityInStock = response.data.count; //количество в наличии
  const price = response.data.price; //цена
  let priceDiscount; //цена со скидкой (только если скидка присутствует)
  if (response.data.discount > 0) {
    priceDiscount =
      response.data.price -
      (response.data.price / 100) * response.data.discount;
    return {
      name,
      availability,
      quantityInStock,
      price,
      priceDiscount,
    };
  } else {
    return {
      name,
      availability,
      quantityInStock,
      price,
    };
  }
}

const resp1 = {
  success: true,
  code: 200,
  data: {
    name: "some name",
    count: 10,
    price: 250.99,
    discount: 0,
  },
};

const resp2 = {
  success: true,
  code: 200,
  data: {
    name: "some name",
    count: 0,
    price: 999.99,
    discount: 10,
  },
};

console.log("HTTP:\n");
console.log([transform(resp1), transform(resp2)]);
console.log("\n");

/**
 * 3. Copy.
 * Сделать глубокое копирование обьекта
 * Обьект не имеет внутри функций
 */

function copy(obj) {
  const obj2 = JSON.parse(JSON.stringify(obj));
  return obj2;
}

console.log("Copy:\n");
console.log([
  copy({ number: 123 }),
  copy({ number: 432, nested: { isAvailable: true } }),
]);
console.log("\n");

/**
 * Сделать то же самое но другим способом
 */

function copyUpgraded(obj) {
  const obj3 = structuredClone(obj);
  return obj3;
}

console.log("Copy upgraded:\n");
console.log([
  copy({ number: 123 }),
  copy({ number: 432, nested: { isAvailable: true } }),
]);
console.log("\n");
