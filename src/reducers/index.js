import { combineReducers } from 'redux';
import songsReducers from './reducers';


export default combineReducers({
     songs: songsReducers,
})
