import { Link } from "react-router-dom";
import InfoBoxes from "./InfoBoxes";
import RecapReport from "./RecapReport";
import LatestOrders from "./LatestOrders";

const MainContent = () => {
  return (
    <>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <InfoBoxes />
          <RecapReport />
          <LatestOrders />
        </div>
        {/*/. container-fluid */}
      </section>
      {/* /.content */}
    </>
  );
};
export default MainContent;
