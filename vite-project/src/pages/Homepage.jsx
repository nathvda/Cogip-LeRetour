import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Homepage = () => {

    const [contacts, setContacts] = useState([])
    const [invoices, setInvoices] = useState([])
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-latest-invoices')
        .then(res => setInvoices(res.data.invoices))

        axios.get('https://cogip.jonathan-manes.be/get-latest-contacts')
        .then(res => setContacts(res.data.contacts))

        axios.get('https://cogip.jonathan-manes.be/get-latest-companies')
        .then(res => setCompanies(res.data.companies))
}, [])


    return (
        <>
        <Header/>
        <section className="hero__wrapper hero__wrapper--upper"><h1>Manage your customers and invoices easily</h1>
        <img src="/images/hero_one.png"/>
        </section>
        <main>
        <h2>Last Invoices</h2>
        <table><thead><tr>
        <th>Invoice number</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {invoices.map((e,index) => 
        <tr>
            <td>{e.ref}</td> <td>{e.id_company}</td> <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        <h2>Last Contacts</h2>
        <table><thead><tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Mail</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {contacts.map((e,index) => 
        <tr>
            <td>{e.name}</td> 
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>{e.company_id}</td>
            <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        <h2>Last Companies</h2> 
        <table><thead><tr>
        <th>Name</th>
        <th>TVA</th>
        <th>Country</th>
        <th>Type</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {contacts.map((e,index) => 
        <tr>
            <td>{e.name}</td> 
            <td>{e.tva}</td>
            <td>{e.country}</td>
            <td>{e.type_id}</td>
            <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        </main>
        <section className="hero__wrapper hero__wrapper--lower"><h2>Work better in your company</h2>
        <img src="/images/hero_two.png"/>
        </section>
        <Footer/>
        </>
    );
};

export default Homepage;