const InfoBoxSingle = ({ name, value, spanClassName, iconClassName }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="info-box">
        <span className={`info-box-icon elevation-1 ${spanClassName}`}>
          <i className={iconClassName} />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">{name}</span>
          <span className="info-box-number">
            {value}
            <small>%</small>
          </span>
        </div>
        {/* /.info-box-content */}
      </div>
      {/* /.info-box */}
    </div>
  );
};

export default InfoBoxSingle;
