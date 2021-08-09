import { cloneWithShallow } from 'joi-browser';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getContestants } from '../services/fakeContenstantService';
import { getPositions } from '../services/fakePositionService';
import BoothTable from './boothTable';
import SelectionListGroup from './common/selectionListGroup';



class Booth extends Component {
    state = { 
        contestants : [],
        positions : [],
        selectedPosition: ""
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

     handlePositionSelect = position =>{
        //console.log(`${position.name} selected`);
        this.setState({selectedPosition: position});
    }

    render() {
        const { contestants, positions, selectedPosition } = this.state
        
        let filteredContestants = contestants;
        if (selectedPosition && selectedPosition._id)
            filteredContestants = contestants.filter(c=>c.position._id === selectedPosition._id)

        const {length:filteredContestantsCount} =filteredContestants;

        let headlines = selectedPosition.name === "All Contestants" || selectedPosition === ""
                    ?<h5>Showing {filteredContestantsCount} contestants from the database </h5>
                    :<h5>Showing {filteredContestantsCount} contestants from the database contesting for <strong>{selectedPosition.name}</strong> </h5>;

        if (filteredContestantsCount === 0){
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
                    positions = {positions}
                    selectedPosition = {selectedPosition}
                    onPositionSelect={this.handlePositionSelect}/>
                </div>
                <div className="col">
                    <Link to="/contestantsForm/New" className="btn btn-outline-info" style={{ marginBottom:20}}>Add New Contestant</Link>
                    {headlines}               
                    <BoothTable 
                    contestants = { filteredContestants}
                    onRowDelete = {this.handleContestantDelete}
                    />
                </div>
            </div>


                
            </React.Fragment>
         );
    }
}
 
export default Booth;