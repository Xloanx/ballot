import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';


class TableBody extends Component {
    
    render() {
        const { filteredContestants, filteredContestantsVotes, onVote, onRowDelete } = this.props;

        return ( 
            <React.Fragment>
                <tbody>
                { filteredContestants.map((contestant, index)=>
                    <tr key={contestant._id}>
                            <td>{index+1}</td>
                            <td><Link 
                                    to={`/contestantsDetails/${contestant._id}`}>
                                        {contestant.name}
                                </Link></td>
                            <td><img src={contestant.picture.thumbnail} alt=""/></td>
                            <td>{contestant.position.name}</td>
                            <td>{filteredContestantsVotes[index].totalVotes}</td>
                            <td><div className="form-check">
                                    <input onChange={()=>onVote(contestant)} 
                                        className="form-check-input" 
                                        type="radio" 
                                        value={contestant._id} 
                                        name={contestant.position._id} id="flexRadioDefault1" />    
                                </div>
                            </td>
                            <td><button 
                                    onClick={()=>onRowDelete(contestant)} 
                                    type="button" 
                                    className="btn btn-danger btn-sm m-2">Delete
                                </button>
                                <Link 
                                    to={`/contestantsForm/${contestant._id}`} 
                                    className="btn btn-secondary btn-sm" >Edit
                                </Link>
                            </td>
                    </tr>
                )}
            </tbody>
            </React.Fragment>
        );
    }
}
 
export default TableBody;