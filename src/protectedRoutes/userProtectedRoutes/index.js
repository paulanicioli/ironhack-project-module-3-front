import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorPage from './../../pages/ErrorPage';

class UserProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    console.log(this.props);
    const { isUserLogged, role, Component, ...rest } = this.props;

    if (!isUserLogged) {
      return <Redirect to="/login" />;
    }

    if (role === 'user') {
      return <Component {...rest} />;
    }

    return <ErrorPage {...rest} />;
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default UserProtectedRoute;
