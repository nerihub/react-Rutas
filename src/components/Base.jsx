import React, {useState,useEffect} from 'react';

const Base = () => {
  const [name,setName]=useState('Pedro');
  // esta funcino se ejecuta sola
  useEffect (
    () => {
      setTimeout( ()=> {
        setName('Neri')
        },2000
      );
    }
  )

  return (

    <div>
      <h1>Pagina Base de /</h1>
      {name}
    </div>
  );
}

export default Base;