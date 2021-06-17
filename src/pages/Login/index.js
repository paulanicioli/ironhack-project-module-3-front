import React, { Component } from 'react';
import Modulo from './module';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

 class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GeneralTemplate>
        <Modulo />

      </GeneralTemplate>
    );
  }
}

export default Login;
