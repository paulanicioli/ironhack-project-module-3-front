import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import SignupForm from '../../components/organisms/SignupForm/index';

import apiService from '../../services/api.services';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
    this.state = {
      error: '',
      showError: false,
    };
  }

  handleSignUp = async (data) => {
    try {
      const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: {
          street: data.street,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode
        },
        password: data.password,
        role: data.role == 0 ? 'user' : 'business-manager'
      }
  
      await this.apiService.signupUser(userData)

      this.props.history.push('/login')
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


  }

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <SignupForm handleSignUp={this.handleSignUp}/>
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

export default Signup;
