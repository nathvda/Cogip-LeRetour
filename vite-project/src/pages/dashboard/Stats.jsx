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
        <>
            <section><h4>Statistics</h4>
            <div className="dashboard__stats">
                <div><span>{fullinvoices.length}</span>
                invoices</div>
                <div><span>{fullcontacts.length}</span>
                contacts</div>
                <div><span>{fullcompanies.length}</span>
                companies</div>
            
            </div></section>

            <section><h4>Last contacts</h4>
            <div className="table__container">
                <table><thead><tr><th>Name</th>
                <th>Phone</th>
                <th>Email</th></tr></thead>
                <tbody>
                {
                allcontacts.map(e => (
                    <tr><td>{e.name}</td><td>{e.phone}</td><td>{e.email}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>

            <section><h4>Last invoices</h4>
            <div className="table__container">
                <table><thead><tr><th>Invoice number</th>
                <th>Dates</th>
                <th>Company</th></tr></thead>
                <tbody>
                {
                allinvoices.map(e => (
                    <tr><td>{e.ref}</td><td>{e.created_at}</td><td>{e.name}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>

            <section>
                <h4>Last companies</h4>
            <div className="table__container">
                <table><thead><tr><th>Name</th>
                <th>TVA</th>
                <th>Country</th></tr></thead>
                <tbody>
                {
                allcompanies.map(e => (
                    <tr><td>{e.name}</td><td>{e.tva}</td><td>{e.country}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>
        </>
    );
};

export default Stats;