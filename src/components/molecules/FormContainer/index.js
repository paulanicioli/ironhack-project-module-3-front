import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import './styles.css';

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form className="form-container" onSubmit={this.props.onSubmit}>
        {this.props.children}
      </Form>
    );
  }
}

export default FormContainer;
