import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Redirect, Route } from 'react-router-dom';

import { DashboardPage } from '../components/dashboard/DashboardPage';
import { SalidaPage } from '../components/pagesalida/SalidaPage';
import { AprobacionPage } from '../components/pageaprobac/AprobacionPage';

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/salidas" component={SalidaPage} />
          <Route exact path="/aprobaciones" component={AprobacionPage} />

          {/* <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} /> */}

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
