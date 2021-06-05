import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BusinessCategoriesList from './pages/BusinessCategoriesList';
import BusinessList from './pages/BusinessList';

import './App.css';

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/categories" component={BusinessCategoriesList} />
        <Route exact path="/categories/:categoryId" component={BusinessList} />
      </Switch>
    </div>
  );
};

export default App;
