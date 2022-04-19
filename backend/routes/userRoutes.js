const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(findUser).put(updateUser).delete(deleteUser);

module.exports = router;
