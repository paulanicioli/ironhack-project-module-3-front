import React, { Component } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import apiService from '../../services/api.services';

class Login extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
  }

  handleLogin = async (values) => {
    try {
      const { token, role } = await this.apiService.loginUser(values);
      console.log('login called!');
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        this.props.updateUserState(role);

        this.props.history.push('/categories');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <GeneralTemplate>
        <h1>Login page</h1>
        <LoginForm handleLogin={this.handleLogin} />
      </GeneralTemplate>
    );
  }
}

export default Login;
