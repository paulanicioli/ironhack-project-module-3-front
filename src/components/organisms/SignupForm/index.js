import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import Textfield from '../../atoms/FormUI/TextField';
import Button from '../../atoms/CustomButton';
import Select from '../../atoms/FormUI/Select';
import LabeledInput from '../../molecules/LabeledInput';


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const roles = ["Usuario", "Administrador", "Gerente"];

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine: '',
  city: '',
  state: '',
  zipcode: '',
  password: '',
  passwordConfirmation:'',
  admin:'',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Obrigatório'),
  lastName: Yup.string()
    .required('Obrigatório'),
  email: Yup.string()
    .email('E-mail invalido.')
    .required('Obrigatório'),
  phone: Yup.number()
    .integer()
    .typeError('Por favor insira um número valido')
    .required('Obrigatório'),
  addressLine: Yup.string()
    .required('Obrigatório'),
  city: Yup.string()
    .required('Obrigatório'),
  state: Yup.string()
    .required('Obrigatório'),
  zipcode: Yup.string()
    .required('Obrigatório'),
  password: Yup.string()
    .trim()
    .min(6, 'Mínimo de 6 caracteres')
    .max(10, 'Máximo de 20 caracteres')
    .required('Campo obrigatório'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'A senha deve ser a mesma')
    .required('Campo obrigatório'),
  admin: Yup.string()
    .required('Campo obrigatório'),

});


const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Informaçoes Pessoais
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="Nome"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Sobrenome"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="email"
                      label="E-mail"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="phone"
                      label="Telefone"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Endereço
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine1"
                      label="Nome da rua"
                    />
                  </Grid>


                  <Grid item xs={6}>
                    <Textfield
                      name="city"
                      label="Cidade"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="state"
                      label="Estado"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="zipcode"
                      label="CEP"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Cadastro de senha
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="password"
                      label="Senha"
                    />
                  </Grid>


                  <Grid item xs={6}>
                    <Textfield
                      name="passwordConfirmation"
                      label="Confirmar senha"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="admin"
                      label="Nivel de acesso"
                      options={roles}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Enviar
                    </Button>
                  </Grid>


                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;