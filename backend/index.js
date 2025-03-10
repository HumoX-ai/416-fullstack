const express = require("express");
const cors = require("cors"); 

const trainerRoutes = require("./routes/trainerRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courses");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());

app.use(express.json());

app.use("/trainer", trainerRoutes);
app.use("/student", studentRoutes);
app.use("/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
