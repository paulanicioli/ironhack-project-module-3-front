
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LabeledInput from '../../molecules/LabeledInput';

import Form from 'react-bootstrap/Form';

class Register extends Component {
  constructor() {
    super();
    this.state = {};
    this.formSchema = Yup.object().shape({
      username: Yup.string()
        .trim()
        .required('Campo obrigatório'),
      email: Yup.string()
        .trim()
        .email('Formato inválido')
        .required('Campo obrigatório'),
      password: Yup.string()
        .trim()
        .min(6, 'Mínimo de 6 caracteres')
        .max(100, 'Máximo de 20 caracteres')
        .required('Campo obrigatório'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'A senha deve ser a mesma')
        .required('Campo obrigatório'),
    });
  }

  
  render() {
    return (
      <div>
        <Formik 
        initialValues={ { username: '',email: '', password: '' } }
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
                  
                  </div>
          
                  <div className="form">
                    <div className="form-group">
                      <LabeledInput 
                        type="text" 
                        name="username" 
                        label="First name"    
                        placeholder="insert name" 
                        value={values.username}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors.username}
                        touched={touched.username}
                      />    
                  </div>
                  
                  <div className="form-group">         
                     <LabeledInput 
                        type="text" 
                        name="lastName" 
                        label="Last name"     
                        placeholder="insert last name"
                        value={values.email}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors.email}
                        touched={touched.email}
                     />
                  </div>


                  <div className="form-group">         
                     <LabeledInput 
                        type="text" 
                        name="email" 
                        label="E-mail"     
                        placeholder="Digite seu e-mail"
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
                        placeholder="Digite a senha"
                        value={values.password}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors.password}
                        touched={touched.password}
                     />
                  </div>

                  <div className="form-group">
                    <LabeledInput 
                      type="password" 
                      name="passwordConfirmation" 
                      label="Confirmar senha"  
                      placeholder="Digite a senha novamente"   
                      value={values.passwordConfirmation}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={errors.passwordConfirmation}
                      touched={touched.passwordConfirmation}
                    />
                  </div>

                </div>
              </div>

        <div className="footer">
          <button type="button" className="btn">
            Cadastrar
          </button>
        </div>
  
      </div>

            </Form>
            
            )
          }
        </Formik>
      </div>
    );
  }
}


export default Register;