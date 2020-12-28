import { 
    EXAMPLE_TYPE
} from '../actions/types'

const initialState = {
    actualSong: {}
};


const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return {
                ...state,
                actualSong: action.payload,
            };
        default:
            return state;
    }
}

export default songsReducer;