import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BusinessCategoriesList from './pages/BusinessCategoriesList';
import BusinessList from './pages/BusinessList';
import BusinessDetail from './pages/BusinessDetail';
import ProductDetail from './pages/ProductDetail';

import UserProtectedRoute from './protectedRoutes/userProtectedRoutes';
import BusinessManagerProtectedRoute from './protectedRoutes/businessManagerProtectedRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: this.checkLocalStorage(),
    };
  }

  checkLocalStorage = () => {
    const role = localStorage.getItem('role');

    if (role) {
      return { isUserLogged: true, role: role };
    }

    return { isUserLogged: false, role: '' };
  };

  updateUserState = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                updateUserState={this.updateUserState}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                updateUserState={this.updateUserState}
                user={this.state.user}
              />
            )}
          />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/categories"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                isUserLogged={this.state.user.isUserLogged}
                role={this.state.user.role}
                Component={BusinessCategoriesList}
              />
            )}
          />
          <Route
            exact
            path="/categories/:categoryId"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                isUserLogged={this.state.user.isUserLogged}
                role={this.state.user.role}
                Component={BusinessList}
              />
            )}
          />
          <Route
            exact
            path="/businesses/:businessId"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                isUserLogged={this.state.user.isUserLogged}
                role={this.state.user.role}
                Component={BusinessDetail}
              />
            )}
          />
          <Route
            exact
            path="/products"
            render={(props) => (
              <BusinessManagerProtectedRoute
                {...props}
                isUserLogged={this.state.user.isUserLogged}
                role={this.state.user.role}
                Component={ProductDetail}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
