import { connect } from 'react-redux';
import SongItem from '../songs-playlist/songs-item/SongsItem'

const SongsPlaylistContainer = ( {allSongs} ) => {
    return (
        <div className="playlist-container">

            { allSongs.map((song)=>{
                return <SongItem song={song} />
            })}

            
        {/* <SongItem name="1. CONTINUAR" />
            <SongItem name="2. 180 GRADOS" />
            <SongItem name="3. ASÍ ES" />
            <SongItem name="4. CAE LA PARED" />
            <SongItem name="5. ERROR Y PRUEBA" />
            <SongItem name="6. ESTOY BIEN" />
            <SongItem name="7. LLAMADAS PERDIDAS" />
            <SongItem name="8. SUPER LENTO" />
            <SongItem name="9. VIETNAM" /> */}

        </div>
    )   
}

const mapStateToProps = state => ({

    allSongs: state.reducers.allSongs,

  });

export default connect(mapStateToProps)(SongsPlaylistContainer);