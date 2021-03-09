import { NavLink, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Gallery from './Gallery';
import GalleryItems from '../../assets/gallery/Gallery';

const GalleryWrapper = () => {

    const [transitionEnable, setTransitionEnable] = useState(false);

    useEffect(()=>{

        testTransition();

    },[transitionEnable])

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
            <div class="gallery-wrapper">
                <div className='options-container'>
                    <NavLink exact to="/" className='options-button' activeClassName="options-active">Fotos</NavLink>
                    <NavLink to="/videos" className='options-button' activeClassName="options-active">Videos</NavLink>
                </div>
            
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={450}
                            classNames="fade"
                            >
                            <Switch location={location}>
                                <Route exact path="/" component={() => <Gallery gallery={GalleryItems} type="image" />} />
                                <Route exact path="/videos" component={() => <Gallery gallery={GalleryItems} type="video" />}/>   
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        </CSSTransition>
    )   
}

export default GalleryWrapper;

