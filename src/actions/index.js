import { GET_ALL_SONGS, GET_ACTUAL_SONG } from './types';

export const selectedSong = (id, allSongs) => dispatch => {
	allSongs.forEach(song => {
		if(song.id === id){
		
			song.playing = !song.playing;
			
			let singleSong = song;

			dispatch({
				type: GET_ACTUAL_SONG,
				payload: singleSong
			});
			/* return singleSong; */
		}
	})
}

export const pauseAllSongs = (allSongs) => dispatch => {
	const allPausedSongs = allSongs.map(song => {
		return song.playing = false;
		
	})
	dispatch({
		type: GET_ALL_SONGS,
		payload: allPausedSongs
	});
}



/* export const nextSong = (actualSong, allSongs) => dispatch => {

	let nextSongId = actualSong.id + 1;

	const nextSong = allSongs.find((song) => {

		return song.id = nextSongId;

	})

	console.log(nextSong);


		dispatch({
			type: GET_ACTUAL_SONG,
			payload: nextSong
		});
	
} */