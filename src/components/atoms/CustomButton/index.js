import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button type="submit" variant="primary" size="lg">
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
