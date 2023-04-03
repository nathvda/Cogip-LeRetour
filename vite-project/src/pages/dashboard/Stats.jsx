import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Stats = () => {
    const [allcontacts, setAllContacts] = useState([])
    const [allinvoices, setAllInvoices] = useState([])
    const [allcompanies, setAllCompanies] = useState([])
    const [fullcontacts, setFullContacts] = useState([])
    const [fullinvoices, setFullInvoices] = useState([])
    const [fullcompanies, setFullCompanies] = useState([])

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-latest-invoices')
        .then(res => setAllInvoices(res.data.invoices))

        axios.get('https://cogip.jonathan-manes.be/get-latest-contacts')
        .then(res => setAllContacts(res.data.contacts))

        axios.get('https://cogip.jonathan-manes.be/get-latest-companies')
        .then(res => setAllCompanies(res.data.companies))

        axios.get('https://cogip.jonathan-manes.be/get-invoices')
        .then(res => setFullInvoices(res.data.invoices))

        axios.get('https://cogip.jonathan-manes.be/get-contacts')
        .then(res => setFullContacts(res.data.contacts))

        axios.get('https://cogip.jonathan-manes.be/get-companies')
        .then(res => setFullCompanies(res.data.companies))
}, [])

    return (
        <div>
            <section><h4>Statistics</h4>
            <div className="dashboard__stats">
                <div>{fullinvoices.length}
                invoices</div>
                <div>{fullcontacts.length}
                contacts</div>
                <div>{fullcompanies.length}
                companies</div>
            
            </div></section> 
            <section><h4>Last invoices</h4>
            <div className="table__container">
               {
                all.invoices
               }
            </div></section>
        </div>
    );
};

export default Stats;