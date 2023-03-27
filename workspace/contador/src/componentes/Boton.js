import React from 'react';
import '../css/Boton.css'

function Boton({ texto, esBotonDeClick, click }) {
  return (
    <button
      className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={click}>
      {texto}
    </button>
  );
}

export default Boton;