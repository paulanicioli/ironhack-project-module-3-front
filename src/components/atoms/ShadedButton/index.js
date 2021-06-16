import React, { Component } from 'react';

import './styles.css';
class ShadedButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          className="shaded-button"
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default ShadedButton;
