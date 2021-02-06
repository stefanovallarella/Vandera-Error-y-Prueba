import { useEffect } from 'react';
import { connect } from 'react-redux';

const Credits = ({ actualSong }) => {

    useEffect(()=>{

    })

    return (
        
        <div>
            <p>{actualSong.credits}</p>
        </div>


    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(Credits);
