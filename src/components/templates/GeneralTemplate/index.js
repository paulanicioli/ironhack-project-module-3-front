import React, { Component } from 'react';
import CustomNav from '../../organisms/CustomNav/';

class GeneralTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CustomNav
          updateUserState={this.props.updateUserState}
          user={this.props.user}
          productsInCart={this.props.productsInCart}
        />
        {this.props.children}
      </div>
    );
  }
}

export default GeneralTemplate;
