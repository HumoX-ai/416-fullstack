const express = require("express");
const trainerRoutes = require("./routes/trainerRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 3000;

 app.use(express.json());

// Routelarni ulash
app.use("/trainer", trainerRoutes);
app.use("/student", studentRoutes);
app.use('/api', courseRoutes);

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
