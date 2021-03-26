import React, {useState,useEffect} from 'react';

const Base = () => {
  const [nombre,setNombre]=useState('Pedro');
  // esta funcino se ejecuta sola
  useEffect (
    () => {
      setTimeout( ()=> {
        setNombre('Neri')
        },2000
      );
    }
  )

  return (

    <div>
      <h1>Pagina Base de /</h1>
      {nombre}
    </div>
  );
}

export default Base;