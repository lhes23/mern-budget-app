const BalanceSheets = require("../models/balanceSheetModels");

const AllBalanceSheet = async (req, res) => {
  const Balance = await BalanceSheets.find();
  res.json(Balance);
};

module.exports = { AllBalanceSheet };
