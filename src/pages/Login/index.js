import React, { Component } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import Modulo from './module';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

 class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GeneralTemplate>
        <h1>Login page</h1>
    
        <Modulo />
        
      </GeneralTemplate>
    );
  }
}

export default Login;
