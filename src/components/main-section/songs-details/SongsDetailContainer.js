import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Lyrics from './songs-lyrics-extras/Lyrics';
import Credits from './songs-lyrics-extras/Credits';
import Extras from './songs-lyrics-extras/Extras';


const SongsDetailContainer = ({ actualSong }) => {

    const [transitionEnable, setTransitionEnable] = useState(false);

    useEffect(()=>{

        testTransition();

    },[actualSong])

    const testTransition = () => {
        setTransitionEnable(true);
    }
  
    return (
        <CSSTransition
                in={transitionEnable}
                timeout={2000}
                classNames={{
                  appear:"example-appear",
                  appearActive:"example-appear-active",

                  enter:"example-enter",
                  enterActive:"example-enter-active",
                  enterDone:"example-enter-done",

                  exit:"example-exit",
                  exitActive:"example-exit-active",
                  exitDone:"example-exit-done",
                }}
              >
        <div className='song-detail-container'>
            <div className='options-container'>
                <NavLink exact to="/" className='options-button' activeClassName="options-active">Lyrics</NavLink>
                <NavLink to="/credits" className='options-button' activeClassName="options-active">Credits</NavLink>
                <NavLink to="/extras" className='options-button' activeClassName="options-active">Extras</NavLink>
            </div>
            
            <div className='detail-container'>
                  {/* <AnimatedSwitch
                  atEnter={{ opacity: 0.5 }}
                  atLeave={{ opacity: 0.5 }}
                  atActive={{ opacity: 1 }}
                  className="switch-wrapper"
                  >
                      <Route exact path="/" component={ Lyrics } />   
                      <Route path="/credits" component={ Credits } />   
                      <Route path="/extras" component={ Extras } />
                  </AnimatedSwitch> */}

                  <Route render={({location}) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={450}
                      classNames="fade"
                      >
                      <Switch location={location}>
                        <Route exact path="/" component={ Lyrics } />   
                        <Route path="/credits" component={ Credits } />   
                        <Route path="/extras" component={ Extras } />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
        )} />
              
            </div>
        </div>
        </CSSTransition>
    )   
}


const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
});

export default connect(mapStateToProps)(SongsDetailContainer);

