import InfoBoxSingle from "./InfoBoxSingle";

const InfoBoxes = () => {
  return (
    <>
      {/* Info boxes */}
      <div className="row">
        <InfoBoxSingle
          name="CPU Traffic"
          value={10}
          spanClassName="bg-info"
          iconClassName="fas fa-cog"
        />
        <InfoBoxSingle
          name="Likes"
          value={10}
          spanClassName="bg-danger"
          iconClassName="fas fa-thumbs-up"
        />
        <InfoBoxSingle
          name="Sales"
          value={10}
          spanClassName="bg-success"
          iconClassName="fas fa-shopping-cart"
        />

        {/* fix for small devices only */}
        <div className="clearfix hidden-md-up" />
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-success elevation-1">
              <i className="fas fa-shopping-cart" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Sales</span>
              <span className="info-box-number">760</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-warning elevation-1">
              <i className="fas fa-users" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">New Members</span>
              <span className="info-box-number">2,000</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </>
  );
};
export default InfoBoxes;
