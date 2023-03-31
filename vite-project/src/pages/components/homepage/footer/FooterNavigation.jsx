import React from 'react';
import {Link} from 'react-router-dom';
import Copyright from './Copyright';

const FooterNavigation = () => {
    return (
        <nav>
          <Link to='/home'>Home</Link>  
          <Link to='/invoices'>Invoices</Link>  
          <Link to='/companies'>Companies</Link>  
          <Link to='/contacts'>Contacts</Link>  
          <Link to='/privacy'>Privacy Policy</Link> 
          <Copyright/> 
        </nav>
    );
};

export default FooterNavigation;