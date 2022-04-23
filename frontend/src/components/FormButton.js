import React from "react";
import { Button } from "react-bootstrap";
import styles from "./styles/FormButton.module.css";

const FormButton = ({ value }) => {
  return (
    <div className="d-grid gap p-2">
      <Button type="submit" size="lg" className={styles.frmBtn}>
        {value}
      </Button>
    </div>
  );
};

export default FormButton;
