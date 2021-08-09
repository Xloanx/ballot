import React, { Component } from 'react';
import Table from './common/table';


class BoothTable extends Component {
    columns = [];

    render() {
        const { contestants, onRowDelete } = this.props;
        return (
            <React.Fragment>
                <Table 
                    contestants = {contestants}
                    columns ={this.columns}
                    onRowDelete={onRowDelete}
                />
            </React.Fragment>
            
            
         );
    }
}
 
export default BoothTable;