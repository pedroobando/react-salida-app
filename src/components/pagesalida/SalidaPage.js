import React, { useState } from 'react';
import { ListaSinTerminar } from './ListaSinTerminar';
import { useForm } from '../../hooks/useForm';
import { ListaAprobadores } from './ListaAprobadores';
import { ListaSalidas } from './ListaSalidas';

const lstAllAprobadores = [
  { dni: 9547, nombre: 'Camilo Larez', roll: 'ADM', aprobador: false },
  { dni: 5478, nombre: 'Raiza Mota', roll: 'ADM', aprobador: false },
  { dni: 1975, nombre: 'Ezperanza Rodriguez', roll: 'GTE', aprobador: false },
  { dni: 5321, nombre: 'Jose Martinez', roll: 'APB', aprobador: false },
  { dni: 3323, nombre: 'Juan Pinerua', roll: 'SEG', aprobador: false },
  { dni: 1925, nombre: 'Pedro Rengel', roll: 'SEG', aprobador: false },
];

const initialForm = {
  cedulaField: '',
  nombreField: '',
  placaField: '',
  marcaField: '',
  modeloField: '',
  colorField: '',
  condutorCIField: '',
  conductorNombreField: '',
  materialField: '',
  retornaCheck: true,
  direccionField: '',
  estadoField: '',
  ciudadField: '',
  observacionField: '',
  // listaAprobadores: lstAllAprobadores,
};

const lstSinTerminar = [
  { nroSalida: 'ADM-124-454', nombre: 'Luis Ocando' },
  { nroSalida: 'DPT-2322-454', nombre: 'Franco Colonico' },
  { nroSalida: 'MTT-0820-014', nombre: 'Extintores El Norte' },
];

export const SalidaPage = () => {
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const [aprobadores, setAprobadores] = useState(lstAllAprobadores);

  // const { checkRetorno } = formValues;
  const {
    cedulaField,
    nombreField,
    placaField,
    marcaField,
    modeloField,
    colorField,
    condutorCIField,
    conductorNombreField,
    materialField,
    retornaCheck,
    direccionField,
    estadoField,
    ciudadField,
    observacionField,
    // listaAprobadores,
  } = formValues;

  const handleClickNuevo = () => {
    reset();
  };
  const handleClickSinTerminar = (numero) => {
    console.log(numero);
  };

  const handleClickAprobador = ({ codigo }) => {
    aprobadores.forEach((elAprobador) => {
      if (elAprobador.dni === codigo) {
        elAprobador.aprobador = !elAprobador.aprobador;
      }
    });

    setAprobadores(aprobadores);
  };

  return (
    <div className="d-flex">
      <div className="col-12 col-sm-12 col-md-2">
        <button
          className="btn btn-outline-primary btn-block mb-2"
          onClick={handleClickNuevo}>
          Nueva Salida
        </button>
        {lstSinTerminar.length >= 1 && (
          <ListaSinTerminar
            lstDraf={lstSinTerminar}
            handleClickSinTerminar={handleClickSinTerminar}
          />
        )}
      </div>

      <form className="col-12 col-sm-12 col-md-7 mb-5">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Cedula</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="V/E-20.547.645"
                name="cedulaField"
                value={cedulaField}
                onChange={handleInputChange}
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
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombreField"
              value={nombreField}
              readOnly
            />
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
                name="placaField"
                value={placaField}
                onChange={handleInputChange}
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
            <input type="text" className="form-control" readOnly value={marcaField} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Modelo</label>
            <input type="text" className="form-control" readOnly value={modeloField} />
          </div>

          <div className="form-group col-md-6">
            <label>Color</label>
            <input type="text" className="form-control" readOnly value={colorField} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Conductor CI:</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="V/E-20.547.645"
                name="condutorCIField"
                value={condutorCIField}
                onChange={handleInputChange}
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
            <label>Conducto Nombre</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={conductorNombreField}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>
              Material o Equipo - (Retornara
              <input
                type="checkbox"
                className="ml-2"
                name="retornaCheck"
                checked={retornaCheck}
                onChange={handleInputChange}
              />
              )
            </label>
            <input
              type="text"
              className="form-control"
              value={materialField}
              name="materialField"
              onChange={handleInputChange}
            />
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
            <input
              type="text"
              className="form-control"
              value={direccionField}
              name="direccionField"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Estado</label>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={estadoField}
              name="estadoField"
              onChange={handleInputChange}>
              <option value="1">Anzoategui</option>
              <option value="2">Monagas</option>
              <option value="3">...</option>
              <option value="4">Zulia</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Ciudad</label>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={ciudadField}
              name="ciudadField"
              onChange={handleInputChange}>
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
            <textarea
              type="text"
              className="form-control"
              rows="2"
              value={observacionField}
              name="observacionField"
              onChange={handleInputChange}></textarea>
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
        <ListaAprobadores
          lstAprobadores={aprobadores}
          handleClickAprobador={handleClickAprobador}
        />

        <ListaSalidas />
      </div>
    </div>
  );
};
