import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { SalidaPage } from '../components/home/SalidaPage';
import { HomePage } from '../components/home/HomePage';
import { AprobacionPage } from '../components/home/AprobacionPage';
import { DataPage } from '../components/data/DataPage';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <p>AppRouter</p>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/salidas" component={SalidaPage} />
          <Route exact path="/aprobaciones" component={AprobacionPage} />
          <Route exact path="/data" component={DataPage} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
