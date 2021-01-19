import { useEffect } from 'react';
import { connect } from 'react-redux';

const Extras = ({ actualSong }) => {

    useEffect(()=>{

    })

    return (
        
        <div><p>extras</p></div>



    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
})
  
export default connect(mapStateToProps)(Extras);
