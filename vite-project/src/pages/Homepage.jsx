import React from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Homepage = () => {
    return (
        <main>
        <Header/>
        <section className="hero__wrapper"><h1>Manage your customers and invoices easily</h1>
        <img src="/images/hero_one.png"/>
        </section>
        content
        <section className="hero__wrapper hero__wrapper--lower"><h2>Manage your customers and invoices easily</h2>
        <img src="/images/hero_two.png"/>
        </section>
        <Footer/>
        </main>
    );
};

export default Homepage;