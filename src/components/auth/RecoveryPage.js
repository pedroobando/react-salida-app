import React from 'react';
import { Link } from 'react-router-dom';

export const RecoveryPage = () => {
  return (
    <div className="row h-100 mt-5 justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="card">
          <div className="card-header h3 text-white bg-primary">
            Recuperacion de contraseña
          </div>
          <div className="card-body">
            <p className="card-title text-muted">
              Por favor indique los datos que a continuacion le son solicitados.
            </p>
            <p className="card-title text-muted">
              Se le enviara un correo electronico con los pasos a seguir para la exitosa
              recuperacion de su contraseña.
            </p>
            <form className="mt-3">
              <div className="form-group">
                <label for="exampleInputEmail1">Correo electronico o Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                  name="email"
                  required
                />
              </div>

              <hr className="my-4" />
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <Link to="/auth/login" className="btn btn-link">
                  Volver al login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
