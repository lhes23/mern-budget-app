import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const registerFormHandler = () => {};
  return (
    <Form onSubmit={registerFormHandler}>
      {/* Email Address Input */}
      <Form.Group className="mb-3">
        <Stack direction="horizontal" gap={2}>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            required
          ></Form.Control>
        </Stack>
      </Form.Group>

      {/* Username Input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            // onChange={}
            required
          />
        </Stack>
      </Form.Group>

      {/* Password Input */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // onChange={}
            required
          />
        </Stack>
      </Form.Group>

      <div className="d-grid gap">
        <Button variant="primary" type="submit" size="lg">
          Register
        </Button>
      </div>
      <p>
        Already have an account? <Link to="/">Login Here</Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
