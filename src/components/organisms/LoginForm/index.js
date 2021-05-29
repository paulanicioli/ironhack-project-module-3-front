import React, { Component } from 'react';
import formik from 'formik';
import Form from 'react-bootstrap/Form';
import LabeledInput from '../../molecules/LabeledInput';
import Button from '../../atoms/Button';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <LabeledInput
            controlId="LoginFormEmail"
            label="User Email"
            type="text"
            name="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <LabeledInput
            controlId="LoginFormPassword"
            label="User Password"
            type="password"
            name="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <Button variant="primary" type="submit" size="lg">
            Entrar
          </Button>
        </Form>
      </div>
    );
  }
}
