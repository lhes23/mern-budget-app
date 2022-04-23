const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./db");

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/balance-sheet", require("./routes/balanceSheetRoutes"));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`Backend Server Running on port ${port}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
