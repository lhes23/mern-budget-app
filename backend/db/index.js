const mongoose = require("mongoose");

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.ppnr7.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => console.log("Database Connected!:", process.env.MONGO_DATABASE))
  .catch((err) => console.log(err));
