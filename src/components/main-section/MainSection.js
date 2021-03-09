import { connect } from 'react-redux';
import { selectedSong, pauseAllSongs } from "../../actions/index";

import SongItem from './songs-playlist/songs-item/SongsItem'
import SongsTitle from './songs-playlist/songs-title/SongsTitle';

import SongsDetailContainer from '../main-section/songs-details/SongsDetailContainer';

import mainImg from '../../assets/images/img-vandera/vanderasolo.png';
import mainM from '../../assets/images/img-manchas/error-y-prueba-manchas.png';


const MainSection = ( { allSongs, actualSong, getActualSong } ) => {
  
    return (
        <section className="block block--hero">

            <div className="container">

                {actualSong.playing ? 
                <SongsDetailContainer />
                : ''}
                <div className="block__content">
                    
                    <div className={ actualSong.playing ? 'container-song-title is-active' : 'container-song-title' }>

                        <div className='title'>
                            <SongsTitle/>
                        </div>

                        <div className='songs'>
                            
                            <div className='overlay-playlist' >
                                <button className="btn btn--icon-right" onClick={() => getActualSong(1, allSongs) } >
                                    Escuchalo ahora 
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>

                            <div className="playlist-container">
                            { allSongs.map((song)=>{
                                return <SongItem song={song} key={song.id} />
                            })}
                            </div>
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
    allSongs: state.songs.allSongs,
    actualSong: state.songs.actualSong
});

const mapDispatchToProps = (dispatch) => {
  return {
    getActualSong: (id, allSongs) => dispatch(selectedSong(id, allSongs)),
    getAllPausedSongs: (allSongs) => dispatch(pauseAllSongs(allSongs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);