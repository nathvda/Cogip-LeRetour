import React from 'react';
import {useParams} from 'react';

const Invoice = () => {
    const {id} = useParams();

    return (
        <div>
         Invoice.  
        </div>
    );
};

export default Invoice;