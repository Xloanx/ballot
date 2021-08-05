import React, { Component } from 'react';
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
        console.log(positions);
        this.setState({contestants:contestant, positions});
     }

    render() {
        const { contestants, positions } = this.state
        const {length:contestantsCount} = this.state.contestants;
        if (contestantsCount === 0){
            return <h5>Showing no contestants from the database</h5>
        }
        return ( 
            <React.Fragment>
            <div class="row align-items-start">
                <div class="col-3">
                <div class="list-group">
                    {positions.map(position =>
                        <a href="#" class="list-group-item list-group-item-action">{position.name}</a>
                    )}
                </div>
                </div>
                <div class="col">
                <button type="button" class="btn btn-outline-info">Add New Contestant</button>
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
                                <td>{contestant.name}</td>
                                <td><img src={contestant.picture.thumbnail} /></td>
                                <td>{contestant.group.name}</td>
                                <td><div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                    </div>
                                </td>
                                <td><button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                    <button type="button" class="btn btn-secondary btn-sm">Edit</button></td>
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