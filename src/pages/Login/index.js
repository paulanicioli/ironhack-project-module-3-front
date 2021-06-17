import React, { Component } from 'react';
import Modulo from './module';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import Modal from 'react-bootstrap/Modal';

import apiService from '../../services/api.services';


class Login extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
    this.state = {
      error: '',
      showError: false
    }


  handleLogin = async (values) => {
    console.log(this.props)
    try {
      const { token, role } = await this.apiService.loginUser(values);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      this.props.updateUserState(role);

      this.props.history.push('/categories');
      
    } catch (error) {
      this.setState({
        error: error.response.data.message,
        showError: true
      })
    }
  };

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <Modulo />
      <GeneralTemplate>
    );
  }
}

export default Login;
