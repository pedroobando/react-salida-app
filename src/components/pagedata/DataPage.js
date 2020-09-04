import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const DataPage = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/persona`}>Persona</Link>
        </li>
        <li>
          <Link to={`${url}/destino`}>Destino</Link>
        </li>
        <li>
          <Link to={`${url}/motivo`}>Motivo</Link>
        </li>
        <li>
          <Link to={`${url}/dpto`}>Departamento</Link>
        </li>
        <li>
          <Link to={`${url}/transporte`}>Transporte</Link>
        </li>
      </ul>
    </div>
  );
};
