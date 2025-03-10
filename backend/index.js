const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON ma’lumotlarni qabul qilish uchun
app.use(express.json());

// Routelarni ulash
app.use("/api", taskRoutes);

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
