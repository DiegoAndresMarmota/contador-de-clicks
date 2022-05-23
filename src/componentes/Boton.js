import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {  //3  props
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
    );
}

export default Boton;
//Con exportacion por defecto, solo se puede exportar un archivo