import { EXAMPLE_TYPE } from './types';



const allSongs = [
    {
			id: 1,
			title: "Continuar", 	
			songName: "1. CONTINUAR"
    },
    {
			id: 2,
			title: "180 Grados",
			songName: "2. 180 GRADOS"	
		},  
		{
			id: 3,
			title: "Así es",
			songName: "3. ASÍ ES"	
		},   
		{
			id: 4,
			title: "Cae la pared",
			songName: "4. CAE LA PARED"	
		},  
		{
			id: 5,
			title: "Error y Prueba",
			songName: "5. ERROR Y PRUEBA"	
		},   
		{
			id: 6,
			title: "Estoy bien",
			songName: "6. ESTOY BIEN"	
		},    
		{
			id: 7,
			title: "Llamadas perdidas",
			songName: "7. LLAMADAS PERDIDAS"	
		},   
		{
			id: 8,
			title: "Super lento",
			songName: "8. SUPER LENTO"	
		},
		{
			id: 9,
			title: "Vietnam",
			songName: "9. VIETNAM"	
    },
]





export const selectedSong = (id) => dispatch => {

		allSongs.forEach(song => {
			if(song.id === id){
	
				let singleSong = song;

				dispatch({
					type: EXAMPLE_TYPE,
					payload: singleSong
				});
			}
			
		})



}