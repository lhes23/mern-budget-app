const DUMMY_BALANCE_SHEET = [
  {
    _id: "1",
    date: "2022-04-04",
    item: "bread",
    amount: 56,
    type: "expense",
  },
  {
    _id: "2",
    date: "2022-04-04",
    item: "chicken",
    amount: 56,
    type: "expense",
  },
  {
    _id: "3",
    date: "2022-04-04",
    item: "cake",
    amount: 56,
    type: "income",
  },
];

const AllBalanceSheet = async (req, res) => {
  res.json(DUMMY_BALANCE_SHEET);
};

module.exports = { AllBalanceSheet };
