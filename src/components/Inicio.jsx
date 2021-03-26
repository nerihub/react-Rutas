import React from 'react';
import {useParams} from 'react-router-dom';

const Inicio = () => {
  
  const {nombre} = useParams();
  console.log(nombre);
  return (
    <div>
      <h1>Pagina de Inicio</h1>
      {nombre}
    </div>
  );
}

export default Inicio;