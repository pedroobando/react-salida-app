import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// const initialForm = {
//   email: '',
//   password: '',
// };

export const LoginPage = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    console.log('paso');
  };

  return (
    <div className="row h-100 mt-5 justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="card border-primary ">
          <div className="card-header card-header h3 text-white bg-primary">Login</div>
          <div className="card-body">
            <h5 className="card-title text-muted text-center">
              Aplicacion salida materiales o equipos
            </h5>
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Correo electronico o Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                  name="email"
                  // required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  // required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Nunca comparta su contraseña de correo electrónico o usuario con nadie
                  más.
                </small>
              </div>

              <hr className="my-4" />
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Acceder
                </button>
                <Link to="/auth/recovery" className="btn btn-link">
                  Olvido su contraseña?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
