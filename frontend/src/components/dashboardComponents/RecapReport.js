const RecapReport = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Monthly Recap Report</h5>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-tool dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-wrench" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    role="menu"
                  >
                    <a href="#" className="dropdown-item">
                      Action
                    </a>
                    <a href="#" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#" className="dropdown-item">
                      Something else here
                    </a>
                    <a className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Separated link
                    </a>
                  </div>
                </div>
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
                <div className="col-md-12">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                  </p>
                  <div className="chart">
                    {/* Sales Chart Canvas */}
                    <canvas
                      id="salesChart"
                      height={180}
                      style={{ height: 180 }}
                    />
                  </div>
                  {/* /.chart-responsive */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* ./card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </>
  );
};
export default RecapReport;
