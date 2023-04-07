import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="homepage__navigation">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/invoices">Invoices</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
    );
};

export default Navigation;