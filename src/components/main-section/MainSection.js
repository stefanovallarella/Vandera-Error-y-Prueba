import React from 'react';
import '../../styles/main-section.css';

import SongsPlaylistContainer from '../main-section/songs-playlist/SongsPlaylistContainer';
import SongsTitleContainer from '../main-section/songs-playlist/songs-title/SongsTitleContainer';

import vanderasolo from '../../design/vanderasolo.png';

function MainSection() {

    return (
            <div className='background'>
                <div className='container'>

                    <div className="block-container">
                        <div className='container-song-title'>
                            <div className='container-title'>
                                <SongsTitleContainer/>
                            </div>
                            <div className='container-songs'>
                                <SongsPlaylistContainer />
                            </div>
                        </div>
                    </div>


                    <div>
                        <img src={vanderasolo} alt='Vandera Solo'/>
                    </div>
                </div>
            </div>
    )   

}


export default MainSection;



