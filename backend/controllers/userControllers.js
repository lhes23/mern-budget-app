const User = require("../models/userModels");

const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    await User.create({ email, username, password });
    console.log({ email, username, password });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
