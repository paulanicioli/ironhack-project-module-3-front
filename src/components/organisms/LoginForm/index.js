import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import "./style.scss";

import Form from 'react-bootstrap/Form';
import imageL from './image/listo.png';

import LabeledInput from '../../molecules/LabeledInput';
import CustomButton from '../../atoms/CustomButton';

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
              
              <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                  
                  <div className="image">
                    <img src={imageL} alt="listo_logo"/>
                  </div>
                  <div className="form">
                    <div className="form-group">
                    <LabeledInput   
                      type="email"   
                      name="email"   
                      label="E-mail de acesso"     
                      placeholder="Digite E-mail de acesso"
                      value={values.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors.email}
                      touched={touched.email}
                    />                    
                  </div>

                  <div className="form-group">
                    <LabeledInput 
                      type="password" 
                      name="password" 
                      label="Senha" 
                      placeholder="Digite senha de acesso"
                      value={values.password}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </div>

                </div>
              </div>

              <div className="footer">
                <button type="button" className="btn">
                  Login
                </button>
              </div>
            </div>

            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default LoginForm;
