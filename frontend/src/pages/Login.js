import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Row>
      <Col>
        <h1 className="text-center">Welcome To the Budget App</h1>
      </Col>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Card>
            <Card.Img src="" />
            <Card.Body>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Row>
  );
};

export default Login;
