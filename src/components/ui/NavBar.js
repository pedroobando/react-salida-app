import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {
  const urlImagen = '/avatar.png';

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  // console.log(urlImagen);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top px-4 mb-3">
      <Link className="navbar-brand" to="/">
        Apps
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/salidas">
            Salidas
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/aprobaciones">
            Aprobaciones
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/datos">
            Datos
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/seguridad"
            aria-disabled>
            Seguridad
          </NavLink>
        </ul>
        <div className="row align-items-center">
          <button className="btn btn-link text-white" onClick={handleLogout}>
            logout
          </button>
          <div className="text-white">Usuario</div>
          <img src={urlImagen} alt="usuario" className="mx-2" style={{ width: 30 }} />
        </div>
      </div>
    </nav>
  );
};
