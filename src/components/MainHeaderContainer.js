import '../styles/screen.scss'


// Components
import Header from '../components/Header';
import MainSection from '../components/main-section/MainSection';


import { useEffect } from 'react';
import { connect } from 'react-redux';

import continuarM from '../design/img-manchas/continuar-manchas.png';
import grados180M from '../design/img-manchas/180grados-manchas.png';
import asiEsM from '../design/img-manchas/asi-es-manchas.png';
import caeLaParedM from '../design/img-manchas/cae-la-pared-manchas.png';
import errorYPruebaM from '../design/img-manchas/error-y-prueba-manchas.png';
import estoyBienM from '../design/img-manchas/estoy-bien-manchas.png';
import llamadasPerdidasM from '../design/img-manchas/llamadas-perdidas-manchas.png';
import superLentoM from '../design/img-manchas/super-lento-manchas.png';
import vietnamM from '../design/img-manchas/vietnam-manchas.png';




const MainHeaderContainer = ( { actualSong } ) => {


  useEffect(()=>{

  },[actualSong])

  const imgBackgroundSwitch = () => {
      switch(actualSong.mainSectionBg){
          case 'continuar-manchas.png': return continuarM;
          case '180grados-manchas.png': return grados180M;
          case 'asi-es-manchas.png': return asiEsM;
          case 'cae-la-pared-manchas.png': return caeLaParedM;
          case 'error-y-prueba-manchas.png': return errorYPruebaM;
          case 'estoy-bien-manchas.png': return estoyBienM;
          case 'llamadas-perdidas-manchas.png': return llamadasPerdidasM;
          case 'super-lento-manchas.png': return superLentoM;
          case 'vietnam-manchas.png': return vietnamM;
          default: return errorYPruebaM;
      }
  }


  return (
    <>
    
      <div 
        style={{
           backgroundImage: `url(${imgBackgroundSwitch()})`
        }}
      >
        <Header />
        <MainSection />
      </div>

    </>
  );
}

const mapStateToProps = state => ({

  actualSong: state.reducers.actualSong

})

export default connect(mapStateToProps)(MainHeaderContainer);
