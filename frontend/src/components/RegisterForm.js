import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import FormInputSingle from "./FormInputSingle";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerFormHandler = async (e) => {
    e.preventDefault();
    console.log({ email, username, password });
    try {
      await axios.post("/users", { email, username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={registerFormHandler}>
      {/* Email Input */}
      <FormInputSingle name="Email Address" type="email" func={setEmail} />

      {/* Username Input */}
      <FormInputSingle name="Username" type="text" func={setUsername} />

      {/* Password Input */}
      <FormInputSingle name="Password" type="password" func={setPassword} />

      <FormButton value="Register" />

      <p>
        Already have an account? <Link to="/">Login Here</Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
