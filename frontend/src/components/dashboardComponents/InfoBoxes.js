import { useEffect, useState } from "react";
import { SumIncomeExpense } from "../../api/BalanceSheets";
import InfoBoxSingle from "./InfoBoxSingle";

const InfoBoxes = () => {
  const [totalIncome, setTotalIncome] = useState({});
  const [totalExpense, setTotalExpense] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SumIncomeExpense();
        console.log(data["0"]);
        if (data[0]._id === "income") {
          setTotalIncome(data[0]);
          setTotalExpense(data[1]);
        } else {
          setTotalIncome(data[1]);
          setTotalExpense(data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Info boxes */}
      <div className="row">
        <InfoBoxSingle
          name="Incomes"
          value={totalIncome.total}
          spanClassName="bg-success"
          iconClassName="fas fa-cog"
        />
        <InfoBoxSingle
          name="Expenses"
          value={totalExpense.total}
          spanClassName="bg-danger"
          iconClassName="fas fa-thumbs-up"
        />
        <InfoBoxSingle
          name="Cashflow"
          value={totalIncome.total - totalExpense.total}
          spanClassName="bg-info"
          iconClassName="fas fa-shopping-cart"
        />
      </div>
      {/* /.row */}
    </>
  );
};
export default InfoBoxes;
