/**
 * 1. Написать функцию, которая решает квадратное уравнение вида ax^2 + bx + c = 0
 * принимая аргументы a, b, c
 * Результат должен возвращаться в виде массива со всеми возможными решениями,
 * Или же пустого массива в случае когда решений нет
 */

function solveEquation(a, b = 0, c = 0) {
  const result = [];
  let rootOfTheQuadraticEquation1;
  let rootOfTheQuadraticEquation2;
  const D = b ** 2 - 4 * a * c;
  if (D > 0) {
    rootOfTheQuadraticEquation1 = (-b + Math.sqrt(D)) / (2 * a);
    rootOfTheQuadraticEquation2 = (-b - Math.sqrt(D)) / (2 * a);
    result.push(rootOfTheQuadraticEquation1, rootOfTheQuadraticEquation2);
  }
  if (D === 0) {
    rootOfTheQuadraticEquation1 = (-b + Math.sqrt(D)) / (2 * a);
    result.push(rootOfTheQuadraticEquation1);
  }
  return result;
}
/**
 * 2. Написать функицию которая найдёт наибольшее слово в тексте
 */

function getLargestWord(text) {
  let result = text.split(" ");
  let max = result[0];
  for (let i = 1; i < result.length; i++) {
    if (result[i].length > max.length) {
      max = result[i];
    }
  }
  return max;
}
// function getLargestWord(text) {
//     let result = text.split(" ");
//     let index = 0;

//     for (let i = 1; i < result.length; i++) {
//       if (result[i].length > result[index].length) {
//         index = i;
//       }
//     }
//     return result[index];
//   }
/**
 * 3. Написать функцию, которая проверит, является ли слово палиндромом
 * Палиндром - слово которое читается одинаково в обе стороны
 * Например око, топот, мадам
 * Сплит делит слова на масив из букв
 */

function isPalindrom(word) {
  if (typeof word !== `string`) {
    return false;
  }
  word = word.toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * 4. Написать функцию которая выравнивает массив 1 раз
 * Например, [ 1, 2, 3, [4, 5, 6]] => [1, 2, 3, 4, 5, 6]
 * [1, 2, [3, 4, [5, 6]]] => [1, 2, 3, 4, [5, 6]]
 */

function flatten(array) {
  let newArray = [];
  let i;
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray.push(...array[i]);
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

/**
 * 5. Написать функцию которая считает сумму всех введённых чисел
 * Если аргументом приходит что-то, отличающееся от числа, его можно игнорировать
 * Чтобы не получить NaN
 */

function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === `number`) {
      result += numbers[i];
    }
  }
  return result;
}

/**
 * 6. Написать функцию для обработки массива.
 * Функция должна работать по принципу Array.map:
 * Мы получаем массив и функцию-обработчик (callback),
 * Которая применяется к каждому из элементов массива и генерирует новый
 *
 * Например, массив [1, 2, 3] при использовании функции (number) => number * 2
 * Перемножит каждый элемент на 2 и вернёт результат [2, 4, 6]
 * Сам массив изменять нельзя, то есть результат вычислений надо поместить в новый массив
 * И вернуть его:
 * const arr1 = [1, 2, 3];
 * const arr2 = map(arr1, (num) => num * 2);
 * console.log(arr1); // [1, 2, 3] начальный массив не изменился
 * console.log(arr2); // [2, 4, 6] новый массив получил изменения
 */

function test(value) {}

test(5);

function map(array, fn) {
  // array => [2,5,6,8]
  // fn => function ...
  let newArray = [];
  array.forEach((element) => {
    // if (typeof element === `number`) {
    //   newArray.push(element * 2);
    // } else newArray.push(element);
    newArray.push(fn(element));
  });
  return newArray;
}

const arr = [2, 5, 6, 8];
const plus = (num) => num + 2;
console.log(
  map(arr, (num) => {
    console.log(`invoking ${num} result ${num * 2}`);
    return num * 2;
  })
); // [4,10,12,16]
console.log(map(arr, (num) => num - 1)); // [1,4,5,7]
console.log(map(arr, plus)); // [4,7,8,10]
console.log(arr);

