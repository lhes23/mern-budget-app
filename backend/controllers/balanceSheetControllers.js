const BalanceSheets = require("../models/balanceSheetModels");

const AllBalanceSheet = async (req, res) => {
  const Balance = await BalanceSheets.find();
  res.json(Balance);
};

const AddIncomeExpense = async (req, res) => {
  const { item, amount, type } = req.body;
  try {
    await BalanceSheets.create({ item, amount, type });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { AllBalanceSheet, AddIncomeExpense };
