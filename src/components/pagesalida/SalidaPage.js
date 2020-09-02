import React from 'react';

export const SalidaPage = () => {
  return (
    <div className="d-flex">
      <div className="col-3 bg-secondary">
        <button className="btn btn-primary btn-block mb-2">Nueva Salida</button>

        <form className="input-group">
          <input type="text" className="form-control" placeholder="V/E-20.547.645" />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
        </form>

        <ul className="list-group my-3">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
          </li>
        </ul>
      </div>

      <form className="col-7 bg-white">
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
          <div className="form-group col-md-8">
            <label>Material o Equipo</label>
            <textarea type="" className="form-control" rows="1"></textarea>
          </div>
          <div className="col-4 mt-sm-0 mt-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="exampleRadios1">
                Retornara a Planta
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" for="exampleRadios2">
                Desincorporacion
              </label>
            </div>
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
              <label className="form-check-label" for="inlineCheckbox1">
                Motivo Salida 1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label" for="inlineCheckbox2">
                Motivo Salida 2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
              <label className="form-check-label" for="inlineCheckbox3">
                Motivo Salida 3
              </label>
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
              <option selected>Seleccione...</option>
              <option value="1">Anzoategui</option>
              <option value="2">Monagas</option>
              <option value="3">...</option>
              <option value="4">Zulia</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Ciudad</label>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Seleccione...</option>
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

      <div className="col-2 bg-secondary"></div>
    </div>
  );
};
