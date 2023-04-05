import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';

const Invoices = () => {
    
    const [invoices, setInvoices] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(4);
    let itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = invoices.slice(itemOffset, endOffset);


    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-invoices')
        .then(res => setInvoices(res.data.invoices))
    })

    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        
        setPageCount(Math.ceil(invoices.length / itemsPerPage));

        // Invoke when user click to request another page.
    }

    function Items({ currentItems }) {
        return (
            <>
            {
            currentItems && currentItems.map((item) => (
                <tr>
                <td><Link to={`/invoices/${item.id}`}>{item.ref}</Link></td> <td>{item.id_company}</td> <td>{item.created_at}</td>
            </tr>
                ))}
                </>
        );
        }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % invoices.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Header/>
        <main>
        <input className="searchbar" placeholder="Search invoices" type="text" onChange={(e) => search(e.target.value)}/>
        <h2 className="title--decorated">All Invoices</h2>
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Invoice number</th>
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
        /> 
        <PaginatedItems itemsPerPage={4}/>
        </main>
        <Footer/>
        </>
    );
};

export default Invoices;