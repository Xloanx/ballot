import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
    const {filteredContestants, filteredContestantsVotes, columns, onVote, onRowDelete} =props;
    return ( 
        <table className='table'>
            <TableHeader columns={columns} />
            <TableBody 
            filteredContestants = {filteredContestants}
            filteredContestantsVotes ={filteredContestantsVotes}
            columns = {columns}
            onVote = {onVote}
            onRowDelete = {onRowDelete}/>
        </table>
     );
}
 
export default Table;