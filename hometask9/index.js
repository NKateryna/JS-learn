const fetch = require("node-fetch");
// Для эмуляции сервера будем использовать стороннюю библиотеку.
// Для запуска необходимо в терминале запустить команду
// npm install -g json-server для установки
// И json-server hometask8/server.json для запуска

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

function readUsers() {
  fetch(`${BASE_URL}/users/`)
    .then((response) => response.json())
    .then((data) => {
      deleteInfo(data, "id");
      return data;
    })
    .then((data) => {
      console.log(data);
    });
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

function createUser(user = {}) {
  fetch(`${BASE_URL}/users/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  }).then(() =>
    fetch(`${BASE_URL}/users/`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  );
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
function deleteUsers(id) {
  fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  }).then(() =>
    fetch(`${BASE_URL}/users/`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  );
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
function transformedModel(odj, key, value) {
  odj[key] = value;
  return odj;
}

function updateUserAge(id, key, value) {
  fetch(`${BASE_URL}/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      transformedModel(data, key, value);
      return data;
    })
    .then((data) =>
      fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
    )
    .then(() => fetch(`${BASE_URL}/users/${id}`))
    .then((response) => response.json())
    .then((data) => console.log(data));
}

updateUserAge(1, "age", 66);
