import React, { Component } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import apiService from '../../services/api.services';

class Login extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
  }

  async handleLogin(values) {
    try {
      const token = await this.apiService.loginUser(values);
      localStorage.setItem('token', token);
      this.props.history.push('/categories');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <GeneralTemplate>
        <h1>Login page</h1>
        <LoginForm handleLogin={handleLogin} />
      </GeneralTemplate>
    );
  }
}

export default Login;
