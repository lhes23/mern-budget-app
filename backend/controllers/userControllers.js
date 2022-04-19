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
  res.send("Get info for user: " + req.params.id);
};

const dummy_data = [
  { name: "lester", age: 36 },
  { name: "harry", age: 30 },
];

const getAllUsers = async (req, res) => {
  res.json(dummy_data);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  res.send("Update user with the id: " + id);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  res.send("Delete user with the id: " + id);
};

module.exports = { createUser, getAllUsers, findUser, updateUser, deleteUser };
