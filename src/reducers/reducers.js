import { 
    EXAMPLE_TYPE,
    GET_ACTUAL_SONG,
    GET_ALL_SONGS
} from '../actions/types'

// Img manchas
import continuarM from '../assets/images/img-manchas/continuar-manchas.png';
import grados180M from '../assets/images/img-manchas/180grados-manchas.png';
import asiEsM from '../assets/images/img-manchas/asi-es-manchas.png';
import caeLaParedM from '../assets/images/img-manchas/cae-la-pared-manchas.png';
import errorYPruebaM from '../assets/images/img-manchas/error-y-prueba-manchas.png';
import estoyBienM from '../assets/images/img-manchas/estoy-bien-manchas.png';
import llamadasPerdidasM from '../assets/images/img-manchas/llamadas-perdidas-manchas.png';
import superLentoM from '../assets/images/img-manchas/super-lento-manchas.png';
import vietnamM from '../assets/images/img-manchas/vietnam-manchas.png';

// Img Vandera
import continuarImg from '../assets/images/img-vandera/continuar.png';
import grados180Img from '../assets/images/img-vandera/180-grados.png';
import asiEsImg from '../assets/images/img-vandera/asi-es.png';
import caeLaParedImg from '../assets/images/img-vandera/cae-la-pared.png';
import errorYPruebaImg from '../assets/images/img-vandera/error-y-prueba.png';
import estoyBienImg from '../assets/images/img-vandera/estoy-bien.png';
import llamadasPerdidasImg from '../assets/images/img-vandera/llamadas-perdidas.png';
import superLentoImg from '../assets/images/img-vandera/super-lento.png';
import vietnamImg from '../assets/images/img-vandera/vietnam.png';

// Audios
import continuarMP3 from '../assets/audios/continuar.mp3';
import grados180MP3 from '../assets/audios/180-grados.mp3';
import asiEsMP3 from '../assets/audios/asi-es.mp3';
import caeLaParedMP3 from '../assets/audios/cae-la-pared.mp3';
import errorYPruebaMP3 from '../assets/audios/error-y-prueba.mp3';
import estoyBienMP3 from '../assets/audios/estoy-bien.mp3';
import llamadasPerdidasMP3 from '../assets/audios/llamadas-perdidas.mp3';
import superLentoMP3 from '../assets/audios/super-lento.mp3';
import vietnamMP3 from '../assets/audios/vietnam.mp3';

// Lyrics

import Lyrics from '../assets/lyrics/Lyrics';
import Credits from '../assets/credits/Credits';



const initialState = {
    allSongs: [
        {
            id: 1,
            title: "Continuar", 	
            songName: "1. CONTINUAR",
            mainSectionPic: continuarImg,
            mainSectionBg: continuarM,
            mp3SongUrl: continuarMP3,
            playing: false,
            lyrics: Lyrics.continuar,
            credits: Credits.continuar,
        },
        {
            id: 2,
            title: "180 Grados",
            songName: "2. 180 GRADOS",
            mainSectionPic: grados180Img,
            mainSectionBg: grados180M,
            mp3SongUrl: grados180MP3,
            playing: false,
            lyrics: Lyrics.grados180,
            credits: Credits.grados180
        },  
        {
            id: 3,
            title: "Así es",
            songName: "3. ASÍ ES",
            mainSectionPic: asiEsImg,
            mainSectionBg: asiEsM,
            mp3SongUrl: asiEsMP3,
            playing: false,
            lyrics: Lyrics.asiEs,
            credits: Credits.asiEs
        },   
        {
            id: 4,
            title: "Cae la pared",
            songName: "4. CAE LA PARED",
            mainSectionPic: caeLaParedImg,
            mainSectionBg: caeLaParedM,
            mp3SongUrl: caeLaParedMP3,
            playing: false,
            lyrics: Lyrics.caeLaPared,
            credits: Credits.caeLaPared
        },  
        {
            id: 5,
            title: "Error y Prueba",
            songName: "5. ERROR Y PRUEBA",
            mainSectionPic: errorYPruebaImg,
            mainSectionBg: errorYPruebaM,
            mp3SongUrl: errorYPruebaMP3,
            playing: false,
            lyrics: Lyrics.errorYPrueba,
            credits: Credits.errorYPrueba
        },   
        {
            id: 6,
            title: "Estoy bien",
            songName: "6. ESTOY BIEN",
            mainSectionPic: estoyBienImg,
            mainSectionBg: estoyBienM,
            mp3SongUrl: estoyBienMP3,
            playing: false,
            lyrics: Lyrics.estoyBien,
            credits: Credits.estoyBien
        },    
        {
            id: 7,
            title: "Llamadas perdidas",
            songName: "7. LLAMADAS PERDIDAS",
            mainSectionPic: llamadasPerdidasImg,
            mainSectionBg: llamadasPerdidasM,
            mp3SongUrl: llamadasPerdidasMP3,
            playing: false,
            lyrics: Lyrics.llamadasPerdidas,
            credits: Credits.llamadasPerdidas
        },   
        {
            id: 8,
            title: "Super lento",
            songName: "8. SUPER LENTO",
            mainSectionPic: superLentoImg,
            mainSectionBg: superLentoM,
            mp3SongUrl: superLentoMP3,
            playing: false,
            lyrics: Lyrics.superLento,
            credits: Credits.superLento
        },
        {
            id: 9,
            title: "Vietnam",
            songName: "9. VIETNAM",
            mainSectionPic: vietnamImg,
            mainSectionBg: vietnamM,
            mp3SongUrl: vietnamMP3,
            playing: false,
            lyrics: Lyrics.vietnam,
            credits: Credits.vietnam
        }
    ],
    actualSong: {},
};


const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTUAL_SONG:
            return {
                ...state,
                actualSong: action.payload,
            };
/*      case GET_ALL_SONGS:
            return {
                ...state,
                allSongs: action.payload,
        }; */
        default:
            return state;
    }
}

export default songsReducer;