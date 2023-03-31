import React from 'react';
import LoginAndSignUp from './LoginAndSignUp';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <img src="/images/logo_cogip.png" alt="cogip logo" />
            <Navigation/>
            <LoginAndSignUp/>
        </header>
    );
};

export default Header;