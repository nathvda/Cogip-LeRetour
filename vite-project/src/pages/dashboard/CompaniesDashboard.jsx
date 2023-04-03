import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const CompaniesDashboard = () => {

    const [companies,setCompanies] = useState([]);

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-companies')
        .then(res => setCompanies(res.data.companies))
    })

    return (
        <>
            <form className="dashboard__form" action="" method="post">
                <h4>New company</h4>
                <div className="form__field"><label htmlFor="type_id">Type</label>
                <input type="text" name="type_id"/></div>
                <div className="form__field"><label htmlFor="name">Name</label>
                <input type="text" name="name"/></div>
                <div className="form__field"><label htmlFor="country">Country</label>
                <input type="text" name="country"/></div>
                <div className="form__field"><label htmlFor="tva">TVA</label>
                <input type="text" name="tva"/></div>
                <button type="submit">Save</button>
            </form>
            <section><h4>Last companies</h4>
            <div className="table__container">
                <table><thead><tr><th>Name</th>
                <th>TVA</th>
                <th>Country</th></tr></thead>
                <tbody>
                {
                companies.map(e => (
                    <tr><td>{e.name}</td><td>{e.tva}</td><td>{e.country}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>
        </>
    );
};

export default CompaniesDashboard;