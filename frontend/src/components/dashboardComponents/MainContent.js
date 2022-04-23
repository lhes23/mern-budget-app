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
          <div className="col-md-4">
            {/* Info Boxes Style 2 */}
            <div className="info-box mb-3 bg-warning">
              <span className="info-box-icon">
                <i className="fas fa-tag" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Inventory</span>
                <span className="info-box-number">5,200</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-success">
              <span className="info-box-icon">
                <i className="far fa-heart" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Mentions</span>
                <span className="info-box-number">92,050</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-danger">
              <span className="info-box-icon">
                <i className="fas fa-cloud-download-alt" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Downloads</span>
                <span className="info-box-number">114,381</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-info">
              <span className="info-box-icon">
                <i className="far fa-comment" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Direct Messages</span>
                <span className="info-box-number">163,921</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Browser Usage</h3>
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
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="chart-responsive">
                      <canvas id="pieChart" height={150} />
                    </div>
                    {/* ./chart-responsive */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <ul className="chart-legend clearfix">
                      <li>
                        <i className="far fa-circle text-danger" /> Chrome
                      </li>
                      <li>
                        <i className="far fa-circle text-success" /> IE
                      </li>
                      <li>
                        <i className="far fa-circle text-warning" /> FireFox
                      </li>
                      <li>
                        <i className="far fa-circle text-info" /> Safari
                      </li>
                      <li>
                        <i className="far fa-circle text-primary" /> Opera
                      </li>
                      <li>
                        <i className="far fa-circle text-secondary" /> Navigator
                      </li>
                    </ul>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
              <div className="card-footer p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      United States of America
                      <span className="float-right text-danger">
                        <i className="fas fa-arrow-down text-sm" />
                        12%
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      India
                      <span className="float-right text-success">
                        <i className="fas fa-arrow-up text-sm" /> 4%
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      China
                      <span className="float-right text-warning">
                        <i className="fas fa-arrow-left text-sm" /> 0%
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.footer */}
            </div>
            {/* /.card */}
            {/* PRODUCT LIST */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recently Added Products</h3>
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
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  <li className="item">
                    <div className="product-img">
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        Samsung TV
                        <span className="badge badge-warning float-right">
                          $1800
                        </span>
                      </a>
                      <span className="product-description">
                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        Bicycle
                        <span className="badge badge-info float-right">
                          $700
                        </span>
                      </a>
                      <span className="product-description">
                        26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        Xbox One{" "}
                        <span className="badge badge-danger float-right">
                          $350
                        </span>
                      </a>
                      <span className="product-description">
                        Xbox One Console Bundle with Halo Master Chief
                        Collection.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product Image"
                        className="img-size-50"
                      />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        PlayStation 4
                        <span className="badge badge-success float-right">
                          $399
                        </span>
                      </a>
                      <span className="product-description">
                        PlayStation 4 500GB Console (PS4)
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-center">
                <a href="javascript:void(0)" className="uppercase">
                  View All Products
                </a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.row */}
        </div>
        {/*/. container-fluid */}
      </section>
      {/* /.content */}
    </>
  );
};
export default MainContent;
