import LogoVandera from './LogoVandera.js';
import Social from './Social.js';

const Header = () => {
    return (
        <header className='header'>

            <div className="container">

                <LogoVandera />

                <div className="header__menu">

                    <nav className="header__nav">
                        <a href="/">Sobre el disco</a>
                        <a href="/">Contacto</a>
                    </nav>

                    <Social />

                </div>
            </div>
        </header>
    )   
}

export default Header;



