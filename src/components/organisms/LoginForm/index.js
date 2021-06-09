import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form';
import LabeledInput from '../../molecules/LabeledInput';
import CustomButton from '../../atoms/CustomButton';

class LoginForm extends Component {
  constructor() {
    super();
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
        initialValues={ { email: '', password: '' } }
        onSubmit={info => { this.props.loginUser(info) }
    }
        validationSchema={this.formSchema}
         >
          {
            ( {
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            } ) => (
              
              <Form onSubmit={handleSubmit}>
              <LabeledInput
                controlId="LoginFormEmail"
                label="User Email"
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
                label="User Password"
                type="password"
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <CustomButton variant="primary" type="submit" size="lg">
                Entrar
              </CustomButton>
            </Form>
            
            )
          }
        </Formik>
      </div>
    );
  }
}

export default LoginForm;