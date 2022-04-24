import { useEffect, useState } from "react";
import { getAllBalanceSheet } from "../../api/BalanceSheets";

const LatestOrders = () => {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBalanceSheet();
        setBalance(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* TABLE: LATEST ORDERS */}
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">Latest Incomes and Expenses</h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus" />
            </button>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table m-0">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {balance.map((b) => {
                  return (
                    <tr key={b._id}>
                      <td>{b.date}</td>
                      <td>{b.item}</td>
                      <td>
                        <span>{b.amount}</span>
                      </td>
                      <td>
                        <span
                          className={
                            b.type === "income"
                              ? "badge badge-success"
                              : "badge badge-danger"
                          }
                        >
                          {b.type}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
        </div>
        {/* /.card-body */}
        <div className="card-footer clearfix">
          <span className="btn btn-sm btn-info float-left">
            Place New Order
          </span>
          <span className="btn btn-sm btn-secondary float-right">
            View All Orders
          </span>
        </div>
        {/* /.card-footer */}
      </div>
      {/* /.card */}
    </>
  );
};
export default LatestOrders;
