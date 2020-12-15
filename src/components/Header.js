import React from 'react';
import '../styles/header.css';
import LogoVandera from '../design/img/vanderalogo.svg';


function Header() {

    return (
            <div class='header-container'>
                <div className="logo-container">
                    <img className="header-logo" src={LogoVandera} alt="logo vandera"/>
                </div>

                <div className="link-container">
                    <p class='pepito'>HEADER</p>
                </div>
            </div>
    )   
}

export default Header;



