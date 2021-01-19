import { useEffect } from 'react';
import { connect } from 'react-redux';

const Lyrics = ({ actualSong }) => {

    useEffect(()=>{

    })

    return (
        
        <div>{actualSong.lyrics}</div>
        


    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(Lyrics);
