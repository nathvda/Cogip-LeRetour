import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Company = () => {
    const {id} = useParams();
    const [company, setCompany] = useState([]);
    const [contactsCompany, setContactsCompany] = useState([]);
    const [companyInvoices, setCompanyInvoice] = useState([]);

    useEffect(() => {
        axios.get(`https://cogip.jonathan-manes.be/get-company/${id}`)
        .then(res => setCompany(res.data.company));
        
        axios.get(`https://cogip.jonathan-manes.be/get-contacts/company/${id}`)
        .then(res => setContactsCompany(res.data.contacts));

        axios.get(`https://cogip.jonathan-manes.be//get-invoices/company/${id}`)
        .then(res => setCompanyInvoice(res.data.invoices));
    }, [])

    return (
        <>
        <Header/>
        <main>
        <h2 className="title--decorated">{company.name}</h2>
        <p className="individual__content">
            <span><b>Name</b>: {company.name}</span>
            <span><b>TVA</b>: {company.tva}</span>
            <span><b>Country</b>: {company.country}</span>
            <span><b>Type</b>: {(company.type == 1) ? "Supplier" : "Client"}</span>
            </p>

        <h2>Contact people</h2>
        <div className="contacts__wrapper">{contactsCompany.map(e => 
            <div className="people__card"><img src="/images/user1_bertram.webp"/><span>{e.name}</span></div>
            )
        }</div>

        <h2>Last invoices</h2>
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Invoice number</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {companyInvoices.map((e,index) => 
        <tr key={index}>
            <td>{e.ref}</td> <td>{e.name}</td> <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        </div>
        </main>
        <Footer/>
        </>
    );
};

export default Company;