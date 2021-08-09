import React, { Component } from 'react';
import { Link } from "react-router-dom";


class TableBody extends Component {
    
    render() {
        const { contestants, onRowDelete } = this.props;
        return ( 
            <tbody>
                {contestants.map((contestant, index) =>
                    <tr key={contestant._id}>
                        <td>{index+1}</td>
                        <td><Link to={`/contestantsDetails/${contestant._id}`}>{contestant.name}</Link></td>
                        <td><img src={contestant.picture.thumbnail} alt=""/></td>
                        <td>{contestant.position.name}</td>
                        <td><div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                        </td>
                        <td><button onClick={()=>onRowDelete(contestant)} type="button" className="btn btn-danger btn-sm m-2">Delete</button>
                            <Link to={`/contestantsForm/${contestant._id}`} className="btn btn-secondary btn-sm" >Edit</Link>
                        </td>
                    </tr>
                )}
            </tbody>
         );
    }
}
 
export default TableBody;