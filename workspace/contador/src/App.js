import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [clicks, setNumClics] = useState(0);

  const click = () => {
    setNumClics(clicks + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <Contador
        clicks={clicks} />
      <div className='contenedor-principal'>
        <Boton
          texto='Click'
          esBotonDeClick={true}
          click={click} />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          click={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;