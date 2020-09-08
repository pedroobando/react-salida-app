import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

const initialForm = {
  email: 'pedroobando@hotmail.com',
  password: 123456,
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);
  const { email, password } = formValues;

  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
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
                  value={email}
                  onChange={handleInputChange}
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
                  value={password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Acceder
                </button>
                <Link to="/auth/recovery" className="btn btn-link">
                  Olvido su contraseña?
                </Link>
                <button className="btn btn-link" onClick={handleGoogleLogin}>
                  Google..
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
