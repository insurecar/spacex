const express = require("express"); // Імпортуємо Express
const app = express(); // Створюємо додаток Express
const queryController = require("./controllers/queryController");

const PORT = 8000; // Встановлюємо порт

// Маршрут для головної сторінки
app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

app.use("/api/v1", queryController.getQuery);

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8000`);
});
