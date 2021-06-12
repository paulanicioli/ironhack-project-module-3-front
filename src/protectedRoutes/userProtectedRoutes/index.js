import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorPage from './../../pages/ErrorPage';

class UserProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    const { isUserLogged, role, Component, ...rest } = this.props;

    if (!isUserLogged) {
      console.log('user is not logged')
      return <Redirect to="/login" />;
    }

    if (role === 'user') {
      console.log('user is user')
      return <Component {...rest} />;
    }

    return <ErrorPage {...rest} />;
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default UserProtectedRoute;
