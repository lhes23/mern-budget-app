import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const loginFormHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <Form onSubmit={loginFormHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Stack>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Stack>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
