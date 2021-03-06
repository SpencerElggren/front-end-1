import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <CssBaseline>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
