import './styles/screen.scss'

// Components

import SocialBanner from './components/SocialBanner';
import AboutAlbum from './components/AboutAlbum';
import Footer from './components/Footer';
import MainHeaderContainer from './components/MainHeaderContainer';



const App = () => {
  
  return (
    <>
    
      <MainHeaderContainer />

      <SocialBanner />
      <AboutAlbum />
      <Footer />

    </>
  );
}

export default App;
