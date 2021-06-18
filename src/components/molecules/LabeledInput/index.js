import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './styles.css';

const LabeledInput = ({
  columnMd,
  controlId,
  label,
  type,
  name,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  const hasError = error && touched;
  const hasSuccess = !error && touched;

  return (
    <Form.Group as={Col} md={columnMd} controlId={controlId}>
      <Form.Label className="input-label">{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={hasSuccess}
        isInvalid={hasError}
      />
      {hasSuccess && (
        <Form.Control.Feedback type="valid">Ok!</Form.Control.Feedback>
      )}
      {hasError && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default LabeledInput;
