import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './styles.css';
class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button type="submit" className="set-custom-blue">
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
