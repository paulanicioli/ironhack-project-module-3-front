import React, { Component } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import Modal from 'react-bootstrap/Modal';

import apiService from '../../services/api.services';

import './styles.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
    this.state = {
      error: '',
      showError: false,
    };
  }

  handleLogin = async (values) => {
    try {
      const { token, role } = await this.apiService.loginUser(values);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      this.props.updateUserState(role);

      this.props.history.push('/categories');
    } catch (error) {
      this.setState({
        error: error.response.data.message,
        showError: true,
      });
    }
  };

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <h1>Faça login:</h1>
        <div className="form-content">
          <LoginForm handleLogin={this.handleLogin} />
          <div className="right-side"></div>
        </div>

        <Modal
          onHide={() => this.setState({ showError: false })}
          show={this.state.showError}
          centered
        >
          <Modal.Header>
            <strong className="mr-auto">Erro de autenticação</strong>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
        </Modal>
      </GeneralTemplate>
    );
  }
}

export default Login;
