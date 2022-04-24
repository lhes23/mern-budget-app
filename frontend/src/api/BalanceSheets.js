import axios from "axios";

export const getAllBalanceSheet = async () => {
  const { data } = await axios.get("/api/balance-sheet");
  return data;
};

export const SumIncomeExpense = async () => {
  const { data } = await axios.get("/api/balance-sheet/total-sum");
  return data;
};