arr.map(function (num) {
  return num * 2;
});
/**
 * 7. Реализовать бинарный поиск
 * Бинарный поиск используеться в отсортированом наборе данных.
 * Его алгоритм достаточно прост - к примеру нам надо найти номер телефона по заданому имени
 * В телефонной книжке. Список всех абонентов в книжке отсортирован, поэтому мы знаем,
 * Что все они размещены в алфавитном порядке от А до Я. Если нам, к примеру, нужно найти
 * Человека с именем Тарас Павленко, то самым оптимальным решением в таком случае будет
 * Разделить телефонную книжку пополам, и проверить, какой там абонент находится.
 * Допустим, наш абонент посередине книжки - Никита Шевченко. Мы знаем, что все абоненты
 * Размещены в алфавитном порядке, а также знаем, что буква "Н" в таком порядке идёт раньше чем "Т"
 * А значит, мы можем сделать вывод о том, что необходимый нам абонент находится в другой части
 * Телефонной книжки:
 * *---------------*          |          *---------------*
 * |---------------|          |          |---------------|
 * |---------------|          |          |---------------|
 * |---------------|          |          |---А где-то----|
 * |----Ненужный---| [Где-то тут Никита] |---в той части-|
 * |----нам мусор--|          |          |---наш Тарас---|
 * |---------------|          |          |---------------|
 * |---------------|          |          |---------------|
 * |---------------|          |          |---------------|
 * *---------------*          |          *---------------*
 * Таким образом, мы можем откинуть сразу половину абонентов, и потом так же повторить пример с половиной,
 * Откинув ещё половину от половины. И так, пока мы не найдём то, чего искали
 *
 *
 * Для примера реализовать бинарный поиск, который ищет определённое число в отсортированном массиве
 * Вернуть индекс данного числа. Если же такого числа нет, вернуть -1.
 */

function binarySearch(/*arguments goes here*/) {
  let requiredNumber = 56;
  // let i;
  // const { length } = arrNumbers;
  // let moietyLength = Math.floor(length / 2);
  // if (requiredNumber < arrNumbers[moietyLength])
  //   for (i = 0; i < length / 2; i++) {
  //     if (arrNumbers[i] === requiredNumber) {
  //       return i;
  //     }
  //   }
  // if (requiredNumber > arrNumbers[moietyLength]) {
  //   for (i = moietyLength; i < length; i++) {
  //     if (arrNumbers[i] === requiredNumber) {
  //       return i;
  //     }
  //   }
  // }
  let left = 0,
    right = arrNumbers.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (arrNumbers[middle] === requiredNum) {
      return middle;
    } else if (arrNumbers[middle] > requiredNum) {
      right = middle;
    } else if (arrNumbers[middle] < requiredNum) {
      left = middle + 1;
    }
  }
  return -1;
}

// Тестов пока нет, но их можно написать самостоятельно, + по окончанию я дам ещё тестов
console.log("Квадратное уравнение:\n");
console.log(solveEquation(3, 7, -10));
// console.log([]);
console.log("\n");

console.log("Длинное слово:\n");
console.log(getLargestWord(`Я тебя люблю`));
console.log([].join("\n"));
console.log("\n");

console.log("Палиндром:\n");
console.log(isPalindrom("Мадам"));
console.log([].join("\n"));
console.log("\n");

console.log("Выравнивание массива:\n");
console.log(flatten([1, 2, 3, [4, 5, 6]]));
console.log(flatten([1, 2, [3, 4, [5, 6]]]));
console.log([].join("\n"));
console.log("\n");

console.log("Сумма чисел:\n");
console.log(sum(1, 5, `Hello`, 56, `154`, true));
console.log([].join("\n"));
console.log("\n");

console.log("Сумма чисел:\n");
console.log(map([`Не число`, 5, 15]));
console.log([].join("\n"));
console.log("\n");

console.log("Бинарный поиск:\n");
console.log([].join("\n"));
console.log("\n");
