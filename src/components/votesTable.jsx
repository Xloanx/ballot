import React, { Component } from 'react';

class VoteTable extends Component {
    state = {  }
    render() { 
        const { filteredContestantsVotes} = this.props;
        return ( 
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                       {filteredContestantsVotes.map(m=>
                         <tr>
                            <td>{m.totalVotes}</td>
                        </tr>)}
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default VoteTable;