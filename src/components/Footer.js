import { connect } from 'react-redux';
import VanderaBack from '../assets/images/img-vandera/vandera-back.png';

const Footer = ({ actualSong }) => {
    return (
        <footer id="contacto" className={`block block--footer ${actualSong && `is-player-active`} ${actualSong ? actualSong.bannerBg : "block--gradient"}`}>
            <div className="container">
                <div className="block__content">
                    <h4 className="title title--border">Contacto</h4>
                    <ul className="block__list">
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@vandera.com.ar">info@vandera.com.ar</a>
                        </li>
                        <li>
                            <i className="fab fa-instagram"></i>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vanderacarlos">@vanderacarlos</a>
                        </li>
                    </ul>
                    <div className="block__bottom">
                        <p>Copyright © 2021 Vandera</p>
                        <div className="social social--white">
                            <a href="https://facebook.com/vanderaw" target="_blank" rel="nofollow noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>    
                            <a href="https://twitter.com/vanderacarlos" target="_blank" rel="nofollow noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>   
                            <a href="https://instagram.com/vanderacarlos" target="_blank" rel="nofollow noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>   
                            <a href="https://youtube.com/channel/UCilRAmlq5LBcllREXS5lVJQ" target="_blank" rel="nofollow noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>   
                        </div>
                    </div>
                </div>
            </div>
            <img className="block__img" src={VanderaBack} alt=""/>
        </footer>
    )   
}
const mapStateToProps = state => ({
    actualSong: state.songs.actualSong
});

export default connect(mapStateToProps)(Footer);