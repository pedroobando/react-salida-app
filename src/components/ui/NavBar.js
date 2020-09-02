import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  const urlImagen = '/avatar.png';
  // console.log(urlImagen);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-3">
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
        <div className="row align-middle">
          <div className=" text-white">roll - Usuario</div>
          <img src={urlImagen} alt="usuario" className="mx-2" style={{ width: 30 }} />
        </div>
      </div>
    </nav>
  );
};
