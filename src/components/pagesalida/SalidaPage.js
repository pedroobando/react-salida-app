import React, { useState } from 'react';

export const SalidaPage = () => {
  const [state, setState] = useState({ checkRetorno: false });

  const handleRetorno = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log(name, value);
    setState({
      [name]: value,
    });
  };

  return (
    <div className="d-flex">
      <div className="col-12 col-sm-12 col-md-2">
        <button className="btn btn-outline-primary btn-block mb-2">Nueva Salida</button>

        {/* <form className="input-group">
          <input type="text" className="form-control" placeholder="V/E-20.547.645" />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
        </form> */}

        <div className="card border-secondary mt-3">
          <div className="card-header">Borrador</div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <small className="d-block">ADM-0820</small>
              <small className="d-block">Leonardo Ruiz</small>
            </li>
            <li className="list-group-item">
              <small>No. ADM-0520-092</small>
            </li>
            <li className="list-group-item">
              <small>No. ADM-7820-212</small>
            </li>
          </ul>
        </div>
      </div>

      <form className="col-12 col-sm-12 col-md-7">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Cedula</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="V/E-20.547.645" />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2">
                  Buscar
                </button>
              </div>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Nombre</label>
            <input type="text" className="form-control" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 ">
            <label>Vehiculo Placa</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Indique placa vehiculo"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          <div className="form-group col-md-6">
            <label>Marca</label>
            <input type="text" className="form-control" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Modelo</label>
            <input type="text" className="form-control" readOnly />
          </div>

          <div className="form-group col-md-6">
            <label>Color</label>
            <input type="text" className="form-control" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Conductor CI:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="V/E-20.547.645" />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          <div className="form-group col-md-6">
            <label>Conducto Nombre</label>
            <input type="text" className="form-control" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>
              Material o Equipo - (Retornara
              <input
                type="checkbox"
                className="ml-2"
                name="checkRetorno"
                checked={state.checkRetorno}
                onChange={handleRetorno}
              />
              )
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label">Motivo Salida 1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label">Motivo Salida 2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />
              <label className="form-check-label">Motivo Salida 3</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Direccion destino</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Estado</label>
            <select className="custom-select" id="inputGroupSelect01">
              <option value="1">Anzoategui</option>
              <option value="2">Monagas</option>
              <option value="3">...</option>
              <option value="4">Zulia</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Ciudad</label>
            <select className="custom-select" id="inputGroupSelect01">
              <option value="1">Valencia</option>
              <option value="2">Caracas</option>
              <option value="3">Tinaquillo</option>
              <option value="4">Maracaibo</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Observaciones</label>
            <textarea type="text" className="form-control" rows="2"></textarea>
          </div>
        </div>

        <div className="form-row justify-content-between">
          <img
            src="/assets/img/motor.png"
            alt="..."
            className="img-fluid img-thumbnail col-md-3"
          />
        </div>

        <hr />

        <div className="form-row justify-content-between">
          <div>
            <div className="btn btn-outline-danger">Anular</div>
          </div>
          <div>
            <div className="btn btn-primary mr-1">Borrador</div>
            <div className="btn btn-success">P/Aprobar</div>
          </div>
        </div>
      </form>

      <div className="col-12 col-sm-12 col-md-3">
        <div className="card mb-3">
          <div className="card-header">Aprobadores</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label">Aprobador 1</label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck3"
                />
                <label className="custom-control-label">Aprobador Maria</label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck4"
                />
                <label className="custom-control-label">Aprobador Sami</label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck5"
                />
                <label className="custom-control-label">Jose Martinez</label>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div className="alert alert-dismissible alert-warning" style={{ padding: 8 }}>
            <div className="d-flex flex-row justify-content-between">
              <div className="flex-column">
                <div className="bd-highlight">
                  <small>ADM-0814-145</small>
                </div>
                <div className="bd-highlight">
                  <small>Hidroneumatico</small>
                </div>
              </div>
              <div className="flex-column">
                <div className="bd-highlight align-items-end text-center">8</div>
                <div className="bd-highlight align-items-end text-left">MAY-2020</div>
              </div>
            </div>
          </div>

          <div className="alert alert-dismissible alert-warning" style={{ padding: 8 }}>
            <div className="d-flex flex-row justify-content-between">
              <div className="flex-column">
                <div className="bd-highlight">
                  <small>ADM-0814-145</small>
                </div>
                <div className="bd-highlight">
                  <small>Hidroneumatico</small>
                </div>
              </div>
              <div className="flex-column">
                <div className="bd-highlight align-items-end text-center">8</div>
                <div className="bd-highlight align-items-end text-left">MAY-2020</div>
              </div>
            </div>
          </div>

          <div className="alert alert-dismissible bg-secondary" style={{ padding: 8 }}>
            <div className="d-flex flex-row justify-content-between">
              <div className="flex-column">
                <div className="bd-highlight">
                  <small>ADM-0814-145</small>
                </div>
                <div className="bd-highlight">
                  <small>Hidroneumatico</small>
                </div>
              </div>
              <div className="flex-column">
                <div className="bd-highlight align-items-end text-center">8</div>
                <div className="bd-highlight align-items-end text-left">MAY-2020</div>
              </div>
            </div>
          </div>

          <div className="alert alert-dismissible bg-secondary" style={{ padding: 8 }}>
            <div className="d-flex flex-row justify-content-between">
              <div className="flex-column">
                <div className="bd-highlight">
                  <small>ADM-0814-145</small>
                </div>
                <div className="bd-highlight">
                  <small>Hidroneumatico</small>
                </div>
              </div>
              <div className="flex-column">
                <div className="bd-highlight align-items-end text-center">8</div>
                <div className="bd-highlight align-items-end text-left">MAY-2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
