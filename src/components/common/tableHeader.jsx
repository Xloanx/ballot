import React, { Component } from 'react';

class TableHeader extends Component {
   
    
    render() {
    return ( 
        <thead>
        <tr>
            <th>#</th>
            <th>Name of Contestant</th>
            <th>Picture</th>
            <th>Position</th>
            <th>Votes</th>
            <th>Vote</th>
            <th>&nbsp;</th>
        </tr>
    </thead>
        );
}
}
 
export default TableHeader;