import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import FormInputSingle from "./FormInputSingle";
import FormButton from "./FormButton";

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
      {/* Username Input */}
      <FormInputSingle name="Username" type="text" func={setUsername} />

      {/* Password Input */}
      <FormInputSingle name="Password" type="text" func={setPassword} />

      <FormButton value="Login" />
      <p>
        No Account Yet? <Link to="/register">Register Here</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
