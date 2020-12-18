import React from 'react';
import '../../../../styles/song-item.css';


function SongItem(props) {

    return (
            
            <article className='song-container'>
                <div className='song-name'><strong>{props.name}</strong></div>
                <div className='song-play-icon'>
                    <span>02:53</span>
                    <a href="#">
                        <i class="fas fa-play"></i>
                    </a>
                </div>
            </article>

    )   
}


export default SongItem;














