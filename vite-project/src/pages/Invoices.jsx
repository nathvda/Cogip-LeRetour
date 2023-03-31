import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';
import ReactPaginate from 'react-paginate';

const Invoices = () => {
    
    const [invoices, setInvoices] = useState([]);


    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-invoices')
        .then(res => setInvoices(res.data.invoices))
    })

    return (
        <>
            <Header/>
        <main>
        <h2 className="title--decorated">All Invoices</h2>
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
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


        </div>
        </main>
        <Footer/>
        </>
    );
};

export default Invoices;