import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className="dashboard__body">
            <h3>Dashboard</h3>
            <h6>/dashboard</h6>
            <section className="dashboard__header">
                <img src="/images/dashboard__hero.png"/>
                <h4>Welcome back Jean-Christian!</h4>
                <p>You can here add an invoice, a company and some contacts</p>
            </section>
            <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;