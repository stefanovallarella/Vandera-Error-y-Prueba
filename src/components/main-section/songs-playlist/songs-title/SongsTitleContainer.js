import { useEffect } from 'react';
import { connect } from 'react-redux';

import SongsTitle from './SongsTitle';

const SongsTitleContainer = ({ actualSong }) => {

    useEffect(()=>{

    },[actualSong])

    return (
        <SongsTitle title={actualSong.title} />
    )   
}



const mapStateToProps = state => ({

    actualSong: state.reducers.actualSong
  
})
  
export default connect(mapStateToProps)(SongsTitleContainer);
