// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

async function loadUserCity() {
  const userName = document.getElementById("userNameInput").value.trim();

  if (!userName) {
    alert("Будь ласка, введіть ім'я користувача.");
    return;
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const user = users.find(
      (u) => u.name.toLowerCase() === userName.toLowerCase()
    );

    if (user) {
      document.getElementById("userCity").textContent = user.address.city;
    } else {
      alert("Користувача з таким ім'ям не знайдено.");
    }
  } catch (error) {
    console.error("Помилка при завантаженні даних:", error);
    alert("Сталася помилка при отриманні даних.");
  }
}

document
  .getElementById("getUserButton")
  .addEventListener("click", loadUserCity);
