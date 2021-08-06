import React, { Component } from 'react';

class ContestantsForm extends Component {
    state = {  }
    render() { 
        const {match} = this.props;
        return (
            
            <React.Fragment>
                <h5>Contestant Form - {match.params.contestantId}</h5>
                <button onClick={()=>this.handleSave()} type="button" className="btn btn-secondary btn-sm">Save</button>
            </React.Fragment>
         );
    }
}
 
export default ContestantsForm;