const express = require("express");
const router = express.Router();
const {
  AllBalanceSheet,
  AddIncomeExpense,
} = require("../controllers/balanceSheetControllers");

router.route("/").get(AllBalanceSheet).post(AddIncomeExpense);

module.exports = router;
