import React from 'react';

const ItemAprobador = ({ dni, nombre, roll, aprobador, handleClickAprobador }) => {
  return (
    <li className="list-group-item">
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            value={aprobador}
            name={dni}
            onChange={() => handleClickAprobador({ codigo: dni })}
          />
          <span className="ml-2">{nombre}</span>
          <span className="d-md-none d-lg-inline"> - {roll}</span>
        </label>
      </div>
    </li>
  );
};

export const ListaAprobadores = ({ lstAprobadores, handleAprobador }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">Aprobadores</div>
      <ul className="list-group list-group-flush">
        {lstAprobadores.map((aprobador) => {
          return (
            <ItemAprobador
              key={aprobador.dni}
              {...aprobador}
              handleClickAprobador={handleAprobador}
            />
          );
        })}
      </ul>
    </div>
  );
};
