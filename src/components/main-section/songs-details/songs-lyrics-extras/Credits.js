import { useEffect } from 'react';
import { connect } from 'react-redux';

const Credits = ({ actualSong }) => {

    useEffect(()=>{

    })

    return (
        
        <div>{actualSong.credits}</div>


    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(Credits);
