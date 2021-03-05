import { useEffect } from 'react';
import { connect } from 'react-redux';

const SongsTitle = ({ actualSong }) => {

    useEffect(()=>{
      
    },[actualSong])

    return (
        <div className="background">
          <h2 class="title title--border">
            {actualSong.title ? actualSong.title : "Error y Prueba"}
          </h2>
        </div>
    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(SongsTitle);
