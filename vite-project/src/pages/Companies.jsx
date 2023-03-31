import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Companies = () => {

    return (
        <>
        <Header/>
        <main>  
            Companies infos
        </main>
        <Footer/>
        
        </>
    );
};

export default Companies;