import React, { Component } from 'react';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButton from '../../atoms/CustomButton';
import * as Yup from 'yup';
import Textfield from '../../atoms/FormUI/TextField';
import {
    Container,
    Grid,
    Typography,
  } from '@material-ui/core';
  import Select from '../../atoms/FormUI/Select';



import './style.css';


class SignUpForm extends Component {
  constructor(props) {
    super(props) 
    this.state = '';
    this.initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      password: '',
      passwordConfirmation:'',
      role:'',
    }
    this.formSchema = Yup.object().shape({
      firstName: Yup.string()
        .trim()
        .required('Campo Obrigatório'),
      lastName: Yup.string()
        .trim()
        .required('Campo Obrigatório'),
      email: Yup.string()
        .trim()
        .email('Formato inválido')
        .required('Campo obrigatório'),
      phoneNumber: Yup.string()
        .matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, 'Formato inválido'),
      street: Yup.string()
        .trim(),
      city: Yup.string()
        .trim(),
      state: Yup.string()
        .trim(),
      zipCode: Yup.string()
        .matches(/[0-9]{5}-[\d]{3}/, 'CEP inválido'),
      password: Yup.string()
        .trim()
        .min(6, 'Mínimo de 6 caracteres')
        .max(100, 'Máximo de 100 caracteres')
        .required('Campo obrigatório'),
      passwordConfirmation:  Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
    })    
  }

  render() {
      return (
        <Grid container className="signup-form-component-container">
      
       <Grid item xs={12}>
         <Container maxWidth="md">
           <div className="signup-form-container">
             <Formik
                  initialValues={this.initialValues}
                  validationSchema={this.formSchema}
                  onSubmit={values => {
                    console.log(values);
                  }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                  }) => 
                  (<Form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>

                      <Grid item xs={12}>
                        <Typography>
                          Informaçoes Pessoais
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                            controlId="SignUpFormFirstName"
                            label='Nome' 
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.firstName}
                            touched={touched.firstName}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                            controlId="SignUpFormLastName"
                            label='Sobrenome' 
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.lastName}
                            touched={touched.lastName}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          controlId="SignUpFormEmail"
                          label='Email' 
                          type="email"
                          name="email"
                          value={values.email}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.email}
                          touched={touched.email}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          controlId="SignUpFormPhoneNumber"
                          label='Telefone' 
                          type="text"
                          name="phoneNumber"
                          value={values.phoneNumber}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.phoneNumber}
                          touched={touched.phoneNumber}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>
                          Endereço
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield                          
                          controlId="SignUpFormStreet"
                          name="street"
                          label="Nome da rua" 
                          type="text"
                          value={values.street}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.street}
                          touched={touched.street}
                        />
                      </Grid>


                      <Grid item xs={6}>
                        <Textfield                          
                          controlId="SignUpFormCity"
                          name="city"
                          label="Cidade" 
                          type="text"
                          value={values.city}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.city}
                          touched={touched.city}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          controlId="SignUpFormState"
                          name="state"
                          label="Estado" 
                          type="text"
                          value={values.state}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.state}
                          touched={touched.state}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield                          
                          controlId="SignUpFormZipCode"
                          name="zipCode"
                          label="CEP" 
                          type="text"
                          value={values.zipCode}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.zipCode}
                          touched={touched.zipCode}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>
                          Cadastro de senha
                        </Typography>
                      </Grid>

                      <Grid item xs={6}>
                        <Textfield
                          controlId="SignUpFormPassword"
                          name="password"
                          label="Senha" 
                          type="password"
                          value={values.password}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.password}
                          touched={touched.password}
                        />
                      </Grid>


                      <Grid item xs={6}>
                        <Textfield
                          controlId="SignUpFormPasswordConfirmation"
                          name="passwordConfirmation"
                          label="Confime sua senha" 
                          type="password"
                          value={values.passwordConfirmation}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.passwordConfirmation}
                          touched={touched.passwordConfirmation}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Select                          
                          options={['Usuário padrão', 'Gerente de negócio']}
                          controlId="SignUpFormRole"
                          name="role"
                          label="Tipo de conta"
                          value={values.role}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <CustomButton>
                          Enviar
                        </CustomButton>
                      </Grid>

                    </Grid>

                  </Form>)}
                </Formik>

              </div>
            </Container>
          </Grid>
        </Grid>
      )
      
      
      // (<div className="style">
      //   <Formik
      //     initialValues={({lastName: '', lastName: ''})}
      //     onSubmit={info => {
      //       this.props.handleSignUp(info)
      //     }}
      //     validationSchema={this.formSchema}
      //   >
      //     {
      //       ({
      //           handleSubmit,
      //           handleChange,
      //           handleBlur,
      //           values,
      //           touched,
      //           errors,
      //       }) => (
      //         <Form onSubmit={handleSubmit}>
      //           <Textfield 
      //             controlId="SignUpFistName"
      //             name='firstName'
      //             label='Nome'
      //             type="text"
      //             value={values.firstName}
      //             handleChange={handleChange}
      //             handleBlur={handleBlur}
      //             error={errors.firstName}
      //             touched={touched.firstName}
      //         />
      //           <Textfield 
      //             controlId="SignUpLastName"
      //             name='lastName' 
      //             label='Sobrenome'
      //             type="text"
      //             value={values.lastName}
      //             handleChange={handleChange}
      //             handleBlur={handleBlur}
      //             error={errors.lastName}
      //             touched={touched.lastName}
      //         />

      //         <CustomButton>Enviar</CustomButton>
      //         </Form>
      //       )
      //     }
      //   </Formik>
      // </div>)
  }
}

