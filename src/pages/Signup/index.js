import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import SignupForm from '../../components/organisms/SignupForm/index';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <SignupForm />
      </GeneralTemplate>
    );
  }
}

export default Signup;
