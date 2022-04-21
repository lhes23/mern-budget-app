const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`Backend Server Running on port ${port}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
