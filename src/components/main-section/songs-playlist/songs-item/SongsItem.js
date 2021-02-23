import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  selectedSong,
  pauseAllSongs,
  pauseActualSong,
} from "../../../../actions/index";

const SongItem = ({
  song,
  allSongs,
  getActualSong,
  getAllPausedSongs,
  actualSong,
  setPauseActualSong,
  sameSong,
}) => {
  const [button, setButton] = useState("play");

  const toggleSingle = () => {
    if (button === "play" && song.id === actualSong.id) {
      setButton("pause");
    } else {
      setButton("play");
    }
  };

  const togglePlay = (id) => {
    if (button === "play") {
      getActualSong(id, allSongs);
      getAllPausedSongs(id, allSongs);
    } else {
      setPauseActualSong(id, actualSong);
    }
  };

  useEffect(() => {
    if (actualSong.playing && actualSong.title === song.title) {
      setButton("pause");
    } else {
      setButton("play");
    }
  }, [actualSong, allSongs]);

  return (
    <article className="song-container">
      <a href={song.spotifyUrl} target="_blank" rel="nofollow noreferrer" className="song-name">
        <i className="fab fa-spotify"></i>
        <strong>{song.title}</strong>
      </a>
      
      <div className="song-options">
        <span className="song-duration">{song.songLength}</span>
        <a className="song-link" href={song.spotifyUrl} target="_blank" rel="nofollow noreferrer"></a>

        <button
          className="play-button"
          onClick={() => {
            togglePlay(song.id);
            toggleSingle();
          }}
        >
          <i className={`fas fa-${button}`}></i>
        </button>

      </div>

    </article>
  );
};

const mapStateToProps = (state) => ({
  allSongs: state.songs.allSongs,
  actualSong: state.songs.actualSong,
  sameSong: state.songs.sameSong,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getActualSong: (id, allSongs) => dispatch(selectedSong(id, allSongs)),
    setPauseActualSong: (id, actualSong) =>
      dispatch(pauseActualSong(id, actualSong)),
    getAllPausedSongs: (id, allSongs) => dispatch(pauseAllSongs(id, allSongs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
