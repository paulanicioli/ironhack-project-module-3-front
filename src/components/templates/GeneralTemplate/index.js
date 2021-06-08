import React, { Component } from 'react';
import Navbar from '../../organisms/CustomNav/';

class GeneralTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      <Navbar />
      {this.props.children}
    </div>;
  }
}

export default GeneralTemplate;
