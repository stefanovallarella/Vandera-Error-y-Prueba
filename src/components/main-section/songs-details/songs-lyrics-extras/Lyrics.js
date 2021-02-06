import { useEffect } from 'react';
import { connect } from 'react-redux';

const Lyrics = ({ actualSong }) => {

    useEffect(()=>{

    })

    return (
        <div>
            <p>{actualSong.lyrics}</p>
        </div>
    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(Lyrics);
