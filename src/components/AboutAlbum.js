
import GalleryWrapper from '../components/gallery/GalleryWrapper'
import { connect } from 'react-redux';
import mainM from '../assets/images/img-manchas/error-y-prueba-manchas.png';
import VanderaFirma from '../assets/images/img/firma-vandera.png';

const AboutAlbum = ({actualSong}) => {
    return (
        <section id="album" className="block block--about">
            <div className="container">

                <div className="block__content">
                    <h3 className="title title--border">Sobre el álbum</h3>
                    <div className="block__txt">
                        <p>Es un disco realizado de una forma mas natural, buscando la canción en la primera o segunda toma de Vox y dejando que la misma música sugiera los arreglos y la instrumentación. Como si se estuviera tocando en vivo y sin tiempo de revisar demasiado. Todos las versiones de las canciones son las primeras ideas de las mismas. Todo estas decisiones fueron dandole al álbum un color y una textura particular. Esto no lo hace ni mejor ni peor, solo lo describe en su gestación.</p>
                        <p>"Errar es humano" se dice que es intrínseco a la naturaleza humana el equivocarse, por lo que hay que aceptar los errores, y aprender de ellos para evitar que se repitan. En la música el error es el acierto y viceversa</p>
                    </div>
                    <div className="block__about">
                        <img src={VanderaFirma} alt=""/>
                        <p>Carlos Vandera</p>
                    </div>
                </div>

                <GalleryWrapper />

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