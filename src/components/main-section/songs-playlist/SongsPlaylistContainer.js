import { connect } from 'react-redux';
import SongItem from '../songs-playlist/songs-item/SongsItem'

const SongsPlaylistContainer = ( {allSongs} ) => {
    return (
        <div className="playlist-container">
            { allSongs.map((song)=>{
                return <SongItem song={song} />
            })}
        </div>
    )   
}

const mapStateToProps = state => ({
    allSongs: state.songs.allSongs,
});

export default connect(mapStateToProps)(SongsPlaylistContainer);