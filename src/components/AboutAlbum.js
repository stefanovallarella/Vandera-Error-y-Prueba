import { connect } from 'react-redux';
import mainM from '../design/img-manchas/error-y-prueba-manchas.png';

const AboutAlbum = ({actualSong}) => {
    return (
        <section className="block block--about">
            <div className="container">

                <div className="gallery">
                    {/* <a href="/" className="gallery__item" style={{background: 'red'}}></a>
                    <a href="/" className="gallery__item" style={{background: 'yellow'}}></a>
                    <a href="/" className="gallery__item" style={{background: 'yellow'}}></a>
                    <a href="/" className="gallery__item" style={{background: 'red'}}></a>
                    <a href="/" className="gallery__item" style={{background: 'blue'}}></a> */}
                </div>
                
                <div className="block__content">
                    <h3 className="title title--border">Sobre el disco</h3>
                    <div className="block__txt">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut scelerisque turpis. Duis mauris augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut scelerisque turpis. Duis mauris augue.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut scelerisque turpis. Duis mauris augue Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            </div>

            <div className="block__bg"
                style={{
                backgroundImage: `url(${actualSong.mainSectionBg ? actualSong.mainSectionBg : mainM })`
                }}
            ></div>
        </section>
    )   
}

const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
});
export default connect(mapStateToProps)(AboutAlbum);