import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from '../components/home/HomePage';
import { SalidaPage } from '../components/home/SalidaPage';
import { AprobacionPage } from '../components/home/AprobacionPage';
import { DataRouter } from './DataRouter';

export const HomeRouter = () => {
  return (
    <Router>
      <div>
        <p>HomeRouter</p>
        <Switch>
          <Route exact path="/salidas" component={SalidaPage} />
          <Route exact path="/aprobaciones" component={AprobacionPage} />
          <Route exact path="/data" component={DataRouter} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
