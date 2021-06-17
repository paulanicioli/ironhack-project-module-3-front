import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import HomeForm from '../../components/organisms/HomeForm';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <HomeForm />
      </GeneralTemplate>
   
    );
  }
}

export default Home;
