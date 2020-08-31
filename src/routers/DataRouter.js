import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { DataPage } from '../components/data/DataPage';
import { DptoPage } from '../components/data/DptoPage';
import { TransportePage } from '../components/data/TransportePage';
import { PersonaPage } from '../components/data/PersonaPage';
import { DestinoPage } from '../components/data/DestinoPage';
import { MotivoSalidaPage } from '../components/data/MotivoSalidaPage';

export const DataRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/data" component={DataPage} />
          <Route path="/data/departamento" component={DptoPage} />
          <Route path="/data/transporte" component={TransportePage} />
          <Route path="/data/persona" component={PersonaPage} />
          <Route path="/data/destino" component={DestinoPage} />
          <Route path="/data/motivo" component={MotivoSalidaPage} />
          <Redirect to="/data" />
        </Switch>
      </div>
    </Router>
  );
};
