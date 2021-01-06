import { connect } from 'react-redux';
import { selectedSong } from '../../../../actions/index';

const SongItem = ({song, allSongs, getActualSong}) => {
    
    const getSong = (id) => {
        getActualSong(id, allSongs);
    }

    return (
        <article className="song-container">
            <div className="name"><strong>{song.songName}</strong></div>
            <div className="play-icon">
                <span>02:53</span>
                <button onClick={() => getSong(song.id)}>
                    <i className="fas fa-play"></i>
                </button>
            </div>
        </article>
    )   
}

const mapStateToProps = state => ({
    allSongs: state.songs.allSongs,
});

const mapDispatchToProps = (dispatch) => {
    return{
        getActualSong: (id, allSongs) => dispatch(selectedSong(id, allSongs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SongItem);
