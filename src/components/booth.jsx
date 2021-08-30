import React, { Component } from 'react';
import { Link } from "react-router-dom";

import BoothTable from './boothTable';
import SelectionListGroup from './common/selectionListGroup';

import { getContestants } from '../services/fakeContenstantService';
import { getPositions } from '../services/fakePositionService';
import { getContestantVote, getContestantsVotes } from '../services/fakeVotesServices';

class Booth extends Component {
    state = { 
        contestants : [],
        positions : [],
        selectedPosition: "",
        contestantsVotes : [],
        preferredContestants : []
     }

     componentDidMount() {
        const contestants = getContestants();
        const contestantsVotes = getContestantsVotes();
        const position = getPositions();
        const positions = [ {name: "All Contestants"}, ...position];
        this.setState({contestants, positions, contestantsVotes});
     }

     handleContestantDelete = (contestant) =>{
        let contestants = this.state.contestants.filter( c => c._id !== contestant._id);
        let contestantsVotes = this.state.contestantsVotes.filter( c => c._id !== contestant._id);
        this.setState({contestants, contestantsVotes});
     }

     handlePositionSelect = position =>{
        //console.log(`${position.name} selected`);
        this.setState({selectedPosition: position});
    }

    handleVotes = (contestant) =>{
        //vote increment
        const votedContestant = this.state.contestantsVotes.filter(c=>c._id === contestant._id);
        const clonedContestants = [...this.state.contestantsVotes];   
        const index = clonedContestants.indexOf(votedContestant[0]); 
        clonedContestants[index] = {...clonedContestants[index]};
        clonedContestants[index].totalVotes = clonedContestants[index].totalVotes+1;
        this.setState({ contestantsVotes : clonedContestants });
        //contestant registration
        console.log(votedContestant[0]._id);
        const clonedPreferred = [...this.state.preferredContestants];
        console.log(typeof(this.state.preferredContestants)); 
        clonedPreferred.push(votedContestant[0]._id);
        this.setState({ preferredContestants : clonedPreferred });
    }

    render() {
        const { contestants, positions, selectedPosition, contestantsVotes } = this.state
        
        let filteredContestants = contestants;
        let filteredContestantsVotes = contestantsVotes;

        if (selectedPosition && selectedPosition._id){
            filteredContestantsVotes = [];
            filteredContestants = contestants.filter(c=>c.position._id === selectedPosition._id);
            filteredContestants.map(filteredContestant =>
                contestantsVotes.map(contestantVote =>{
                    if (contestantVote._id === filteredContestant._id)
                        filteredContestantsVotes.push(contestantVote);
                    })
            )
        }
        
        
        const {length:filteredContestantsCount} = filteredContestants;

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
                    filteredContestants = { filteredContestants}
                    filteredContestantsVotes = {filteredContestantsVotes}
                    onVote = {this.handleVotes}
                    onRowDelete = {this.handleContestantDelete}
                    />
                </div>
            </div>


                
            </React.Fragment>
         );
    }
}
 
export default Booth;