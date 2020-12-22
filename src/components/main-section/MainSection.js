import SongsPlaylistContainer from '../main-section/songs-playlist/SongsPlaylistContainer';
import SongsTitleContainer from '../main-section/songs-playlist/songs-title/SongsTitleContainer';
import mainImg from '../../design/vanderasolo.png';

const MainSection = () => {
    return (
        <section className="block block--hero">
            <div className="container">

                <div className="block__content">

                    <div className='container-song-title'>

                        <div className='container-title'>
                            <SongsTitleContainer/>
                        </div>

                        <div className='container-songs'>
                            <SongsPlaylistContainer />
                        </div>
                        
                    </div>

                </div>

                <img src={mainImg} alt='Vandera Solo' className="block__img" />

            </div>
        </section>
    )   
}
export default MainSection;