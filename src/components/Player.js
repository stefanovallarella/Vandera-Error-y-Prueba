import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { selectedSong, pauseAllSongs } from '../actions/index';


const Player = ({ getActualSong, getAllPausedSongs, allSongs, actualSong  }) => {

    const [song, setSong] = useState('');
    const [title, setTitle] = useState('');
    
    const getNextSongClick = () => {
        if(actualSong.id < 9){
            const songNextId = actualSong.id + 1;
            const songNext = allSongs.find(song => {
                return song.id === songNextId;
            })
            getActualSong(songNextId, allSongs);
            setSong(songNext.mp3SongUrl);
            setTitle(songNext.title);
        }else{
            const songFirstId = 1;
            const songFirst = allSongs.find(song => {
                return song.id === songFirstId;
            })
            getActualSong(songFirstId, allSongs);
            setSong(songFirst.mp3SongUrl);
            setTitle(songFirst.title);
        }
    }

    const getPreviousSongClick = () => {
        if(actualSong.id > 1){
            const songPreviousId = actualSong.id - 1;
            const songPrevious = allSongs.find(song => {
                return song.id === songPreviousId;
            })
            console.log(songPrevious);
            getActualSong(songPreviousId, allSongs);
            setSong(songPrevious.mp3SongUrl);
            setTitle(songPrevious.title);
        }else{
            const songFirstId = actualSong.id;
            const songFirst = allSongs.find(song => {
                return song.id === songFirstId;
            })
            getActualSong(songFirstId, allSongs);
            setSong(songFirst.mp3SongUrl);
            setTitle(songFirst.title);
        }
    }



 /*    const pauseSong = (allSongs) => {
        
    }  */

    const playSong = (actualSong) => {
        
        setSong(actualSong.mp3SongUrl);

    }
    
    useEffect(()=> {
        
        if(actualSong){
            setSong(actualSong.mp3SongUrl);
            setTitle(actualSong.title);
        }

    },[actualSong, allSongs, song])

    return (
        <AudioPlayer
            autoPlay
            src={song}

            onPlay={() => playSong}
            /* onPause={()=> pauseSong} */

            onClickPrevious={getPreviousSongClick}
            onClickNext={getNextSongClick}

            onEnded={getNextSongClick}

            showSkipControls={true} 
            showJumpControls={false}

            header={title}

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


