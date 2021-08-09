import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
    const {contestants, columns, onRowDelete} =props;
    return ( 
        <table className='table'>
            <TableHeader columns={columns} />
            <TableBody 
            contestants = {contestants} 
            columns = {columns}
            onRowDelete = {onRowDelete}/>
        </table>
     );
}
 
export default Table;