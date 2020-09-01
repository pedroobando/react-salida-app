import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const PersonaPage = () => {
  const history = useHistory();
  const handleBack = (e) => {
    e.preventDefault();
    history.replace('/datos');
  };

  return (
    <div>
      <h1>Pagina Persona</h1>
      <hr />
      <p>
        <Link onClick={handleBack}>Volver</Link>
      </p>
    </div>
  );
};
