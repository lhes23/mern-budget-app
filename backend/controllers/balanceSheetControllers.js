const BalanceSheets = require("../models/balanceSheetModels");

const AllBalanceSheet = async (req, res) => {
  const Balance = await BalanceSheets.find();
  res.json(Balance);
};

const SumIncomeExpense = async (req, res) => {
  BalanceSheets.aggregate(
    [
      {
        $group: {
          _id: "$type",
          total: {
            $sum: "$amount",
          },
        },
      },
    ],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
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

module.exports = { AllBalanceSheet, AddIncomeExpense, SumIncomeExpense };
