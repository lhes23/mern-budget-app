import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFormHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username, password, loggedIn: true }));
    navigate("/dashboard");
  };

  return (
    <Form onSubmit={loginFormHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Stack>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Stack direction="horizontal" gap={3}>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Stack>
      </Form.Group>
      <div className="d-grid gap">
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
