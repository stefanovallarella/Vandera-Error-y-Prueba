import { 
    EXAMPLE_TYPE,
    GET_ACTUAL_SONG
} from '../actions/types'

const initialState = {
    allSongs: [
        {
            id: 1,
            title: "Continuar", 	
            songName: "1. CONTINUAR",
            mainSectionPic: 'continuar.png'
        },
        {
            id: 2,
            title: "180 Grados",
            songName: "2. 180 GRADOS",
            mainSectionPic: '180-grados.png'	
        },  
        {
            id: 3,
            title: "Así es",
            songName: "3. ASÍ ES",
            mainSectionPic: 'asi-es.png'	
        },   
        {
            id: 4,
            title: "Cae la pared",
            songName: "4. CAE LA PARED",
            mainSectionPic: 'cae-la-pared.png'	
        },  
        {
            id: 5,
            title: "Error y Prueba",
            songName: "5. ERROR Y PRUEBA",
            mainSectionPic: 'error-y-prueba.png'	
        },   
        {
            id: 6,
            title: "Estoy bien",
            songName: "6. ESTOY BIEN",
            mainSectionPic: 'estoy-bien.png'	
        },    
        {
            id: 7,
            title: "Llamadas perdidas",
            songName: "7. LLAMADAS PERDIDAS",
            mainSectionPic: 'llamadas-perdidas.png'	
        },   
        {
            id: 8,
            title: "Super lento",
            songName: "8. SUPER LENTO",
            mainSectionPic: 'super-lento.png'	
        },
        {
            id: 9,
            title: "Vietnam",
            songName: "9. VIETNAM",
            mainSectionPic: 'vietnam.png'	
        }
    ],
    actualSong: {}
};


const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTUAL_SONG:
            return {
                ...state,
                actualSong: action.payload,
            };
        default:
            return state;
    }
}

export default songsReducer;