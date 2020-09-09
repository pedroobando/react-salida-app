import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { firebase } from '../firebase/firebaseConfig';

import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { login } from '../actions/auth';
import { useState } from 'react';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

// import { HomePage } from '../components/home/HomePage';
// import { SalidaPage } from '../components/home/SalidaPage';
// import { AprobacionPage } from '../components/home/AprobacionPage';

// import { DataPage } from '../components/data/DataPage';
// import { DptoPage } from '../components/data/DptoPage';
// import { TransportePage } from '../components/data/TransportePage';
// import { PersonaPage } from '../components/data/PersonaPage';
// import { DestinoPage } from '../components/data/DestinoPage';
// import { MotivoSalidaPage } from '../components/data/MotivoSalidaPage';
// import { PrivateRouter } from './PrivateRouter';
// import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, checking, isLoggedIn]);

  if (checking) {
    return <h2>Loading</h2>;
  }
  // const authUser = isLoggedIn;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRouter
            path="/"
            exact
            isAuthenticated={isLoggedIn}
            component={DashboardRouter}
          />

          {/* {!authUser && <Route path="/auth" component={AuthRouter} />} */}

          {/* {authUser && <Route path="/" component={DashboardRouter} />} */}

          {/* <Route exact path="/salidas" component={SalidaPage} />
          <Route exact path="/aprobaciones" component={AprobacionPage} />

          <Route exact path={`/${nameData}`} component={DataPage} />
          <Route exact path={`/${nameData}/departamento`} component={DptoPage} />
          <Route exact path={`/${nameData}/transporte`} component={TransportePage} />
          <Route exact path={`/${nameData}/persona`} component={PersonaPage} />
          <Route exact path={`/${nameData}/destino`} component={DestinoPage} />
          <Route exact path={`/${nameData}/motivo`} component={MotivoSalidaPage} />
 */}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
