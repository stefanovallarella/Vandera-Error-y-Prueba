import { useDispatch, connect } from 'react-redux';
import { selectedSong } from '../../../../actions/index';




const SongItem = (props) => {
    
    
    const dispatch = useDispatch();
    
    const getSong = (id) => {
    
        props.getActualSong(id);

    }

    return (
        <article className="song-container">
            <div className="name"><strong>{props.song.songName}</strong></div>
            <div className="play-icon">
                <span>02:53</span>
                <button onClick={() => getSong(props.song.id)}>
                    <i className="fas fa-play"></i>
                </button>
            </div>
        </article>
    )   
}


const mapDispatchToProps = (dispatch) => {
    return{

      getActualSong: (id) => dispatch(selectedSong(id))

    }
  }

export default connect(null, mapDispatchToProps) (SongItem);
