import React, { Component } from 'react';
import Table from './common/table';


class BoothTable extends Component {
    columns = [];

    render() {
        const { filteredContestants, filteredContestantsVotes, onVote, onRowDelete } = this.props;
        return (
            <React.Fragment>
                <Table 
                    filteredContestants = {filteredContestants}
                    filteredContestantsVotes = {filteredContestantsVotes}
                    columns ={this.columns}
                    onVote = {onVote}
                    onRowDelete={onRowDelete}
                />
            </React.Fragment>
            
            
         );
    }
}
 
export default BoothTable;