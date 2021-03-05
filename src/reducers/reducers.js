import {
  EXAMPLE_TYPE,
  GET_ACTUAL_SONG,
  GET_ALL_SONGS,
  LISTEN_SAME_SONG,
  PAUSE_LISTENED_SONG,
} from "../actions/types";

// Img manchas
import continuarM from "../assets/images/img-manchas/continuar-manchas.png";
import grados180M from "../assets/images/img-manchas/180grados-manchas.png";
import asiEsM from "../assets/images/img-manchas/asi-es-manchas.png";
import caeLaParedM from "../assets/images/img-manchas/cae-la-pared-manchas.png";
import errorYPruebaM from "../assets/images/img-manchas/error-y-prueba-manchas.png";
import estoyBienM from "../assets/images/img-manchas/estoy-bien-manchas.png";
import llamadasPerdidasM from "../assets/images/img-manchas/llamadas-perdidas-manchas.png";
import superLentoM from "../assets/images/img-manchas/super-lento-manchas.png";
import vietnamM from "../assets/images/img-manchas/vietnam-manchas.png";

// Img Vandera
import continuarImg from "../assets/images/img-vandera/continuar.png";
import grados180Img from "../assets/images/img-vandera/180-grados.png";
import asiEsImg from "../assets/images/img-vandera/asi-es.png";
import caeLaParedImg from "../assets/images/img-vandera/cae-la-pared.png";
import errorYPruebaImg from "../assets/images/img-vandera/error-y-prueba.png";
import estoyBienImg from "../assets/images/img-vandera/estoy-bien.png";
import llamadasPerdidasImg from "../assets/images/img-vandera/llamadas-perdidas.png";
import superLentoImg from "../assets/images/img-vandera/super-lento.png";
import vietnamImg from "../assets/images/img-vandera/vietnam.png";

// Audios
import continuarMP3 from "../assets/audios/continuar.mp3";
import grados180MP3 from "../assets/audios/180-grados.mp3";
import asiEsMP3 from "../assets/audios/asi-es.mp3";
import caeLaParedMP3 from "../assets/audios/cae-la-pared.mp3";
import errorYPruebaMP3 from "../assets/audios/error-y-prueba.mp3";
import estoyBienMP3 from "../assets/audios/estoy-bien.mp3";
import llamadasPerdidasMP3 from "../assets/audios/llamadas-perdidas.mp3";
import superLentoMP3 from "../assets/audios/super-lento.mp3";
import vietnamMP3 from "../assets/audios/vietnam.mp3";

// Lyrics

import Lyrics from "../assets/lyrics/Lyrics";
import Credits from "../assets/credits/Credits";
// Extras
import Extras from "../assets/extras/extras"


