const User = require("../models/userModels");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const newPassword = await bcrypt.hash(password, 10);
    await User.create({ email, username, password: newPassword });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.json({ status: "error", user: null, errorMsg: "No User Found!" });
    throw new Error("No User Found");
  }

  const pwdMatch = await bcrypt.compare(password, user.password);

  console.log(pwdMatch);

  if (!pwdMatch) {
    res.json({ status: "error", user: null, errorMsg: "Wrong Password!" });
    throw new Error("Wrong Password");
  }

  res.json({ status: "ok", user });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  res.send("Update user with the id: " + id);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  res.send("Delete user with the id: " + id);
};

const userDetails = async (req, res) => {
  User.find({ _id: req.params.id }).exec((err, userDetails) => {
    if (err) return handleError(err);
    res.send(userDetails);
  });
};

module.exports = {
  createUser,
  getAllUsers,
  findUser,
  updateUser,
  deleteUser,
  userDetails,
};
