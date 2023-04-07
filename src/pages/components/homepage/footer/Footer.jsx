import React from 'react';
import Copyright from './Copyright';
import FooterNavigation from './FooterNavigation';
import Informations from './Informations';

const Footer = () => {
    return (
        <footer>
            <div className="footer__partOne">
            <img className="logo" src="/public/images/logo_cogip.png" alt="" />
            <Informations/>
            </div>
            <FooterNavigation/>
        </footer>
    );
};

export default Footer;