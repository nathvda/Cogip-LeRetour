import React from 'react';
import {Link} from 'react-router-dom';
import LoginAndSignUp from './LoginAndSignUp';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <Link to="/home"><img src="/public/images/logo_cogip.png" alt="cogip logo" /></Link>
            <Navigation/>
            <LoginAndSignUp/>
        </header>
    );
};

export default Header;