import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { selectedSong, pauseAllSongs } from '../actions/index';


const Player = ({ getActualSong, getAllPausedSongs, allSongs, actualSong }) => {

    const [song, setSong] = useState('');

    const pauseSong = (allSongs) => {
        
        getAllPausedSongs(allSongs);
        setSong('');

    }

    const playSong = (actualSong) => {
        
        setSong(actualSong.mp3SongUrl);
    }
    
    useEffect(()=> {
        
        setSong(actualSong.mp3SongUrl);

    },[actualSong, allSongs])

    return (
        <AudioPlayer
            autoPlay
            src={song}
            onPlay={() => playSong}
            onPause={()=> pauseSong}
            // other props here
        />
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

export default connect(mapStateToProps,mapDispatchToProps)(Player);