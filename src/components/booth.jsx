import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getContestants } from '../services/fakeContenstantService';
import { getPositions } from '../services/fakePositionService';



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

     handleDelete = (contestant) =>{
        const contestants = this.state.contestants.filter( c => c._id !== contestant._id);
        this.setState({contestants});
     }

     handleEdit = (contestant) => {
        <Link to={`/contestantsForm/${contestant._id}`}>{contestant.name}</Link>
     }

    render() {
        const { contestants, positions } = this.state
        const {length:contestantsCount} = this.state.contestants;
        if (contestantsCount === 0){
            return(
                <React.Fragment>
                    <Link to="/contestantsForm/new" className="btn btn-outline-info" style={{ marginBottom:20}}>Add New Contestant</Link>
                    <h5>Showing no contestants from the database</h5>
                </React.Fragment>

            )}
        return ( 
            <React.Fragment>
            <div className="row align-items-start">
                <div className="col-3">
                <div className="list-group">
                    {positions.map(position =>
                        <a key={position._id} href="#" className="list-group-item list-group-item-action">{position.name}</a>
                    )}
                </div>
                </div>
                <div className="col">
                <Link to="/contestantsForm/new" className="btn btn-outline-info" style={{ marginBottom:20}}>Add New Contestant</Link>
                <h5>Showing {contestantsCount} contestants from <strong>somegroup</strong> group in the database</h5>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name of Contestant</th>
                            <th>Picture</th>
                            <th>Position</th>
                            <th>Vote</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contestants.map((contestant, index) =>
                            
                                <tr key={contestant._id}>
                                    <td>{index+1}</td>
                                    <td><Link to={`/contestantsDetails/${contestant._id}`}>{contestant.name}</Link></td>
                                    <td><img src={contestant.picture.thumbnail} /></td>
                                    <td>{contestant.group.name}</td>
                                    <td><div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </td>
                                    <td><button onClick={()=>this.handleDelete(contestant)} type="button" className="btn btn-danger btn-sm m-2">Delete</button>
                                        <Link to={`/contestantsForm/${contestant._id}`} className="btn btn-secondary btn-sm" >Edit</Link>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
                </div>
            </div>


                
            </React.Fragment>
         );
    }
}
 
export default Booth;