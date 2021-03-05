import { connect } from "react-redux";
import { selectedSong } from "../../../../actions/index";

const SongItem = ({ song, getActualSong, actualSong, allSongs }) => {

  return (
    <article className="song-container">
      <button 
        className={ actualSong.id === song.id ? 'song-name current' : 'song-name' }
        onClick={() => getActualSong(song.id, allSongs) } 
      >
        {song.title}
      </button>
      
      <div className="song-options">
        <span className="song-duration">{song.songLength}</span>
        <a className="song-link" href={song.spotifyUrl} target="_blank" rel="nofollow noreferrer">
          <i className="fab fa-spotify"></i>
        </a>
      </div>

    </article>
  );
};

const mapStateToProps = (state) => ({
  allSongs: state.songs.allSongs,
  actualSong: state.songs.actualSong
});
const mapDispatchToProps = (dispatch) => {
  return {
    getActualSong: (id, allSongs) => dispatch(selectedSong(id, allSongs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
