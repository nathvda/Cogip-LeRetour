import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [originaldata, setOriginalData] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(4);
    let itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = contacts.slice(itemOffset, endOffset);

    useEffect(() => {
        try{
            axios.get('https://cogip.jonathan-manes.be/get-contacts')
        .then(res =>{

        setOriginalData(res.data.contacts.sort((a,b) => a.name > b.name));
        setContacts(res.data.contacts.sort((a,b) => a.name > b.name));
        }
        )
    } catch (e) {
        console.log(e);
    }
    
    },[])



    function search(haha){
        const filtered = originaldata.filter((e) => e['name'].toLowerCase().includes(haha.toLowerCase()));
        setContacts(filtered);
    }

    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)        
        setPageCount(Math.ceil(contacts.length / itemsPerPage));

        // Invoke when user click to request another page.
    }

    function Items({ currentItems }) {
        return (
            <>
            {
            currentItems && currentItems.map((item) => (
                <tr>
                <td><Link to={`/contact/${item.id}`}>{item.name}</Link></td> 
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.company.name}</td>
                <td>{item.created_at}</td>
            </tr>
                ))}
                </>
        );
        }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % contacts.length;
        setItemOffset(newOffset);
    };

    return (
        <>
        <Header/>
        <main>
        <div className="title__wrapper"><input className="searchbar" placeholder="Search contacts" type="text" onChange={(e) => search(e.target.value)}/>
        <h2 className="title--decorated">All contacts</h2></div>
        <div className="homepage__table-container"><table className="homepage__table"><thead><tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Mail</th>
        <th>Company</th>
        <th>Created_at</th></tr></thead>
        <tbody>
        <Items currentItems={currentItems}/>
        </tbody>
        </table>
        </div>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName="hello"
        /> 
        <PaginatedItems itemsPerPage={4}/>
        </main>
        <Footer/>
        </>
    );
};

export default Contacts;