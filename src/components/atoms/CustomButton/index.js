import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>{this.props.children}</Button>
      </div>
    );
  }
}

export default CustomButton;
