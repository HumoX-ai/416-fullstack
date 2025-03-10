const express = require("express");
const trainerRoutes = require("./routes/trainerRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

 app.use(express.json());

// Routelarni ulash
app.use("/trainer", trainerRoutes);
app.use("/student", studentRoutes);

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
