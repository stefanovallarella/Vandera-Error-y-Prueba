import logoSpotify from '../assets/images/img/logo-spotify.png'
import logoYTMusic from '../assets/images/img/logo-yt-music.png'
import logoAppleMusic from '../assets/images/img/logo-apple-music.png'
import logoDeezer from '../assets/images/img/logo-deezer.png'
import logoSoundcloud from '../assets/images/img/logo-soundcloud.png'
import logoAmazon from '../assets/images/img/logo-amazon.png'

const SocialBanner = () => {
    return (
        <section className="block block--bottom block--gradient block--padding">
            <div className="container">
                <p className="title title--lg title--uppercase">Escuchalo en</p>
                <div className="grid grid--3">
                    <a href="https://open.spotify.com/album/6vbl9W1WohxjkZEjlWXswc?si=5wTMMvyEToG0qKchVcTUlg" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoSpotify} alt="Spotify" />
                    </a>
                    <a href="https://music.youtube.com/playlist?list=OLAK5uy_mF3XRAVVb7wibgmtEovXAtDyO2S7vmU5I" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoYTMusic} alt="Youtube Music" />
                    </a>
                    <a href="https://music.apple.com/az/album/error-y-prueba/1542215807" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoAppleMusic} alt="Apple Music" />
                    </a>
                    <a href="https://www.deezer.com/en/album/189089762" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoDeezer} alt="Deezer" />
                    </a>
                    <a href="https://soundcloud.com/vanderaofficial/sets/error-y-prueba" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoSoundcloud} alt="Soundcloud" />
                    </a>
                    <a href="https://music.amazon.com/albums/B08P689SW8?do=play&ref=dm_ws_dp_ald_bb_phfa_xx_xx_xx" target="_blank" rel="nofollow noreferrer" className="logo">
                        <img src={logoAmazon} alt="Amazon Music" />
                    </a>
                </div>
            </div>
        </section>
    )   
}

export default SocialBanner;