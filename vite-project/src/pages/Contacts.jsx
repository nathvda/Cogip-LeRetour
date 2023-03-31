import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-contacts')
        .then(res => setContacts(res.data.contacts))
    })

    return (
        <>
        <Header/>
        <main>
        <h2 className="title--decorated">All contacts</h2>
        <div className="homepage__table-container"><table className="homepage__table"><thead><tr>
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
        </div>
        </main>
        <Footer/>
        </>
    );
};

export default Contacts;