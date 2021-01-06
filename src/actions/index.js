import { EXAMPLE_TYPE, GET_ACTUAL_SONG } from './types';

export const selectedSong = (id, allSongs) => dispatch => {
	allSongs.forEach(song => {
		if(song.id === id){

			let singleSong = song;

			dispatch({
				type: GET_ACTUAL_SONG,
				payload: singleSong
			});
		}
	})
}