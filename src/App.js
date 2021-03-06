import React from 'react';

import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BusinessCategoriesList from './pages/BusinessCategoriesList';
import BusinessList from './pages/BusinessList';
import BusinessDetail from './pages/BusinessDetail';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/CheckOut';
import Orders from './pages/Orders';
import ErrorPage from './pages/ErrorPage';

import UserProtectedRoute from './protectedRoutes/userProtectedRoutes';
import BusinessManagerProtectedRoute from './protectedRoutes/businessManagerProtectedRoutes';

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
            render={(props) => (
              <Home
                {...props}
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
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                updateUserState={this.updateUserState}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/categories"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                updateUserState={this.updateUserState}
                user={this.state.user}
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
                updateUserState={this.updateUserState}
                user={this.state.user}
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
                updateUserState={this.updateUserState}
                user={this.state.user}
                // isUserLogged={this.state.user.isUserLogged}
                // role={this.state.user.role}
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
                updateUserState={this.updateUserState}
                user={this.state.user}
                Component={ProductDetail}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                updateUserState={this.updateUserState}
                user={this.state.user}
                Component={Checkout}
              />
            )}
          />
          <Route
            exact
            path="/orders"
            render={(props) => (
              <UserProtectedRoute
                {...props}
                updateUserState={this.updateUserState}
                user={this.state.user}
                Component={Orders}
              />
            )}
          />
          <Route
            render={(props) => (
              <ErrorPage
                updateUserState={this.updateUserState}
                user={this.state.user}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
