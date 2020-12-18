import React from 'react';
import '../styles/header.css';
import LogoVandera from '../design/img/vanderalogo.svg';


function Header() {

    return (
            <div class='header-container'>
                <div className="logo-container">
                    <img className="header-logo" src={LogoVandera} alt="logo vandera"/>
                </div>


                <div className="link-redes-container">
                    <div className="link-container">
                        <a href="#">SOBRE EL DISCO</a>
                        <a href="#">CONTACTO</a>
                    </div>

                    <div className="redes-container">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>    
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>   
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>   
                        <a href="#">
                            <i class="fab fa-youtube"></i>
                        </a>   
                    </div>
                </div>
            </div>
    )   
}

export default Header;



