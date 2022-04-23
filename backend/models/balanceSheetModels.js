const mongoose = require("mongoose");

const BalanceSheetSchema = new mongoose.Schema(
  {
    date: Date,
    item: String,
    amount: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    type: String,
  },
  {
    collection: "balance-sheet",
  }
);

const model = mongoose.model("BalanceSheet", BalanceSheetSchema);

module.exports = model;
