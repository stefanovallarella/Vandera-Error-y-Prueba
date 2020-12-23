import './styles/screen.scss'

// Components
import Header from './components/Header';
import MainSection from './components/main-section/MainSection';
import SocialBanner from './components/SocialBanner';
import AboutAlbum from './components/AboutAlbum';
import Footer from './components/Footer';
import { useEffect } from 'react';
import apiController from './api/spotify'




function App() {

  const testingApi= async () => {
    const token = await apiController.getToken();
    const track = await apiController.getTrack(token, 'https://api.spotify.com/v1/tracks/5NahaNsEA4qopIjLqSrEPb?market=ES');
    console.log(track);
  }


  useEffect(()=>{

    testingApi();
    
  })


  return (
    <>
      <Header />
      <MainSection />
      <SocialBanner />
      <AboutAlbum />
      <Footer />
    </>
  );
}

export default App;
