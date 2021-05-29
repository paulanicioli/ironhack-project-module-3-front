import React, { Component } from 'react';

class GeneralTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default GeneralTemplate;
