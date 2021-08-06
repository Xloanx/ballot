import React, { Component } from 'react';

class ContestantsDetails extends Component {
    state = {  }


    render() {
        const {match} = this.props;
        return ( 
            <React.Fragment>
                <h5>Contestant Details - {match.params.contestantId}</h5>
            </React.Fragment>
        );
    }
}
 
export default ContestantsDetails;