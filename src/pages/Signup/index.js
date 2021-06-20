import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import SignupForm from '../../components/organisms/SignupForm/index';

class Signup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GeneralTemplate>
        <SignupForm />
      </GeneralTemplate>
    );
  }
}

export default Signup;
