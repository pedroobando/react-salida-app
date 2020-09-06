import React from 'react';
import { useForm } from '../../hooks/useForm';

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

const ListaBorrador = ({ lstDraf, handleClickSinTerminar }) => {
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

const initialForm = {
  nameField: '',
};

export const BuscarDatos = ({ lstDraf, handleClickSinTerminar }) => {
  const [formValues, handleInputChange] = useForm(initialForm);
  const { nameField } = formValues;

  const handleFindPersona = () => {
    console.log(nameField);
  };

  return (
    <>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="buscar"
          name="nameField"
          value={nameField}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={handleFindPersona}>
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};
