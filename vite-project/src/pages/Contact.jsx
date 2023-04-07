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
        try{
            axios.get(`https://cogip.jonathan-manes.be/get-contact/${id}`)
        .then(res => setContact(res.data.contact));
        } catch(e){
            console.log(e);
        }
    }, [id])

    return (
        <>
        <Header/>
        <main>
        <h2 className="title--decorated">{contact.name}</h2>
        <p className="individual__content">
            <span><b>Contact</b>: {contact.name}</span>
            <span><b>Phone</b>: {contact.phone}</span>
            <span><b>Email</b>: {contact.email}</span>
            <span><b>Company</b>: {contact['company']}</span>
        <img className="contact__img" src="/images/user1_bertram.webp"/>
        </p>
        </main>
        <Footer/>
        </>
    );
};

export default Contact;