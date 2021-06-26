import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorPage from './../../pages/ErrorPage';

class UserProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    const { user, updateUserState, Component, ...rest } = this.props;

    if (!user.isUserLogged) {
      return <Redirect to="/login" />;
    }

    if (user.role === 'user') {
      return (
        <Component {...rest} user={user} updateUserState={updateUserState} />
      );
    }

    return <ErrorPage {...rest} />;
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default UserProtectedRoute;
