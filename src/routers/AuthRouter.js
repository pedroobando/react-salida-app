import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { RecoveryPage } from '../components/auth/RecoveryPage';

export const AuthRouter = () => {
  return (
    <Router>
      <div>
        <p>AuthRouter</p>
        <Switch>
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/recovery" component={RecoveryPage} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
