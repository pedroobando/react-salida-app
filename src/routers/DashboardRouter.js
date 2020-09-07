import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Redirect, Route } from 'react-router-dom';

import { DashboardPage } from '../components/dashboard/DashboardPage';
import { SalidaPage } from '../components/pagesalida/SalidaPage';
import { AprobacionPage } from '../components/pageaprobac/AprobacionPage';

import { DataPage } from '../components/pagedata/DataPage';
import { PersonaPage } from '../components/pagedata/PersonaPage';
import { UsuarioPage } from '../components/pagedata/UsuarioPage';

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/salidas" component={SalidaPage} />
          <Route exact path="/aprobaciones" component={AprobacionPage} />

          <Route exact path="/datos" component={DataPage} />
          <Route exact path="/datos/persona" component={PersonaPage} />
          <Route exact path="/datos/usuario" component={UsuarioPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
