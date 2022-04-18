import React from "react";
import { Form, Stack } from "react-bootstrap";

const FormInputSingle = ({ name, type, func }) => {
  return (
    <Form.Group className="mb-3">
      <Stack direction="horizontal" gap={2}>
        <Form.Label>{name}</Form.Label>
        <Form.Control
          type={type}
          placeholder={name}
          onChange={(e) => func(e.target.value)}
          required
        ></Form.Control>
      </Stack>
    </Form.Group>
  );
};

export default FormInputSingle;
