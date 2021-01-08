import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { selectedSong, pauseAllSongs } from '../../../../actions/index';

const SongItem = ({song, allSongs, getActualSong, getAllPausedSongs, actualSong}) => {

    const [button, setButton] = useState('play');

    const toggleSingle = () => {

        if(button === 'play' && song.id === actualSong.id) {
            setButton('pause');
        }else{
            setButton('play');
        }
    }

    const togglePlay = (id) => {
        getAllPausedSongs(allSongs)
        getActualSong(id, allSongs)
    }

    useEffect(() => {
       if(actualSong.playing && actualSong.title === song.title) {
            setButton('pause');
        } else {
            setButton('play');
        }
    },[actualSong, allSongs])

    
    return (
        <article className="song-container">
            <div className="name"><strong>{song.songName}</strong></div>
            <div className="play-icon">
                <span>02:53</span>

                <button onClick={() => {togglePlay(song.id); toggleSingle();} }>
                    <i className={`fas fa-${button}`}></i>
                </button>

            </div>
        </article>
    )   
}

const mapStateToProps = state => ({
    allSongs: state.songs.allSongs,
    actualSong: state.songs.actualSong,
});

const mapDispatchToProps = (dispatch) => {
    return{
        getActualSong: (id, allSongs) => dispatch(selectedSong(id, allSongs)),
        getAllPausedSongs: (allSongs) => dispatch(pauseAllSongs(allSongs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SongItem);
