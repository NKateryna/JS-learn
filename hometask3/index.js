/**
 * 1. Foo/bar.
 * Проверить число. Если оно делится на 3, вернуть 'foo'
 * Если оно делится на 5, вернуть 'bar'
 * Если оно делится на 3 и 5, вернуть 'foobar'
 * Для возвращения использовать оператор return (return 'foo';)
 */

function fooBarBaz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return "foobar";
  } else if (number % 5 === 0) {
    return "bar";
  } else if (number % 3 === 0) {
    return "foo";
  }
}

console.log("Foo/bar:\n");
console.log(
  [
    fooBarBaz(3), // foo
    fooBarBaz(5), // bar
    fooBarBaz(15), // foobar
  ].join("\n")
);
console.log("\n");

/**
 * 2. Степень.
 * Необходимо поднести число в степень без использования операторов
 * или функций возведения в степень и вернуть его.
 * Степень считаеться целым положительным числом больше нуля.
 * Для возвращения использовать оператор return
 */

function power(number, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * number;
  }
  return result;
}

console.log("Степень:\n");
console.log(
  [
    power(2, 2), // 4
    power(3, 2), // 9
    power(5, 3), // 125
    power(8, 1), // 8
    power(12, 2), // 144
  ].join("\n")
);
console.log("\n");

/**
 * 3. Фибоначчи.
 * Вернуть число фибоначчи под указаным номером
 * Например, чтобы найти число фибоначчи под номером 6,
 * Исходя из ряда фибоначчи 1 1 2 3 5 8 13 ...
 * Под номером 6 окажется число 8
 * Для возвращения использовать оператор return
 */

function fibo(number) {
  let a = 1; //fibo 1
  let b = 1; //fibo 2
  for (let i = 3; i <= number; i++) {
    let c = a + b; //fibo 3
    a = b;
    b = c;
  }
  return b;
}

console.log("Фибоначчи:\n");
console.log(
  [
    fibo(2), // 1
    fibo(5), // 5
    fibo(8), // 21
    fibo(10), // 55
  ].join("\n")
);
console.log("\n");

/**
 * 4. Сортировка чисел.
 * Отсортировать 3 числа по возрастанию,
 * вернуть строку из 3 чисел, разделённых пробелом
 * Для возвращения использовать оператор return
 */

function sort(num1, num2, num3) {
  let minNum = Math.min(num1, num2, num3); // num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3)
  let maxNum = Math.max(num1, num2, num3); // num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3)
  let min;
  if (num1 < num2) {
    if (num1 < num3) {
      min = num1;
    } else {
      min = num3;
    }
  } else {
    if (num2 < num3) {
      min = num2;
    } else {
      min = num3;
    }
  }
  //   if (num1 > minNum && num1 < maxNum) {
  //     minNum = String(minNum);
  //     maxNum = String(maxNum);
  //     num1 = String(num1);
  //     console.log(`${minNum} ${num1} ${maxNum}`);
  //   } else if (num2 > minNum && num2 < maxNum) {
  //     num2 = String(num2);
  //     minNum = String(minNum);
  //     maxNum = String(maxNum);
  //     console.log(`${minNum} ${num2} ${maxNum}`);
  //   } else if (num3 > minNum && num3 < maxNum) {
  //     num3 = String(num3);
  //     minNum = String(minNum);
  //     maxNum = String(maxNum);
  //     console.log(`${minNum} ${num3} ${maxNum}`);
  //   } else if (num1 == num2 && num2 == num3) {
  //     num1 = String(num1);
  //     num2 = String(num2);
  //     num3 = String(num3);
  //     console.log(`${num1} ${num2} ${num3} `);
  //   } else if (num1 == num2 && num2 > minNum) {
  //     num1 = String(num1);
  //     num2 = String(num2);
  //     minNum = String(minNum);
  //     console.log(`${minNum} ${num1} ${num2}`);
  //   } else if (num2 == num3 && num2 > minNum) {
  //     num2 = String(num2);
  //     num3 = String(num3);
  //     minNum = String(minNum);
  //     console.log(`${minNum} ${num2} ${num3}`);
  //   }
  if (num1 <= maxNum && num1 >= minNum) {
    return `${minNum} ${num1} ${maxNum}`;
  }
  if (num2 <= maxNum && num2 >= minNum) {
    return `${minNum} ${num2} ${maxNum}`;
  }
  return `${minNum} ${num3} ${maxNum}`;
}

console.log("Сортировка:");
console.log(
  [
    sort(1, 1, 0),
    sort(2, 1, 10),
    sort(128, 256, 1),
    sort(-1, -5, -7),
    sort(0, 0, 0),
  ].join("\n")
);
console.log("\n");
