import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <h1>Home Page</h1>
      </GeneralTemplate>
    );
  }
}

export default Home;
