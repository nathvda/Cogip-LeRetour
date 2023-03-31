import React from 'react';
import Copyright from './Copyright';
import FooterNavigation from './FooterNavigation';
import Informations from './Informations';

const Footer = () => {
    return (
        <footer>
            <img className="logo" src="/images/logo_cogip.png" alt="" />
            <Informations/>
            <FooterNavigation/>
        </footer>
    );
};

export default Footer;