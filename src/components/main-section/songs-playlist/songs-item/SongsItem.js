import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { selectedSong, pauseAllSongs } from '../../../../actions/index';

const SongItem = ({song, allSongs, getActualSong, getAllPausedSongs, actualSong}) => {

    const [button, setButton] = useState('pause');
    const myRef = useRef();
    const songMP3 = song.mp3SongUrl;

    const togglePlay = (id) => {
        getAllPausedSongs(allSongs)
        getActualSong(id, allSongs)
        if(song.id === actualSong.id) {
            getAllPausedSongs(allSongs)
            setButton('play');
            myRef.current.pause();
            console.log(actualSong.title+' Actual song is paused: '+actualSong.playing);
            console.log(song.title+' Item song is paused: '+song.playing);
        } else {
            console.log(actualSong.title+' Actual song is playing: '+actualSong.playing);
            console.log(song.title+' Item song is playing: '+song.playing);
        }
    }

    useEffect(() => {
        if(song.playing === actualSong.playing) {
            setButton('pause');
            myRef.current.play()
        } else {
            setButton('play');
            myRef.current.pause()
        }
    },[actualSong, allSongs, song])

    return (
        <article className="song-container">
            <div className="name"><strong>{song.songName}</strong></div>
            <div className="play-icon">
                <span>02:53</span>
                <audio
                    ref={myRef}
                    src={songMP3}
                />
            
                <button onClick={() => togglePlay(song.id) }>
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
