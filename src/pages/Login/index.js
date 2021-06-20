import React, { Component } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import apiService from '../../services/api.services';

import './styles.css';

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

      this.props.updateUserState({ isUserLogged: true, role });

      this.props.history.push('/categories');
    } catch (error) {
      if (error.response) {
        this.setState({
          error: error.response.data.message,
          showError: true
        })
      } else {
        console.log('other error ==> ', error)
      }
    }
  };

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
      
        <div className="form-content">
          <LoginForm handleLogin={this.handleLogin} />
          
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
