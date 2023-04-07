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
        try{axios.get(`https://cogip.jonathan-manes.be/get-invoice/${id}`)
        .then(res => setInvoice(res.data.invoice));
    } catch (e) {
        console.log(e);
    }
    },[])

    return (
        <>
        <Header/>
        <main>
        <h2 className="title--decorated">{invoice.ref}</h2>
        <p className="individual__content">
            <span><b>Reference</b>:{invoice.ref}</span>
            <span><b>Company</b>:{invoice.company}</span>
            <span><b>Created at</b>:{invoice.created_at}</span>
            </p>
        </main>
        <Footer/>
        </>
    );
};

export default Invoice;