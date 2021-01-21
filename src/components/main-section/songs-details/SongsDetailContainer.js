import { useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Lyrics from './songs-lyrics-extras/Lyrics';
import Credits from './songs-lyrics-extras/Credits';
import Extras from './songs-lyrics-extras/Extras';


const SongsDetailContainer = () => {

    useEffect(()=>{

    })


    return (
        
        <div className='song-detail-container'>
            <div className='options-container'>
                <NavLink exact to="/" className='options-button' activeClassName="options-active">Lyrics</NavLink>
                <NavLink to="/credits" className='options-button' activeClassName="options-active">Credits</NavLink>
                <NavLink to="/extras" className='options-button' activeClassName="options-active">Extras</NavLink>
            </div>
            
            <div className='detail-container'>

                <AnimatedSwitch
                atEnter={{ opacity: 0.5 }}
                atLeave={{ opacity: 0.5 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
                >
                    <Route exact path="/" component={ Lyrics } />   
                    <Route path="/credits" component={ Credits } />   
                    <Route path="/extras" component={ Extras } />
                </AnimatedSwitch>

            </div>

        </div>


    )   
}


  
export default SongsDetailContainer;
