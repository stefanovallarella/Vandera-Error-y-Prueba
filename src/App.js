import React from 'react';
import fotoPrueba from './design/erroryprueba-tapa-completa.jpg'

function App() {
  return (
    <React.Fragment>
      <h1>VANDERA</h1>
      <hr/>
      <h3>Error y prueba</h3>
      <img className="imagenPrueba" src={fotoPrueba} alt="Portada" />
    </React.Fragment>
  );
}

export default App;
