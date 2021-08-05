import React, { Component } from 'react';

class ContestantsDetails extends Component {
    state = {  }

    handleSave = () =>{

    }

    render() { 
        return ( 
            <React.Fragment>
                <h5>Contestant Details - {this.props.match.params.contestantId}</h5>
                <button onClick={()=>this.handleSave()} type="button" className="btn btn-secondary btn-sm">Save</button>
            </React.Fragment>
        );
    }
}
 
export default ContestantsDetails;