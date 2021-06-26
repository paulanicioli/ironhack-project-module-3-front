import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import SignupForm from '../../components/organisms/SignupForm/index';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  handleSignUp = async (data) => {
    console.log(data)
  }

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <SignupForm handleSignUp={this.handleSignUp}/>
      </GeneralTemplate>
    );
  }
}

export default Signup;
