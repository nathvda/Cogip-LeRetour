import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/homepage/header/Header';
import Footer from './components/homepage/footer/Footer';
import ReactPaginate from 'react-paginate';

const Companies = () => {
    
    const [companies,setCompanies] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(5);
    let itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = companies.slice(itemOffset, endOffset);

    useEffect(() => {
        axios.get('https://cogip.jonathan-manes.be/get-companies')
        .then(res => setCompanies(res.data.companies))
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
        
        setPageCount(Math.ceil(companies.length / itemsPerPage));

        // Invoke when user click to request another page.
    }

    function Items({ currentItems }) {
        return (
            <>
            {
            currentItems && currentItems.map((item) => (
                <tr>
                <td>{item.name}</td> 
                <td>{item.tva}</td>
                <td>{item.country}</td>
                <td>{`${(item.type_id === 1) ? "Client" : "Supplier"}`}</td>
                <td>{item.created_at}</td>
                </tr>
                ))}
                </>
        );
        }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % companies.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
        <Header/>
        <main>  
        
        <h2 className="title--decorated">All companies</h2>
        <input className="searchbar" placeholder="Search companies" type="text" onChange={(e) => search(e.target.value)}/> 
        <div className="homepage__table-container">
        <table className="homepage__table"><thead><tr>
        <th>Name</th>
        <th>TVA</th>
        <th>Country</th>
        <th>Type</th>
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
        pageRangeDisplayed={2}
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

export default Companies;