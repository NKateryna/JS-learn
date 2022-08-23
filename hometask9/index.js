const fetch = require("node-fetch");
// Для эмуляции сервера будем использовать стороннюю библиотеку.
// Для запуска необходимо в терминале запустить команду
// npm install -g json-server для установки
// И json-server hometask9/server.json для запуска

// Для запуска кода использовать команды
// npm install для установки всех зависимостей (достаточно установить их 1 раз, после код можно запускать)
// npm run start для запуска кода

/**
 * 1. Сделать GET запрос на сервер за адресом http://localhost:3000/users
 * И вернуть только значимую часть запроса (Идентификатор, например, не выводится на экран, потому для обработки он может быть ненужен).
 *
 * Переписать выполнение с использованием синтаксиса async/await
 */
const BASE_URL = "http://localhost:3000";

function deleteInfo(array, ...keys) {
  array.forEach((element) => {
    for (let i = 0; i < keys.length; i++) {
      delete element[keys[i]];
    }
  });
  return array;
}

async function readUsers() {
  const response = await fetch(`${BASE_URL}/users/`);
  const users = await response.json();
  console.log(deleteInfo(users, "id"));
}

readUsers();

/**
 * 2. Сделать POST запрос на сервер за адресом http://localhost:3000/users
 * Добавить пользователя со своим именем, фамилией и возрастом
 * После успешного запроса отправить новый запрос для того чтобы получить
 * Всех пользователей и убедиться в том что новый пользователь добавлен
 *
 * Переписать выполнение с использованием синтаксиса async/await
 */
async function createUser(user = {}) {
  await fetch(`${BASE_URL}/users/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const response = await fetch(`${BASE_URL}/users/`);
  const users = await response.json();
  console.log(users);
}

createUser({
  name: "Maksim",
  surname: "Citrusov",
  age: 34,
});

/**
 * 3. При помощи DELETE запроса на сервер за адресом http://localhost:3000/users
 * Удалить своего пользователя, которого создали в задани 2
 * После успешного запроса отправить новый запрос для того чтобы получить
 * Всех пользователей и убедиться в том что пользователь удален
 *
 * Переписать выполнение с использованием синтаксиса async/await
 */

async function deleteUsers(id) {
  await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  const respone = await fetch(`${BASE_URL}/users/`);
  const users = await respone.json();
  console.log(users);
}

deleteUsers(3);

/**
 * 4. Получить данные про пользователя за адресом http://localhost:3000/users/1 используя метод GET
 * Запросом PUT на сервер за адресом http://localhost:3000/users/1 изменить возраст на 66
 * После сделать запрос GET на сервер за адресом http://localhost:3000/users/1
 * И получить данные про измененного пользователя
 *
 * Переписать выполнение с использованием синтаксиса async/await
 */

function transformedModel(obj, info = {}, ...keys) {
  const user = Object.assign(obj, info);
  Object.keys(user).forEach((element) => {
    for (let i = 0; i < keys.length; i++) {
      if (element.toString() === keys[i]) {
        delete user[keys[i]];
      }
    }
  });
  return user;
}

async function updateUserAge(id, key, value) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const user = await response.json();
  transformedModel(user, key, value);
  await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const responseUpdate = await fetch(`${BASE_URL}/users/${id}`);
  const userUpdate = await responseUpdate.json();
  console.log(userUpdate);
}

updateUserAge(1, { age: 66 });
