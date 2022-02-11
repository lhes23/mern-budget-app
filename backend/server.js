const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.use("/users", require("./routes/userRoutes"));

port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
