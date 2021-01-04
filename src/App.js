import './styles/screen.scss'

// Components
import Header from './components/Header';
import MainSection from './components/main-section/MainSection';
import SocialBanner from './components/SocialBanner';
import AboutAlbum from './components/AboutAlbum';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import apiController from './api/spotify'




function App() {

  /* const [trackito, setTrackito] = useState('');

  const testingApi= async () => {
    const token = await apiController.getToken();
    const track = await apiController.getTrack(token, 'https://api.spotify.com/v1/tracks/5NahaNsEA4qopIjLqSrEPb?market=ES');
    console.log(track);
    setTrackito(track);
  }


  useEffect(()=>{

    setTimeout(testingApi(), 5000);
    
  }) */


  return (
    <>
    
      {/* <audio src={`${trackito.external_urls.spotify}`}></audio> */}

      <div 
        style={{
          /* backgroundColor: 'white' */
          /* backgroundImage: URL() */
        }}
      >
        <Header />
        <MainSection />
      </div>
      <SocialBanner />
      <AboutAlbum />
      <Footer />
    </>
  );
}

export default App;
