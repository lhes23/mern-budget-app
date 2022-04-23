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
      </div>
      {/* /.row */}
    </>
  );
};
export default InfoBoxes;