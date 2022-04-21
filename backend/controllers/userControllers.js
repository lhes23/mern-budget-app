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

const findUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    return res.json({ status: "ok", user });
  } else {
    res.json({ status: "error", user: null });
    throw new Error("No User Found");
  }
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
