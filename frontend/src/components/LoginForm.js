import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import FormInputSingle from "./FormInputSingle";
import FormButton from "./FormButton";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFormHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/users/login", { username, password });

    if (data.status !== "ok") {
      console.log("Error!");
      return;
    }

    dispatch(login(data.user));
    navigate("/dashboard");
  };

  return (
    <Form onSubmit={loginFormHandler}>
      {/* Username Input */}
      <FormInputSingle name="Username" type="text" func={setUsername} />

      {/* Password Input */}
      <FormInputSingle name="Password" type="password" func={setPassword} />

      <FormButton value="Login" />
      <p>
        No Account Yet? <Link to="/register">Register Here</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
