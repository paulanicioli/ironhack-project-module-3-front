import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import CustomButton from '../../components/atoms/CustomButton';

import './styles.css';
import { PersonPlus } from 'react-bootstrap-icons';
class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  returnToHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <div className="error-message-container">
          <h3>Erro!</h3>
          <h6>Página não encontrada.</h6>
          <div>
            <img
              src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
              alt="Erro 401"
              className="error-img"
            />
            <CustomButton onClick={this.returnToHome}>
              Retornar à página inicial
            </CustomButton>
          </div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default ErrorPage;
