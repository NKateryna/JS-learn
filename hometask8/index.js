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
function UsersInfofetch() {
  fetch("http://localhost:3000/users", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.forEach((element) => {
        delete element.id;
      });
      console.log(json);
    });
}

UsersInfofetch();

/**
 * 2. Сделать POST запрос на сервер за адресом http://localhost:3000/users
 * Добавить пользователя со своим именем, фамилией и возрастом
 * После успешного запроса отправить новый запрос для того чтобы получить
 * Всех пользователей и убедиться в том что новый пользователь добавлен
 */

function postCheckfetch(userName, userSurname, userAge) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      name: userName,
      surname: userSurname,
      age: userAge,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() =>
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => console.log(json))
  );
}
postCheckfetch("Maksim", `Citrusov`, 34);

/**
 * 3. При помощи DELETE запроса на сервер за адресом http://localhost:3000/users
 * Удалить своего пользователя, которого создали в задани 2
 * После успешного запроса отправить новый запрос для того чтобы получить
 * Всех пользователей и убедиться в том что пользователь удален
 */
function deleteCheckfetch() {
  fetch("http://localhost:3000/users/3", {
    method: "DELETE",
  }).then(() =>
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => console.log(json))
  );
}
deleteCheckfetch();

/**
 * 4. Получить данные про пользователя за адресом http://localhost:3000/users/1 используя метод GET
 * Запросом PUT на сервер за адресом http://localhost:3000/users/1 изменить возраст на 66
 * После сделать запрос GET на сервер за адресом http://localhost:3000/users/1
 * И получить данные про измененного пользователя
 */

function ageChangefetchUser1(newAge) {
  fetch("http://localhost:3000/users/1", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let jsonNew = json;
      jsonNew.age = newAge;

      return jsonNew;
    })
    .then((jsonNew) =>
      fetch("http://localhost:3000/users/1", {
        method: "PUT",
        body: JSON.stringify({ ...jsonNew }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    )
    .then(() =>
      fetch("http://localhost:3000/users/1", {
        method: "GET",
      })
    )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

ageChangefetchUser1(66);
