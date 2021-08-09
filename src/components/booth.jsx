import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getContestants } from '../services/fakeContenstantService';
import { getPositions } from '../services/fakePositionService';
import BoothTable from './boothTable';
import SelectionListGroup from './common/selectionListGroup';



class Booth extends Component {
    state = { 
        contestants : [],
        positions : []
     }

     componentDidMount() {
        const contestant = getContestants();
        const position = getPositions();
        const positions = [ {name: "All Contestants"}, ...position];
        this.setState({contestants:contestant, positions});
     }

     handleContestantDelete = (contestant) =>{
        const contestants = this.state.contestants.filter( c => c._id !== contestant._id);
        this.setState({contestants});
     }

    render() {
        const { contestants, positions } = this.state
        const {length:contestantsCount} = this.state.contestants;
        if (contestantsCount === 0){
            return(
                <React.Fragment>
                    <Link to="/contestantsForm/New" className="btn btn-outline-info" style={{ marginBottom:20}}>Add New Contestant</Link>
                    <h5>Showing no contestants from the database</h5>
                </React.Fragment>
            )}
        return ( 
            <React.Fragment>
                
            <div className="row align-items-start">
                <div className="col-3">
                    <SelectionListGroup 
                    positions = {positions}/>
                </div>
                <div className="col">
                    <Link to="/contestantsForm/New" className="btn btn-outline-info" style={{ marginBottom:20}}>Add New Contestant</Link>
                    <h5>Showing {contestantsCount} contestants from <strong>somegroup</strong> group in the database</h5>
                    <BoothTable 
                    contestants = { contestants}
                    onRowDelete = {this.handleContestantDelete}
                    />
                </div>
            </div>


                
            </React.Fragment>
         );
    }
}
 
export default Booth;