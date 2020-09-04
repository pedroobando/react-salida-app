import React from 'react';

export const ListaTerminada = ({ lstPersona }) => {
  const retStyle = (estatus) => (estatus ? 'alert-warning' : 'alert-secondary');
  return (
    <>
      {lstPersona.map(({ nroSalida, nombre, sinRetorno }) => {
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
      })}
    </>
  );
};
