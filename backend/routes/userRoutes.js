const express = require("express");
const router = express.Router();

const dummy_data = [
  { name: "lester", age: 36 },
  { name: "harry", age: 30 },
];

router
  .route("/")
  .get((req, res) => res.json(dummy_data))
  .post((req, res) => console.log(req.body));

router
  .route("/:id")
  .get((req, res) => res.send("Get info for user: " + req.params.id))
  .put((req, res) => {
    res.send(`update user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id: ${req.params.id}`);
  });

module.exports = router;
