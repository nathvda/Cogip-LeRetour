import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const ContactsDashboard = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-contacts')
        .then(res => setContacts(res.data.contacts))
    })

    return (
        <>
             <form className="dashboard__form" action="" method="post">
                <h4>New contact</h4>
                <div className="form__field"><label htmlFor="type_id">Type</label>
                <input type="text" name="type_id"/></div>
                <div className="form__field"><label htmlFor="name">Name</label>
                <input type="text" name="name"/></div>
                <div className="form__field"><label htmlFor="email">Email</label>
                <input type="email" name="email"/></div>
                <div className="form__field"><label htmlFor="phone">Phone</label>
                <input type="text" name="phone"/></div>
                <button type="submit">Save</button>
            </form>
            <section><h4>See contacts</h4>
            <div className="table__container">
                <table><thead><tr><th>Name</th>
                <th>Phone</th>
                <th>Email</th></tr></thead>
                <tbody>
                {
                contacts.map(e => (
                    <tr><td>{e.name}</td><td>{e.phone}</td><td>{e.email}</td></tr>
                ))
                }
                </tbody>
                </table>
            </div></section>
        </>
    );
};

export default ContactsDashboard;