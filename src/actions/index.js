import { GET_ALL_SONGS, GET_ACTUAL_SONG } from './types';

export const selectedSong = (id, allSongs) => dispatch => {
	allSongs.forEach(song => {
		if(song.id === id){
			if(song.playing === true){
				let singleSong = song;
				dispatch({
					type: GET_ACTUAL_SONG,
					payload: singleSong
				});
			}else{
			song.playing = !song.playing;
			
			let singleSong = song;
			dispatch({
					type: GET_ACTUAL_SONG,
					payload: singleSong
				})
			}
			/* return singleSong; */
		}
	})
}

export const pauseActualSong = (id, actualSong) => dispatch => {
	if(actualSong.id === id) {
		const newActualSong = actualSong;
		newActualSong.playing = false;
		dispatch({
			type: GET_ACTUAL_SONG,
			payload: newActualSong
		});
	}
}

export const pauseAllSongs = (id, allSongs) => dispatch => {
	const songId = id;
	const allPausedSongs = allSongs.map(song => {
		if(songId !== song.id) {
			return song.playing = false;
		} else {
			return song.playing = true;
		}
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