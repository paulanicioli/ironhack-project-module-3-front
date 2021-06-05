import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BusinessCategoriesList from './pages/BusinessCategoriesList';
import BusinessList from './pages/BusinessList';
import BusinessDetail from './pages/BusinessDetail';

import './App.css';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/categories" component={BusinessCategoriesList} />
        <Route exact path="/categories/:categoryId" component={BusinessList} />
        <Route
          exact
          path="/businesses/:businessId"
          component={BusinessDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
