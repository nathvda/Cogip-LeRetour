import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Invoice = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
        axios.get(`https://cogip.jonathan-manes.be/get-invoice/${id}`)
        .then(res => setInvoice(res.data.invoice));
    })

    return (
        <>
        <Header/>
        <main>
        {invoice.ref}
        </main>
        <Footer/>
        </>
    );
};

export default Invoice;