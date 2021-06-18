import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import LabeledInput from '../../molecules/LabeledInput';
import CustomButton from '../../atoms/CustomButton';
import FormContainer from '../../molecules/FormContainer';

import './styles.css';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formSchema = Yup.object().shape({
      email: Yup.string()
        .trim()
        .email('Formato inválido')
        .required('Campo obrigatório'),
      password: Yup.string()
        .trim()
        .min(6, 'Mínimo de 6 caracteres')
        .max(100, 'Máximo de 100 caracteres')
        .required('Campo obrigatório'),
    });
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(info) => {
            this.props.handleLogin(info);
          }}
          validationSchema={this.formSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <FormContainer onSubmit={handleSubmit}>
              <LabeledInput
                controlId="LoginFormEmail"
                label="Email:"
                type="text"
                name="email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <LabeledInput
                controlId="LoginFormPassword"
                label="Senha:"
                type="password"
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <CustomButton>Entrar</CustomButton>
            </FormContainer>
          )}
        </Formik>
      </div>
    );
  }
}

export default LoginForm;
