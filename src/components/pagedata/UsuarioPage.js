import React from 'react';
import { BuscarDatos } from './BuscarDatos';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

// import { ListaAprobadores } from './ListaAprobadores';
// import { lstAllAprobadores } from '../../data/Datos';

const initialForm = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

export const UsuarioPage = () => {
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { name, email, password, password2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('formulario correcto');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('Nombre es requerido');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email is no valido');
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log('Password es diferente y debe tener mas de 6 caracteres');
      return false;
    }

    return true;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-2 col-md-3 px-1 position-fixed" id="sticky-sidebar">
          <button className="btn btn-outline-primary btn-block" onClick={reset}>
            Registro Usuario
          </button>
          <BuscarDatos />
        </aside>

        <main className="col offset-md-3" id="main">
          <h3>Registro Usuario</h3>
          <hr />

          <form onSubmit={handleRegistro}>
            <div className="d-flex mb-3">
              <div className="form-col col-sm-12 col-md-6 col-xl-7 pb-md-3">
                <div className="alert alert-dismissible alert-danger">
                  <strong>Oh snap!</strong> and try submitting again.
                </div>

                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Indique el username"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Indique el email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Indique el password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Verificación</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirme el password"
                      name="password2"
                      value={password2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-7 mb-3 form-row justify-content-between">
              <button className="btn btn-secondary mr-2" type="button">
                Cancelar
              </button>
              <button className="btn btn-success" type="submit">
                Aceptar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
