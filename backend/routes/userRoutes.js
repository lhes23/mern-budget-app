const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUser,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:id")
  .get(findUser)
  .put((req, res) => {
    res.send(`update user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id: ${req.params.id}`);
  });

module.exports = router;
