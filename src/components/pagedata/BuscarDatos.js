import React from 'react';

const ItemBorrador = ({ nroSalida, nombre, handleClick }) => {
  return (
    <li
      className="list-group-item"
      onClick={() => handleClick(nroSalida)}
      style={{ cursor: 'pointer' }}>
      <small className="d-block">{nroSalida}</small>
      <small className="d-block">{nombre}</small>
    </li>
  );
};

export const BuscarDatos = ({ lstDraf, handleClickSinTerminar }) => {
  return (
    <div className="card border-secondary mt-3">
      <div className="card-header">Sin terminar</div>

      <ul className="list-group list-group-flush">
        {lstDraf.map(({ nroSalida, nombre }) => (
          <ItemBorrador
            key={nroSalida}
            nroSalida={nroSalida}
            nombre={nombre}
            handleClick={handleClickSinTerminar}
          />
        ))}
      </ul>
    </div>
  );
};
