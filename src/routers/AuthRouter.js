import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { RecoveryPage } from '../components/auth/RecoveryPage';

export const AuthRouter = () => {
  return (
    // <Router>
    <div className="container">
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/auth/recovery" component={RecoveryPage} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
    // </Router>
  );
};
