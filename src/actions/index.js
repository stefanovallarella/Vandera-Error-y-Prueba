import { EXAMPLE_TYPE, GET_ACTUAL_SONG } from './types';



const allSongs = [
	{
		id: 1,
		title: "Continuar", 	
		songName: "1. CONTINUAR",
		mainSectionPic: 'continuar.png',
		mainSectionBg: 'continuar-manchas.png'
	},
	{
		id: 2,
		title: "180 Grados",
		songName: "2. 180 GRADOS",
		mainSectionPic: '180-grados.png',
		mainSectionBg: '180grados-manchas.png'	
	},  
	{
		id: 3,
		title: "Así es",
		songName: "3. ASÍ ES",
		mainSectionPic: 'asi-es.png',
		mainSectionBg: 'asi-es-manchas.png'	
	},   
	{
		id: 4,
		title: "Cae la pared",
		songName: "4. CAE LA PARED",
		mainSectionPic: 'cae-la-pared.png',
		mainSectionBg: 'cae-la-pared-manchas.png'	
	},  
	{
		id: 5,
		title: "Error y Prueba",
		songName: "5. ERROR Y PRUEBA",
		mainSectionPic: 'error-y-prueba.png',
		mainSectionBg: 'error-y-prueba-manchas.png'	
	},   
	{
		id: 6,
		title: "Estoy bien",
		songName: "6. ESTOY BIEN",
		mainSectionPic: 'estoy-bien.png',
		mainSectionBg: 'estoy-bien-manchas.png'	
	},    
	{
		id: 7,
		title: "Llamadas perdidas",
		songName: "7. LLAMADAS PERDIDAS",
		mainSectionPic: 'llamadas-perdidas.png',
		mainSectionBg: 'llamadas-perdidas-manchas.png'	
	},   
	{
		id: 8,
		title: "Super lento",
		songName: "8. SUPER LENTO",
		mainSectionPic: 'super-lento.png',
		mainSectionBg: 'super-lento-manchas.png'	
	},
	{
		id: 9,
		title: "Vietnam",
		songName: "9. VIETNAM",
		mainSectionPic: 'vietnam.png',
		mainSectionBg: 'vietnam-manchas.png'	
	}
]





export const selectedSong = (id) => dispatch => {

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