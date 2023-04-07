import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="/public/images/jeanchris.png" alt="Your profile picture"/>
                <h2 className="sidebar__title">Jean Christian Ranu</h2>
            </div> 
           <div className="sidebar__links">
            <NavLink to="./">
            Dashboard
            </NavLink>
            <NavLink to="./invoices">
            Invoices
            </NavLink>
            <NavLink to="./companies">
            Companies
            </NavLink>
            <NavLink to="./contacts">
            Contacts
            </NavLink>
            </div>
            <div className="sidebar__bottom">
                <img src="/public/images/jeanchris.png" alt="Your profile picture"/>
                <form action="" method="post"><button type="submit">Logout</button></form> 
            </div> 
        </div>
    );
};

export default Sidebar;