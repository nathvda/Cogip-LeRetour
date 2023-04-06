import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Contact = () => {
    const {id} = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        axios.get(`https://cogip.jonathan-manes.be/get-contact/${id}`)
        .then(res => setContact(res.data.contact));
    })

    return (
        <>
        <Header/>
        <main>
        {contact.name}
        </main>
        <Footer/>
        </>
    );
};

export default Contact;