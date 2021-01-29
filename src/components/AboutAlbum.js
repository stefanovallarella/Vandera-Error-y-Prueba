import { connect } from 'react-redux';
import mainM from '../assets/images/img-manchas/error-y-prueba-manchas.png';
import AboutImage1 from '../assets/images/about/2.jpeg';
import AboutImage2 from '../assets/images/about/21.png';
import AboutImage3 from '../assets/images/about/22.jpeg';
import AboutImage4 from '../assets/images/about/23.png';
import AboutImage5 from '../assets/images/about/pc.jpg';

const AboutAlbum = ({actualSong}) => {
    return (
        <section className="block block--about">
            <div className="container">

                <div className="block__content">
                    <h3 className="title title--border">Sobre el álbum</h3>
                    <div className="block__txt">
                        <p>Es un disco realizado de una forma mas natural, buscando la canción en la primera o segunda toma de Vox y dejando que la misma música sugiera los arreglos y la instrumentación. Como si se estuviera tocando en vivo y sin tiempo de revisar demasiado. Todos las versiones de las canciones son las primeras ideas de las mismas. Todo estas decisiones fueron dandole al álbum un color y una textura particular. Esto no lo hace ni mejor ni peor, solo lo describe en su gestación.</p>
                        <p>"Errar es humano" se dice que es intrínseco a la naturaleza humana el equivocarse, por lo que hay que aceptar los errores, y aprender de ellos para evitar que se repitan. En la música el error es el acierto y viceversa</p>
                    </div>
                </div>

                <div className="gallery">
                    <a href={AboutImage1} className="gallery__item">
                        <img src={AboutImage1} alt=""/>
                    </a>
                    <a href={AboutImage2} className="gallery__item">
                        <img src={AboutImage2} alt=""/>
                    </a>
                    <a href={AboutImage3} className="gallery__item">
                        <img src={AboutImage3} alt=""/>
                    </a>
                    <a href={AboutImage4} className="gallery__item">
                        <img src={AboutImage4} alt=""/>
                    </a>
                    <a href={AboutImage5} className="gallery__item">
                        <img src={AboutImage5} alt=""/>
                    </a>
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