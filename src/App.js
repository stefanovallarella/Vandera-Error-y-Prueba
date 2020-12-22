import './styles/screen.scss'

// Components
import Header from './components/Header';
import MainSection from './components/main-section/MainSection';
import SocialBanner from './components/SocialBanner';
import AboutAlbum from './components/AboutAlbum';
import Footer from './components/Footer';

function App() {
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
