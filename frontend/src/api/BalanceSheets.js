import axios from "axios";

export const getAllBalanceSheet = async () => {
  const { data } = await axios.get("/api/balance-sheet");
  return data;
};
