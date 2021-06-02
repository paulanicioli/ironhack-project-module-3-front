import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BusinessCategoriesList from './pages/BusinessCategoriesList';

import './App.css';

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        name="startDate"
        dateFormat="MM/dd/yyyy"
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/categories" component={BusinessCategoriesList} />
      </Switch>
    </div>
  );
};

export default App;
