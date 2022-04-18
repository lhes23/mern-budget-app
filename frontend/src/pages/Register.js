import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Row className="justify-content-center text-center">
      <Row>
        <Col>
          <h1>Register</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={7}>
          <Card className="m-3 shadow p-3 mb-5 bg-white rounded">
            <Card.Img src="" />
            <Card.Body>
              <RegisterForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default Register;
