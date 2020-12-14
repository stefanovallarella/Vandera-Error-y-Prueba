import React from 'react';

// Components
import Header from './components/Header';
import MainSection from './components/main-section/MainSection';
import SocialBanner from './components/SocialBanner';
import AboutAlbum from './components/AboutAlbum';
import Footer from './components/Footer';

import fotoPrueba from './design/erroryprueba-tapa-completa.jpg'

function App() {
  return (
    <React.Fragment>

      <Header />
      <MainSection />
      <SocialBanner />
      <AboutAlbum />
      <Footer />

      
      <h1>VANDERA</h1>
      <hr/>
      <h3>Error y prueba</h3>
      <img className="imagenPrueba" src={fotoPrueba} alt="Portada" />

    </React.Fragment>
  );
}

export default App;
