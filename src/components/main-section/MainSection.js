import { useDispatch, connect } from 'react-redux';

import SongsPlaylistContainer from '../main-section/songs-playlist/SongsPlaylistContainer';
import SongsTitleContainer from '../main-section/songs-playlist/songs-title/SongsTitleContainer';

import mainImg from '../../design/vanderasolo.png';
import mainM from '../../design/img-manchas/error-y-prueba-manchas.png';

import { useEffect } from 'react';


const MainSection = ( { actualSong } ) => {

    useEffect(()=>{

    },[actualSong])

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
            </div>

            <img src={actualSong.mainSectionPic ? actualSong.mainSectionPic : mainImg} alt="" className="block__img" />

            <div className="block__bg"
                style={{
                backgroundImage: `url(${actualSong.mainSectionBg ? actualSong.mainSectionBg : mainM })`
                }}
            ></div>

        </section>
    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
});

export default connect(mapStateToProps)(MainSection);