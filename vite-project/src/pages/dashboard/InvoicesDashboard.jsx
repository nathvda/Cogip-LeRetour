import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const InvoicesDashboard = () => {

    const [invoices, setInvoices] = useState([]);


    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-invoices')
        .then(res => setInvoices(res.data.invoices))
    })
    
    return (
        <>
            <form className="dashboard__form" action="" method="post">
                <h4>New invoice</h4>
                <div className="form__field"><label htmlFor="type_id">Company</label>
                <input type="text" name="company_id"/></div>
                <div className="form__field"><label htmlFor="ref">Ref</label>
                <input type="text" name="ref"/></div>
                <button type="submit">Save</button>
            </form>
            <section><h4>Last invoices</h4>
            <div className="table__container">
                <table><thead><tr><th>Invoice number</th>
                <th>Dates</th>
                <th>Company</th></tr></thead>
                <tbody>
                {
                invoices.map(e => (
                    <tr><td>{e.ref}</td><td>{e.created_at}</td><td>{e.name}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>
        </>
    );
};

export default InvoicesDashboard;