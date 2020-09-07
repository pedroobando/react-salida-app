import React from 'react';
import { BuscarDatos } from './BuscarDatos';
import { ListaAprobadores } from './ListaAprobadores';
import { lstAllAprobadores } from '../../data/Datos';

export const PersonaPage = () => {
  const handleAprobador = ({ codigo }) => {
    console.log(codigo);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-2 col-md-3 px-1 position-fixed" id="sticky-sidebar">
          <button className="btn btn-outline-primary btn-block">Nueva Persona</button>
          <BuscarDatos />
        </aside>

        <main className="col offset-md-3" id="main">
          <h3>Persona</h3>
          <hr />

          <form role="main">
            <div className="d-flex mb-3">
              <div className="form-col col-sm-12 col-md-6 col-xl-7 pb-md-3">
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control" name="nombre" />
                </div>

                <div className="form-group">
                  <label>DNI / CI:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indique un numero"
                      name="cedula"
                      // value={cedulaField}
                      // onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Telefono Fijo:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="telefonoFijo"
                      // value={cedulaField}
                      // onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Telefono Movil:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="telefonoMovil"
                      // value={cedulaField}
                      // onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email / correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    name="correoElectronico"
                    id="correoElectronico"
                  />
                </div>

                <div className="form-group">
                  <label className="form-check-label">
                    Activo
                    <input className="form-check-input ml-2" type="checkbox" />
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-5">
                <ListaAprobadores
                  lstAprobadores={lstAllAprobadores}
                  handleAprobador={handleAprobador}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-7 mb-3 form-row justify-content-between">
              <div>
                <div className="btn btn-secondary mr-2">Cancelar</div>
                <div className="btn btn-outline-danger">Borrar</div>
              </div>
              <div>
                <div className="btn btn-success">Aceptar</div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
