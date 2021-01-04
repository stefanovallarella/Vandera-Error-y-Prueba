import { useDispatch, connect } from 'react-redux';


import SongsPlaylistContainer from '../main-section/songs-playlist/SongsPlaylistContainer';
import SongsTitleContainer from '../main-section/songs-playlist/songs-title/SongsTitleContainer';
import mainImg from '../../design/vanderasolo.png';

import continuarImg from '../../design/img-vandera/continuar.png';
import grados180Img from '../../design/img-vandera/180-grados.png';
import asiEsImg from '../../design/img-vandera/asi-es.png';
import caeLaParedImg from '../../design/img-vandera/cae-la-pared.png';
import errorYPruebaImg from '../../design/img-vandera/error-y-prueba.png';
import estoyBienImg from '../../design/img-vandera/estoy-bien.png';
import llamadasPerdidasImg from '../../design/img-vandera/llamadas-perdidas.png';
import superLentoImg from '../../design/img-vandera/super-lento.png';
import vietnamImg from '../../design/img-vandera/vietnam.png';
import { useEffect } from 'react';


const MainSection = ( { actualSong } ) => {



    useEffect(()=>{

    },[actualSong])

    const imgSwitch = () => {
        switch(actualSong.mainSectionPic){
            case 'continuar.png': return <img src={continuarImg} alt='Vandera Solo' className="block__img" />;
            case '180-grados.png': return <img src={grados180Img} alt='Vandera Solo' className="block__img" />;
            case 'asi-es.png': return <img src={asiEsImg} alt='Vandera Solo' className="block__img" />;
            case 'cae-la-pared.png': return <img src={caeLaParedImg} alt='Vandera Solo' className="block__img" />;
            case 'error-y-prueba.png': return <img src={errorYPruebaImg} alt='Vandera Solo' className="block__img" />;
            case 'estoy-bien.png': return <img src={estoyBienImg} alt='Vandera Solo' className="block__img" />;
            case 'llamadas-perdidas.png': return <img src={llamadasPerdidasImg} alt='Vandera Solo' className="block__img" />;
            case 'super-lento.png': return <img src={superLentoImg} alt='Vandera Solo' className="block__img" />;
            case 'vietnam.png': return <img src={vietnamImg} alt='Vandera Solo' className="block__img" />;
            default: return <img src={mainImg} alt='Vandera Solo' className="block__img" />;
        }
    }






    return (
        <section className="block block--hero">
            <div className="container">

                <div className="block__content">

                    <div className='container-song-title'>

                        <div className='title'>
                            <SongsTitleContainer/>
                        </div>

                        <div className='songs'>
                            <SongsPlaylistContainer />
                        </div>
                        
                    </div>

                </div>

                { imgSwitch() };
                {/* <img src={mainImg} alt='Vandera Solo' className="block__img" /> */}

            </div>
        </section>
    )   
}


const mapStateToProps = state => ({

    actualSong: state.reducers.actualSong

  });

export default connect(mapStateToProps)(MainSection);