const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("Get all users"))
  .post((req, res) => res.send("post user"));

router
  .route("/:id")
  .put((req, res) => {
    res.send(`update user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id: ${req.params.id}`);
  });

module.exports = router;
