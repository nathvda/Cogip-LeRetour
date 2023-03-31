import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';

const Companies = () => {
    
    const [companies,setCompanies] = useState([]);

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-companies')
        .then(res => setCompanies(res.data.companies))
    })

    return (
        <>
        <Header/>
        <main>  
        <h2 className="title--decorated">All companies</h2> 
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Name</th>
        <th>TVA</th>
        <th>Country</th>
        <th>Type</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        {companies.map((e,index) => 
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
        </div>
        </main>
        <Footer/>
        
        </>
    );
};

export default Companies;