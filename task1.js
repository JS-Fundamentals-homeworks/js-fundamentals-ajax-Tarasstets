// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const usersList = document.querySelector(".usersList");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      usersList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Помилка завантаження користувачів:", error);
  }
}

loadUsers();
