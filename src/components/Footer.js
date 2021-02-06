import VanderaBack from '../assets/images/img-vandera/vandera-back.png';

const Footer = () => {
    return (
        <footer id="contacto" className="block block--footer block--gradient">
            <div className="container">
                <div className="block__content">
                    <h4 class="title title--border">Contacto</h4>
                    <ul className="block__list">
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@vandera.com.ar">info@vandera.com.ar</a>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@vandera.com.ar">info@vandera.com.ar</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+543415532667">+54 341 5532667</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+543415532667">+54 341 5532667</a>
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
                <img className="block__img" src={VanderaBack} alt=""/>
            </div>
        </footer>
    )   
}
export default Footer;