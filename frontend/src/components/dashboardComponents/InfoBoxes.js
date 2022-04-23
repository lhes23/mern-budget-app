import InfoBoxSingle from "./InfoBoxSingle";

const InfoBoxes = () => {
  return (
    <>
      {/* Info boxes */}
      <div className="row">
        <InfoBoxSingle
          name="Incomes"
          value={10}
          spanClassName="bg-info"
          iconClassName="fas fa-cog"
        />
        <InfoBoxSingle
          name="Expenses"
          value={10}
          spanClassName="bg-danger"
          iconClassName="fas fa-thumbs-up"
        />
        <InfoBoxSingle
          name="Cashflow"
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
