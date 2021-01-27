import { connect } from 'react-redux';

import SongsPlaylistContainer from '../main-section/songs-playlist/SongsPlaylistContainer';
import SongsTitleContainer from '../main-section/songs-playlist/songs-title/SongsTitleContainer';

import SongsDetailContainer from '../main-section/songs-details/SongsDetailContainer';

import mainImg from '../../assets/images/img-vandera/vanderasolo.png';
import mainM from '../../assets/images/img-manchas/error-y-prueba-manchas.png';

const MainSection = ( { actualSong } ) => {
    return (
        <section className="block block--hero">

            <div className="container">

                { actualSong.playing ? <SongsDetailContainer /> : ' ' }
                <div className="block__content">
                    
                    <div className={ actualSong.playing ? 'container-song-title' : ' ' }>

                        <div className='title'>
                            <SongsTitleContainer/>
                        </div>

                        <div className='songs'>
                            <SongsPlaylistContainer />
                        </div>
                        
                    </div>

                </div>
            </div>

            <img src={actualSong.mainSectionPic ? actualSong.mainSectionPic : mainImg} alt=""  className={ actualSong.playing ? 'block__img img-playing' : 'block__img' } />

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