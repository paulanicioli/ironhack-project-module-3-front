import React, { Component } from 'react';

import './styles.css';
class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          className="custom-button"
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
