import { Alert } from "react-bootstrap";

const AlertError = ({ errorMsg, onClose }) => {
  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      {errorMsg}
    </Alert>
  );
};
export default AlertError;
