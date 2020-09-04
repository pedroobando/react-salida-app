import React from 'react';

const ItemTerminado = ({ nroSalida, nombre, sinRetorno }) => {
  const retStyle = (estatus) => (estatus ? 'alert-warning' : 'alert-secondary');

  return (
    <div className={`alert ${retStyle(sinRetorno)}`} style={{ padding: 8 }}>
      <div className="d-flex flex-row justify-content-between">
        <div className="flex-column">
          <div className="bd-highlight">
            <small>{nroSalida}</small>
          </div>
          <div className="bd-highlight">
            <small>{nombre}</small>
          </div>
        </div>
        <div className="flex-column">
          <div className="bd-highlight align-items-end text-center">8</div>
          <div className="bd-highlight align-items-end text-left">MAY-2020</div>
        </div>
      </div>
    </div>
  );
};

export const ListaTerminada = ({ lstPersona }) => {
  return (
    <>
      {lstPersona.map((itemTerminado) => (
        <ItemTerminado key={itemTerminado.nroSalida} {...itemTerminado} />
      ))}
    </>
  );
};