export default SignUpForm








// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Container,
//   Grid,
//   Typography,
// } from '@material-ui/core';
// import Textfield from '../../atoms/FormUI/TextField';
// import Button from '../../atoms/CustomButton';
// import Select from '../../atoms/FormUI/Select';


// const useStyles = makeStyles((theme) => ({
//   formWrapper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }));

// const roles = ["Usuario", "Administrador", "Gerente"];

// const INITIAL_FORM_STATE = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   addressLine: '',
//   city: '',
//   state: '',
//   zipcode: '',
//   password: '',
//   passwordConfirmation:'',
//   admin:'',
// };

// const FORM_VALIDATION = Yup.object().shape({
//   firstName: Yup.string()
//     .required('Obrigatório'),
//   lastName: Yup.string()
//     .required('Obrigatório'),
//   email: Yup.string()
//     .email('E-mail invalido.')
//     .required('Obrigatório'),
//   phone: Yup.number()
//     .integer()
//     .typeError('Por favor insira um número valido')
//     .required('Obrigatório'),
//   addressLine: Yup.string()
//     .required('Obrigatório'),
//   city: Yup.string()
//     .required('Obrigatório'),
//   state: Yup.string()
//     .required('Obrigatório'),
//   zipcode: Yup.string()
//     .required('Obrigatório'),
//   password: Yup.string()
//     .trim()
//     .min(6, 'Mínimo de 6 caracteres')
//     .max(10, 'Máximo de 20 caracteres')
//     .required('Campo obrigatório'),
//   passwordConfirmation: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'A senha deve ser a mesma')
//     .required('Campo obrigatório'),
//   admin: Yup.string()
//     .required('Campo obrigatório'),

// });


// const App = () => {
//   const classes = useStyles();

//   return (
//     <Grid container>
      
//       <Grid item xs={12}>
//         <Container maxWidth="md">
//           <div className={classes.formWrapper}>

//             <Formik
//               initialValues={{
//                 ...INITIAL_FORM_STATE
//               }}
//               validationSchema={FORM_VALIDATION}
//               onSubmit={values => {
//                 console.log(values);
//               }}
//             >
//             {({
//                 handleSubmit,
//                 handleChange,
//                 handleBlur,
//                 values,
//                 touched,
//                 errors,
//               }) => 
//               (<Form onSubmit={handleSubmit}>

//                 <Grid container spacing={2}>

//                   <Grid item xs={12}>
//                     <Typography>
//                       Informaçoes Pessoais
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="firstName"
//                       label="Nome"
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="lastName"
//                       label="Sobrenome"
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="email"
//                       label="E-mail"
//                       value={values.email}
//                             handleChange={handleChange}
//                             handleBlur={handleBlur}
//                             error={errors.email}
//                             touched={touched.email}
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="phone"
//                       label="Telefone"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Typography>
//                       Endereço
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Textfield
//                       name="addressLine1"
//                       label="Nome da rua"
//                     />
//                   </Grid>


//                   <Grid item xs={6}>
//                     <Textfield
//                       name="city"
//                       label="Cidade"
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="state"
//                       label="Estado"
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="zipcode"
//                       label="CEP"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Typography>
//                       Cadastro de senha
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Textfield
//                       name="password"
//                       label="Senha"
//                     />
//                   </Grid>


//                   <Grid item xs={6}>
//                     <Textfield
//                       name="passwordConfirmation"
//                       label="Confirmar senha"
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <Select
//                       name="admin"
//                       label="Nivel de acesso"
//                       options={roles}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Button onClick>
//                       Enviar
//                     </Button>
//                   </Grid>

//                 </Grid>

//               </Form>)}
//             </Formik>

//           </div>
//         </Container>
//       </Grid>
//     </Grid>
//   );
// };

// export default App;