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
 */
function daleteInfo(array, ...key) {
  array.forEach((element) => {
    for (let i = 0; i < key.length; i++) {
      delete element[key[i]];
    }
  });
  return array;
}

function readUsers(...key) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      daleteInfo(data, ...key);
      return data;
    })
    .then((data) => {
      console.log(data);
    });
}

readUsers("id");

/**
 * 2. Сделать POST запрос на сервер за адресом http://localhost:3000/users
 * Добавить пользователя со своим именем, фамилией и возрастом
 * После успешного запроса отправить новый запрос для того чтобы получить
 * Всех пользователей и убедиться в том что новый пользователь добавлен
 */

function createUser(user = {}) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  }).then(() =>
    fetch("http://localhost:3000/users")
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
 */
function deleteUsers(idUser) {
  fetch(`http://localhost:3000/users/${idUser}`, {
    method: "DELETE",
  }).then(() =>
    fetch("http://localhost:3000/users")
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
 */
function transformedModel(odj, key, value) {
  odj[key] = value;
  return odj;
}

function updateUserAge(idUser, key, value) {
  fetch(`http://localhost:3000/users/${idUser}`)
    .then((response) => response.json())
    .then((data) => {
      transformedModel(data, key, value);
      return data;
    })
    .then((data) =>
      fetch(`http://localhost:3000/users/${idUser}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
    )
    .then(() => fetch(`http://localhost:3000/users/${idUser}`))
    .then((response) => response.json())
    .then((data) => console.log(data));
}

updateUserAge(1, "age", 66);
