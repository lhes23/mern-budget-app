const express = require("express");
const router = express.Router();
const {
  AllBalanceSheet,
  AddIncomeExpense,
  SumIncomeExpense,
} = require("../controllers/balanceSheetControllers");

router.route("/").get(AllBalanceSheet).post(AddIncomeExpense);

router.route("/total-sum").get(SumIncomeExpense);

module.exports = router;
