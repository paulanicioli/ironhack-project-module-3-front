
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField,Typography } from '@material-ui/core'
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButton from '../../atoms/CustomButton';
import * as Yup from 'yup';
import Textfield from '../../atoms/FormUI/TextField';

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
    
    render(){    
        return(
            <div className="login-form">
                <Formik 
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(info) => {
                        this.props.handleLogin(info);
                    }}
                    validationSchema={this.formSchema} >
                    
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors,
                    }) => (
   
                    <Form onSubmit={handleSubmit}>
                   
                        <Grid align='center'>
                            <h2>Login</h2>
                            <br></br>
                        </Grid>

                        
                        <Grid item xs={12}>   
                        <Textfield 
                            controlId="LoginFormEmail"
                            label='E-mail' 
                            type="text"
                            name="email"
                            placeholder='Digite seu E-mail' 
                            value={values.email}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                        </Grid>
                        <br></br>
                        
                        <Grid item xs={12}> 
                        <Textfield 

                            controlId="LoginFormPassword"
                            label="Senha:"
                            type="password"
                            name="password"
                            placeholder='Digite a senha'  
                            value={values.password}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={errors.password}
                            touched={touched.password}
                            
                        />
                        </Grid>
                        <br></br>
                        <Grid align='center'> 
                            {/* <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                        }
                                label="Lembrar"
                            /> */}
                        
                            <CustomButton>Entrar</CustomButton>

                            <br />
                                        
                            <Typography > Ainda não tem uma conta?
                                <Link to="/signup">
                                    <br/>
                                        Cadastre-se
                                </Link>
                            </Typography>
                        </Grid>            
                    </Form>
                    )}
                </Formik>
            </div>        
        )

    }  
}

export default LoginForm;
