import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Homepage = () => {

    const [allcontacts, setAllContacts] = useState([])
    const [allinvoices, setAllInvoices] = useState([])
    const [allcompanies, setAllCompanies] = useState([])

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-latest-invoices')
        .then(res => setAllInvoices(res.data.invoices))

        axios.get('https://cogip.jonathan-manes.be/get-latest-contacts')
        .then(res => setAllContacts(res.data.contacts))

        axios.get('https://cogip.jonathan-manes.be/get-latest-companies')
        .then(res => setAllCompanies(res.data.companies))
}, [])


    return (
        <>
        <Header/>
        <section className="hero__wrapper hero__wrapper--upper"><h1>Manage your customers and invoices easily</h1>
        <img src="/images/hero_one.png"/>
        </section>
        <main>
        <h2>Last invoices</h2>
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Invoice number</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {allinvoices.map((e,index) => 
        <tr key={index}>
            <td>{e.ref}</td> <td>{e.name}</td> <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        </div>
        <img className="project" src="/images/project.png"/>
        <h2>Last contacts</h2>
        <div className="homepage__table-container"><table className="homepage__table"><thead><tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Mail</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {allcontacts.map((e,index) => 
        <tr>
            <td>{e.name}</td> 
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>{e.company.name}</td>
            <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        </div>
        <img className="lightbulb" src="/images/bulb.png"/>
        <h2>Last companies</h2> 
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Name</th>
        <th>TVA</th>
        <th>Country</th>
        <th>Type</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {allcompanies.map((e,index) => 
        <tr>
            <td>{e.name}</td> 
            <td>{e.tva}</td>
            <td>{e.country}</td>
            <td>{`${(e.type_id === 1) ? "Client" : "Supplier"}`}</td>
            <td>{e.created_at}</td>
        </tr>
        )
        }
        </tbody>
        </table>
        </div>
        </main>
        <section className="hero__wrapper hero__wrapper--lower"><h2>Work better in your company</h2>
        <img src="/images/hero_two.png"/>
        </section>
        <Footer/>
        </>
    );
};

export default Homepage;