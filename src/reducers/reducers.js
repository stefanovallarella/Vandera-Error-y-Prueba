import { 
    EXAMPLE_TYPE,
    GET_ACTUAL_SONG
} from '../actions/types'

import continuarM from '../design/img-manchas/continuar-manchas.png';
import grados180M from '../design/img-manchas/180grados-manchas.png';
import asiEsM from '../design/img-manchas/asi-es-manchas.png';
import caeLaParedM from '../design/img-manchas/cae-la-pared-manchas.png';
import errorYPruebaM from '../design/img-manchas/error-y-prueba-manchas.png';
import estoyBienM from '../design/img-manchas/estoy-bien-manchas.png';
import llamadasPerdidasM from '../design/img-manchas/llamadas-perdidas-manchas.png';
import superLentoM from '../design/img-manchas/super-lento-manchas.png';
import vietnamM from '../design/img-manchas/vietnam-manchas.png';

import continuarImg from '../design/img-vandera/continuar.png';
import grados180Img from '../design/img-vandera/180-grados.png';
import asiEsImg from '../design/img-vandera/asi-es.png';
import caeLaParedImg from '../design/img-vandera/cae-la-pared.png';
import errorYPruebaImg from '../design/img-vandera/error-y-prueba.png';
import estoyBienImg from '../design/img-vandera/estoy-bien.png';
import llamadasPerdidasImg from '../design/img-vandera/llamadas-perdidas.png';
import superLentoImg from '../design/img-vandera/super-lento.png';
import vietnamImg from '../design/img-vandera/vietnam.png';


const initialState = {
    allSongs: [
        {
            id: 1,
            title: "Continuar", 	
            songName: "1. CONTINUAR",
            mainSectionPic: continuarImg,
            mainSectionBg: continuarM
        },
        {
            id: 2,
            title: "180 Grados",
            songName: "2. 180 GRADOS",
            mainSectionPic: grados180Img,
            mainSectionBg: grados180M
        },  
        {
            id: 3,
            title: "Así es",
            songName: "3. ASÍ ES",
            mainSectionPic: asiEsImg,
            mainSectionBg: asiEsM
        },   
        {
            id: 4,
            title: "Cae la pared",
            songName: "4. CAE LA PARED",
            mainSectionPic: caeLaParedImg,
            mainSectionBg: caeLaParedM
        },  
        {
            id: 5,
            title: "Error y Prueba",
            songName: "5. ERROR Y PRUEBA",
            mainSectionPic: errorYPruebaImg,
            mainSectionBg: errorYPruebaM
        },   
        {
            id: 6,
            title: "Estoy bien",
            songName: "6. ESTOY BIEN",
            mainSectionPic: estoyBienImg,
            mainSectionBg: estoyBienM
        },    
        {
            id: 7,
            title: "Llamadas perdidas",
            songName: "7. LLAMADAS PERDIDAS",
            mainSectionPic: llamadasPerdidasImg,
            mainSectionBg: llamadasPerdidasM
        },   
        {
            id: 8,
            title: "Super lento",
            songName: "8. SUPER LENTO",
            mainSectionPic: superLentoImg,
            mainSectionBg: superLentoM
        },
        {
            id: 9,
            title: "Vietnam",
            songName: "9. VIETNAM",
            mainSectionPic: vietnamImg,
            mainSectionBg: vietnamM
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