// Background classes for banners
import BannerBg from "../assets/banners-bg/banners-bg"


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
      extras: Extras.continuar,
      songLength: "2:56",
      bannerBg: BannerBg.continuar,
      spotifyUrl: 'https://open.spotify.com/track/5NahaNsEA4qopIjLqSrEPb?si=Ot2lRflQQcmOgSfWhMLk1Q'
    },
    {
      id: 2,
      title: "Super lento",
      songName: "2. SUPER LENTO",
      mainSectionPic: superLentoImg,
      mainSectionBg: superLentoM,
      mp3SongUrl: superLentoMP3,
      playing: false,
      lyrics: Lyrics.superLento,
      credits: Credits.superLento,
      extras: Extras.superLento,
      songLength: "3:10",
      bannerBg: BannerBg.superLento,
      spotifyUrl: 'https://open.spotify.com/track/6F3kwu7qIpv7kDCt1omkHo?si=Hs48EKN-RB-W9QyAm6USYA'
    },
    {
      id: 3,
      title: "180 Grados",
      songName: "3. 180 GRADOS",
      mainSectionPic: grados180Img,
      mainSectionBg: grados180M,
      mp3SongUrl: grados180MP3,
      playing: false,
      lyrics: Lyrics.grados180,
      credits: Credits.grados180,
      extras: Extras.grados180,
      songLength: "2:46",
      bannerBg: BannerBg.grados180,
      spotifyUrl: 'https://open.spotify.com/track/0opuZRB2wlpxkFxN0f0DKz?si=ZhzAQFXwRJ6oy0WhGUK3Bg'
    },
    {
      id: 4,
      title: "Así es",
      songName: "4. ASÍ ES",
      mainSectionPic: asiEsImg,
      mainSectionBg: asiEsM,
      mp3SongUrl: asiEsMP3,
      playing: false,
      lyrics: Lyrics.asiEs,
      credits: Credits.asiEs,
      extras: Extras.asiEs,
      songLength: "4:19",
      bannerBg: BannerBg.asiEs,
      spotifyUrl: 'https://open.spotify.com/track/0SPddgSEGvaS4Kbu4xnENW?si=7DYatSlQT0Ci466z3jmniA'
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
      credits: Credits.errorYPrueba,
      extras: Extras.errorYPrueba,
      songLength: "3:30",
      bannerBg: BannerBg.errorYPrueba,
      spotifyUrl: 'https://open.spotify.com/track/3WXDa3g8ihIBzaEPVi96Pl?si=R2jZexeURAa76oywqzYQ1A'
    },
    {
      id: 6,
      title: "Llamadas perdidas",
      songName: "6. LLAMADAS PERDIDAS",
      mainSectionPic: llamadasPerdidasImg,
      mainSectionBg: llamadasPerdidasM,
      mp3SongUrl: llamadasPerdidasMP3,
      playing: false,
      lyrics: Lyrics.llamadasPerdidas,
      credits: Credits.llamadasPerdidas,
      extras: Extras.llamadasPerdidas,
      songLength: "3:37",
      bannerBg: BannerBg.llamadasPerdidas,
      spotifyUrl: 'https://open.spotify.com/track/4Eco8aztDDybp8WwqLlIdB?si=AL8u0k17RuafZ1UNG_8Gug'
    },
    {
      id: 7,
      title: "Vietnam",
      songName: "7. VIETNAM",
      mainSectionPic: vietnamImg,
      mainSectionBg: vietnamM,
      mp3SongUrl: vietnamMP3,
      playing: false,
      lyrics: Lyrics.vietnam,
      credits: Credits.vietnam,
      extras: Extras.vietnam,
      songLength: "2:34",
      bannerBg: BannerBg.vietnam,
      spotifyUrl: 'https://open.spotify.com/track/5j9NYx9fzEZz3i98U49dsu?si=fYlp3kXqSDaj8UIp8TceXA'
    },
    {
      id: 8,
      title: "Cae la pared",
      songName: "8. CAE LA PARED",
      mainSectionPic: caeLaParedImg,
      mainSectionBg: caeLaParedM,
      mp3SongUrl: caeLaParedMP3,
      playing: false,
      lyrics: Lyrics.caeLaPared,
      credits: Credits.caeLaPared,
      extras: Extras.caeLaPared,
      songLength: "3:33",
      bannerBg: BannerBg.caeLaPared,
      spotifyUrl: 'https://open.spotify.com/track/0IeZBbADalbcpVFmSQPDvn?si=nd4G5-E4S7mImx1F5AsUlQ'
    },
    {
      id: 9,
      title: "Estoy bien",
      songName: "9. ESTOY BIEN",
      mainSectionPic: estoyBienImg,
      mainSectionBg: estoyBienM,
      mp3SongUrl: estoyBienMP3,
      playing: false,
      lyrics: Lyrics.estoyBien,
      credits: Credits.estoyBien,
      extras: Extras.estoyBien,
      songLength: "3:27",
      bannerBg: BannerBg.estoyBien,
      spotifyUrl: 'https://open.spotify.com/track/4Qfb9I402146bONkZlPoQh?si=9COo92RJRzOa_WRJyurpXg'
    },
  ],
  actualSong: "",
  sameSong: false,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTUAL_SONG:
      return {
        ...state,
        actualSong: action.payload,
      };
    /*     case PAUSE_LISTENED_SONG:
      return {
        ...state,
        listenedSong: action.payload,
      }; */
    default:
      return state;
  }
};

export default songsReducer;
