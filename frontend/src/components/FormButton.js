import React from "react";
import { Button } from "react-bootstrap";

const FormButton = ({ value }) => {
  return (
    <div className="d-grid gap p-2">
      <Button variant="primary" type="submit" size="lg">
        {value}
      </Button>
    </div>
  );
};

export default FormButton;
