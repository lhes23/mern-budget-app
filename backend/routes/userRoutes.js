const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUser,
  updateUser,
  deleteUser,
  userDetails,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers).post(createUser);
router.post("/login", findUser);
router.post("/register", createUser);
router.route("/:id").get(userDetails).put(updateUser).delete(deleteUser);

module.exports = router;
