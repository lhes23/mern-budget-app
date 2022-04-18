const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use("/users", require("./routes/userRoutes"));

port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send(`Backend Server Running on port ${port}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
